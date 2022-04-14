import React from "react";

class ListOfBooks extends React.Component{


    render(){
        return(
            <div className="borrowed-books">
                <table>
                    <thead>
                        <tr>
                            <th>Borrower ID</th>
                            <th>Borrower Name</th>
                            <th>Book Code</th>
                            <th>Book Name</th>
                            <th>Location</th>
                            <th>Functions</th>
                        </tr>
                        <tr>
                            <td>19-20718</td>
                            <td>Efren Goron</td>
                            <td>Math001</td>
                            <td>Mathematics</td>
                            <td>Bookshelf 5</td>
                            <div className="table-functions">
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

export default ListOfBooks;