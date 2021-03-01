import React from "react";
import { Row, Col } from "react-bootstrap";

// Styles
import '../Styles/dist/Services.css';

function Services(){
    const mql = window.matchMedia('(max-width: 600px)');
    let mobileView = mql.matches;
    if(!mobileView){
        return(
            <div className="services-container">
                <h1>Services</h1>
                <div style={{ margin: '5%'}} className="wrapper">
                    <Row style={{paddingLeft: '10%'}}>
                        <Col>
                            <h3 style={{textDecoration: 'underline'}}>What Services do I Provide?</h3> 
                        </Col>
                        <Col>
                            <h5>I can Provide a Full-Stack Website using ReactJS, ExpressJS and MongoDB.
                            Anything you would need I should be able to provide. I do Freelancing only so I don't do any Full-Time positions.</h5>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    } else{
        return(
            <div className="phone-services-container">
                <h1 id="services">Services</h1>
                <div className="phone-wrapper">
                    <h3 id="phone-title" 
                    style={{textDecoration: 'underline', marginLeft: '50px', width: '500px', 
                    marginBottom: '20px'
                    }}>
                        What Services do I Provide?
                    </h3> 
                    <h5 style={{width: '480px', marginBottom: '20px', marginLeft: '10px'}}>
                    I can Provide a Full-Stack Website using ReactJS, ExpressJS and MongoDB.
                    Anything you would need I should be able to provide.
                    I do Freelancing only so I don't do any Full-Time positions.</h5>
                </div>
            </div>
        );
    }
}

export default Services;