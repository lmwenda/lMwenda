import React from "react";
import '../Styles/dist/Contact.css';

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = { value: null}
    }
    render(){
        return(
            <div className="contact-container">
                <h1>Contact</h1>
            </div>
        );
    }
}

export default Contact;