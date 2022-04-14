import React from "react";

class Footer extends React.Component{


    render(){
        return(
            <footer>
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
                <span>F</span>
                <span>I</span>
                <span>T</span>
                <span>Y</span>
            </div>
            </footer>
        );
    }
}

export default Footer;