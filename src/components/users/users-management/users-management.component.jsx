import React from "react";

class UserManagement extends React.Component{

    render(){
        return(
            <div className="user-management">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Year/Course</th>
                            <th>Email</th>
                            <th>Functions</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>19-20953</td>
                            <td>Efren Goron</td>
                            <td>3 BSIT</td>
                            <td>admin@egoron.info</td>
                            <div className="user-function-btns">
                                <button type="button" class="btn btn-outline-primary">Update</button>
                                <button type="button" class="btn btn-outline-primary">Delete</button>
                            </div>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default UserManagement;