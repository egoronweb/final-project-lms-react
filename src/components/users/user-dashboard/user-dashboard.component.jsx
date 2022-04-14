import React from "react";
import './user-dashboard.style.css';
class UserDashboard extends React.Component{


    render(){
        return(
            <div className="user-dashboard">
                <div className="welcome-message">Welcome Guest</div>
                <div className="user-dashboard-btns">
                   <a href="/user-dashboard/list-of-books"><button type="button" className="user-dashboard-btn list-btn">List of Books</button></a>
                   <a href="/user-dashboard/borrowed-books"><button type="button" className="user-dashboard-btn borrowed-btn">Borrowed Books</button></a>
                   <a href="/user-dashboard/user-inbox"><button type="button" className="user-dashboard-btn inbox-btn">Inbox</button></a>
                </div>
            </div>
        );
    }
}

export default UserDashboard;