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
                    <Row style={{paddingLeft: '1%'}}>
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
                <div className="phone-wrapper">
                    <h2 id="phone-title" 
                    style={{textDecoration: 'underline', marginLeft: '25px', width: '440px', 
                    marginBottom: '20px', marginTop: '35px'
                    }}>
                        What Services do I Provide?
                    </h2> 
                    <h5 style={{width: '480px', marginBottom: '40px', marginLeft: '10px'}}>
                    I can Provide a Full-Stack Website using ReactJS, ExpressJS and MongoDB.
                    Anything you would need I should be able to provide.
                    I do Freelancing only so I don't do any Full-Time positions.</h5>
                </div>
            </div>
        );
    }
}

export default Services;