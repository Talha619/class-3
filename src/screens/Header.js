import React, { Component } from 'react';
// import * as firebase from 'firebase';

class Header extends Component {

    renderData = () => {
        return(
            <p>HEADER DATA</p>
        )
    }

    renderHeader = () => {
        return (
            <h1>HEADER</h1>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.renderHeader()}
                {this.renderData()}
            </React.Fragment>
        )
    }
}

export default Header;
