import React from "react";

class BooksManagement extends React.Component{


    render(){
        return(
            <div className="books-management">
                  <table>
                    <thead>
                        <tr>
                            <th>Book Code</th>
                            <th>Book Name</th>
                            <th>Location</th>
                            <th>Functions</th>
                        </tr>
                        <tr>
                            <td>Math0002</td>
                            <td>Mathematics</td>
                            <td>bookshelf 5</td>
                            <div className="books-function-btns">
                                <button type="button">Create</button>
                                <button type="button">Update</button>
                                <button type="button">Delete</button>
                            </div>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default BooksManagement;