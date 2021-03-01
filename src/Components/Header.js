import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import '../Styles/dist/Header.css';

class Header extends React.Component{

    render(){
        const mql = window.matchMedia('(max-width: 600px)');
        let mobileView = mql.matches;
        if(!mobileView){
            return(
                <div className="header-container">
                    <nav className="nav-bar">
                        <h1 className="title">✦ lMwenda</h1>
                        <ul className="nav">
                            <li><a style={{color: 'rgb(6, 130, 246)'}}
                            href="#upper-part">Home</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a style={{color: '#fff', textDecoration: 'none'}} className="hire" href="#contact-us">Hire me</a></li>
                        </ul>
                    </nav>
                </div>
            );
        } else{
            return(
                <div className="phone-header-container">
                    <nav className="phone-nav-bar">
                        <h1 className="phone-title">✦ lMwenda</h1>
                        <DropdownButton style={{marginTop: '10px'}}
                        id="dropdown-basic-button" title={<i class="fa fa-bars"></i>}>
                            <Dropdown.Item href="#upper-part">
                            <a style={{color: 'rgb(6, 130, 246)'}}
                            href="#upper-part">Home</a></Dropdown.Item>
                            <Dropdown.Item href="#projects">
                                <a style={{color: '#000'}} href="#projects">Projects</a>
                            </Dropdown.Item>
                            <Dropdown.Item href="#services">
                                <a style={{color: '#000'}} href="#services">Services</a>
                            </Dropdown.Item>
                            <Dropdown.Item href="#contact-us">
                                <a style={{color: '#000'}} href="#contact-us">Hire me</a>
                            </Dropdown.Item>
                        </DropdownButton>
                    </nav>
                </div>
            );
        }
    }
}

export default Header;