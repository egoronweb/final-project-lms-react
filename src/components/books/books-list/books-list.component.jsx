import React from "react";

import '../books-styling/books-styling.style.css';
class ListOfBooks extends React.Component{


    render(){
        return(
            <div className="list-of-books">
                <div className="list-title">List of Books</div>
                <span>B</span>
                <div className="sel-container">
                    <span>Book code</span>
                    <span>Book name</span>
                    <span>No. of Books</span>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Book Code</th>
                            <th>Book Name</th>
                            <th>Location</th>
                            <th>Function</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Eng0001</td>
                        <td>English Remedial</td>
                        <td>bookshelf 1</td>
                        <td>
                            <button type="button" className="list-add-btn">Add</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Eng0002</td>
                        <td>English Grammar</td>
                        <td>bookshelf 1</td>
                        <td>
                            <button type="button" className="list-add-btn">Add</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Eng0003</td>
                        <td>English Pronouns</td>
                        <td>bookshelf 1</td>
                        <td>
                            <button type="button" className="list-add-btn">Add</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Eng0004</td>
                        <td>English Expressions</td>
                        <td>bookshelf 1</td>
                        <td>
                            <button type="button" className="list-add-btn">Add</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Eng0005</td>
                        <td>English Nouns</td>
                        <td>bookshelf 1</td>
                        <td>
                            <button type="button" className="list-add-btn">Add</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Math0021</td>
                        <td>Math Binomials</td>
                        <td>bookshelf 2</td>
                        <td>
                            <button type="button" className="list-add-btn">Add</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Math0022</td>
                        <td>Math Trinominals</td>
                        <td>bookshelf 2</td>
                        <td>
                            <button type="button" className="list-add-btn">Add</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Math0023</td>
                        <td>Math Trigonometry</td>
                        <td>bookshelf 2</td>
                        <td>
                            <button type="button" className="list-add-btn">Add</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Math0024</td>
                        <td>Math Expressions</td>
                        <td>bookshelf 2</td>
                        <td>
                            <button type="button" className="list-add-btn">Add</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Math0025</td>
                        <td>Math Fractions</td>
                        <td>bookshelf 2</td>
                        <td>
                            <button type="button" className="list-add-btn">Add</button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default ListOfBooks;