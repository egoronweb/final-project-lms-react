import React from "react";

import './home-title.style.css';
class HomeTitle extends React.Component{

    render(){
        return(
            <div className="home-title">
                <h1>Library Management System</h1>
                <div className="home-title-underliner"></div>
                <p>Discover books that are new to you!</p>
            </div>
        );
    }
}

export default HomeTitle;