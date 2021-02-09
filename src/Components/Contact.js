import React from "react";

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = { value: null}
    }
    render(){
        return(
            <h1>Contact us</h1>
        );
    }
}

export default Contact;