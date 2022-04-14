import React from "react";
import './header.style.css';
class Header extends React.Component{

    render(){
        return(
            <nav className="top-nav-bar">
                <div className="mylogo"><a href="/">egoron<span>Web</span></a></div>
                <ul className="menu-texts">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact-us">Contact us</a></li>
                    <li><a href="/user-register">Sign Up</a></li>
                </ul>
            </nav>
        );
    }
}

export default Header;