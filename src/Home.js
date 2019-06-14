import React, { Component } from 'react';
import NavBar from './NavBar'

class Home extends Component {
    render() {
        return (
            <div className="container" id="content-body" >
                <NavBar/>
                <h1>Rount Table Artistry</h1>
            </div>
        );
    }
}

export default Home;