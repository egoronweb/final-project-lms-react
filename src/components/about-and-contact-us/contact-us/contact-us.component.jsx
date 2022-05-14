import React from "react";


import '../../lms-styling/lms-styling.scss';
class ContactUs extends React.Component{

    render(){
        return(
           <div className="wrapper">
                 <nav className="top-nav-bar">
                    <div className="mylogo"><a href="/">egoron<span>Web</span></a></div>
                    <ul className="menu-texts">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact-us" className="active">Contact us</a></li>
                        <li><a href="/user-register">Sign Up</a></li>
                        <li><a href="/user-login">Login</a></li>
                    </ul>
                </nav>

                <div className="content">
                    <form className="inbox-form">
                       <div className="inbox-top">
                           <button type="button">B</button>
                       </div>
                       <div className="inbox-left">
                           <a href="/contact-us/"><button type="button" className="active">Inbox</button></a>
                           <a href="/contact-us/create-message"><button type="button">Create</button></a>
                           <a href="/contact-us/sent-message"><button type="button">Sent</button></a>
                           <a href="/contact-us/outbox-message"><button type="button">Outbox</button></a>
                           <a href="/contact-us/draft-message"><button type="button">Draft</button></a>
                       </div>
                       <div className="inbox-right">
                           <table className="inbox-table">
                               <thead>
                                   <tr>
                                       <th>Name</th>
                                       <th>Title</th>
                                       <th>Date</th>
                                   </tr>
                               </thead>
                               <tbody>
                                   <tr>
                                       <td>Sender</td>
                                       <td>Title</td>
                                       <td>04/29/22</td>
                                   </tr>
                               </tbody>
                           </table>
                       </div>
                    </form>
                 </div>

                 <footer className="footer">
                        <div className="footer-left">
                            <span>Privacy and Policy</span>
                            <span>Terms and Conditions</span>
                            <span>Contact us</span>
                        </div>
                        <div className="footer-center">
                            <p>Alright Reserved@2022</p>
                            <p>egoron.info</p>
                        </div>
                        <div className="footer-right">
                            <img src="https://cdn.pixabay.com/photo/2021/08/16/08/55/facebook-6549798_1280.jpg" alt="" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png" alt="" />
                            <img src="data:image/png;base64,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" alt="" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXimNscwCPD5sHXBMBBOUIhxS4D_txKTuqQw&usqp=CAU" alt="" />
                        </div>
                    </footer>
            </div>
        );
    }
}

export default ContactUs;