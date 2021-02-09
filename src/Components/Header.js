import React, { Component, useState } from "react";
import '../Styles/dist/Header.css';

export function Button(){
    const [ toggle, setToggle ] = useState(false);
    return(
        <div>

        </div>
    );
}

class Header extends Component{
    state = { clicked: false }

    handleClick = () => {
        this.setState( { clicked: !this.state.clicked } )
    }

    render(){
        return(
            <div className="header-container">
                <nav className="nav-bar">
                    <h1 className="title">✦ lMwenda</h1>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                    <ul className="nav">
                        <li><a style={{color: '#000'}} href="#upper-part">Home</a></li>
                        <li><a style={{color: '#000'}} href="#projects">Projects</a></li>
                        <li><a style={{color: '#000'}} href="services">Services</a></li>
                        <li><a className="hire" href="#contact-us">Hire me</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;