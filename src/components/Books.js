import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBooks, fetchChars } from '../actions/bookActions';
import { Link } from 'react-router-dom';
import ReactTable from "react-table";
import "react-table/react-table.css";


class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            mounts: 0
        };
    };

    componentWillMount() {
        this.props.fetchBooks();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        document.querySelector('#root').classList.add('Books-page');
    }

    componentWillUnmount() {
        document.querySelector('#root').classList.remove('Books-page');  
    }

    render() {
        return (
            <div className="Books-container Container">
                <h1>The World of Ice and Fire</h1>
                <div className="Table-parent">
                <ReactTable
                    data={this.props.books}
                    getTdProps={this.handleTableCellClick}
                    columns={[
                        {
                        Header: "Books",
                        columns: [
                            {
                            Header: "Title (Sorted Alphabetically, A-Z)",
                            accessor: "name",
                            sortMethod: (a, b) => {
                                if (a > b ) {
                                return a > b ? 1 : -1;
                                }
                                return a.length > b.length ? 1 : -1;
                            }
                            },
                            {
                            Header: "Authors",
                            id: "authors",
                            accessor: "authors"
                            },
                            {
                            Header: "Released (Sorted by Date)",
                            id: "released",
                            accessor: "released",
                            sortMethod: (a, b) => {
                                a = new Date(a).getTime();
                                b = new Date(b).getTime();
                                return b > a ? 1 : -1;
                                }
                            },
                            {
                            Header: "Page Count",
                            id: "numberOfPages",
                            accessor: "numberOfPages",
                            sortMethod: (a, b) => {
                                if (a > b) {
                                return a > b ? 1 : -1;
                                }
                                return a.length > b.length ? 1 : -1;
                            }
                            }
                        ]
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                    SubComponent={ row => {
                        return (
                            <ReactTable
                                data={[row.original]}
                                resolveData={ data => data.map( (row, i) => row )}
                                getTdProps={this.handleTableCellClick}
                                columns={[
                                    {
                                    Header: null,
                                    columns: [
                                        {
                                        Header: "Characters",
                                        id: "characters",
                                        accessor: "characters"
                                        }
                                    ]
                                    }
                                ]}
                                defaultPageSize={10}
                                className="-striped -highlight"
                            />
                        )
                    }}
                    />
                </div>
                <div className="Home-button">
                    <Link to="/" >Home</Link>
                </div>
            </div>
        )
    }
};

Books.propTypes = {
    fetchBooks: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    books: state.books.items,
    chars: state.chars.items
})

export default connect(mapStateToProps, { fetchBooks, fetchChars  })(Books);