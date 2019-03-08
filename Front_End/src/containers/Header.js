import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <div className="header">
            <a>Home</a>
            <a>New booking</a>
            <a>Table view</a>
            </div>
        )
    }
}

export default Header;