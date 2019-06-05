import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchChars } from '../actions/bookActions';
import { Link } from 'react-router-dom';
import ReactTable from "react-table";
import "react-table/react-table.css";


class Characters extends Component {
    constructor(props){
        super(props);
        this.state = {
            mounts: 0
        };
    };

    componentWillMount() {
        this.props.fetchChars();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        document.querySelector('#root').classList.add('Char-page');
    }

    componentWillUnmount() {
        document.querySelector('#root').classList.remove('Char-page');        
    }

    render() {
        return (
            <div className="Container">
                <h1>Members of Ice and Fire</h1>
                <div className="Table-parent">
                <ReactTable
                    data={this.props.chars}
                    getTdProps={this.handleTableCellClick}
                    columns={[
                        {
                        Header: "Characters",
                        columns: [
                            {
                            Header: "Aliases (Sorted Alphabetically, A-Z)",
                            accessor: "aliases",
                            sortMethod: (a, b) => {
                                if (a > b ) {
                                return a > b ? 1 : -1;
                                }
                                return a.length > b.length ? 1 : -1;
                            }
                            },
                            {
                            Header: "Culture",
                            accessor: "culture",
                            sortMethod: (a, b) => {
                                if (a > b ) {
                                return a > b ? 1 : -1;
                                }
                                return a.length > b.length ? 1 : -1;
                            }
                            },
                            {
                            Header: "Gender",
                            accessor: "gender"
                            },
                            {
                            Header: "Books",
                            accessor: "books",
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
                                        Header: "Name",
                                        accessor: "name"
                                        },
                                        {
                                        Header: "House",
                                        accessor: "allegiances"
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


const mapStateToProps = state => ({
    chars: state.chars.items
})

export default connect(mapStateToProps, { fetchChars })(Characters);