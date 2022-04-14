import React from "react";

class AdminDashboard extends React.Component{


    render(){
        return(
            <div className="admin-dashboard">
                <div className="welcome-message">
                    <h1>Welcome Admin</h1>
                </div>
                <div className="user-dashboard-btns">
                    <button type="button">Books Management</button>
                    <button type="button">User Management</button>
                    <button type="button">Inbox</button>
                </div>
            </div>
        );
    }
}

export default AdminDashboard;