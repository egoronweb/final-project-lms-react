import React from "react";

import './contact-us.style.css';
class ContactUs extends React.Component{


    render(){
        return(
            <div className="contacts-content">
               <form action="">
                   <input type="text"/>
                   <input type="text"/>
                   <textarea name="contact_message" id=""></textarea>
               </form>
            </div>
        );
    }
}

export default ContactUs;