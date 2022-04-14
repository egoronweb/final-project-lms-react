import React from "react";

class UserInbox extends React.Component{


    render(){
        return(
            <form action="">
                <input type="search" value="Search Messages"/>
                <table>
                    <thead>
                        <tr>
                            <th>Sender</th>
                            <th>Title</th>
                            <th>Time Received</th>
                            <th>Functions</th>
                        </tr>
                        <tr>
                            <td>admin@egoron.info</td>
                            <td>I want to borrow books</td>
                            <td>April 13, 2022</td>
                            <div className="inbox-function-btns">
                                <button type="button">Reply</button>
                                <button type="button">Delete</button>
                            </div>
                        </tr>
                    </thead>
                </table>
            </form>
        );
    }
}


export default UserInbox;