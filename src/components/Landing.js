import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Landing extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        document.querySelector('body').style.overflowY = 'hidden';
    }

    componentWillUnmount() {
        document.querySelector('body').style.overflowY = 'scroll';
    }

    render(){
        return (
            <div className="Landing">
                <Link to="/Books">Books</Link>
                <hr/>
                <Link to="/Characters">Members</Link>
            </div>
        )
    }
};

export default Landing;