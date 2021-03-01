import React from "react";
import { Row, Col } from "react-bootstrap";
import '../Styles/dist/Contact.css';

function Contact(){
    const mql = window.matchMedia('(max-width: 600px)');
    let phoneView = mql.matches;
    if(phoneView){
        return(
            <div className="phone-contact-container">
                <Row>
                    <Col style={{textAlign: 'left', paddingLeft: '50px'}}>
                        <h4>✦ lMwenda</h4>
                    </Col>
                    <Col style={{textAlign: 'right', paddingRight: '90px',  
                    paddingBottom: '10px', width: '300px'}}>
                        <h5>Contacts & Resources</h5>
                    </Col>
                </Row>
                <Row>
                    <Col style={{color: '#fff', paddingLeft: '250px', paddingBottom: '10px'}}>
                        <a style={{color: '#fff'}} href="https://github.com/lmwenda">
                            Github Profile
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col style={{color: '#fff', paddingLeft: '325px', marginTop: '10px'}}>
                        Lukemwen@hotmail.com
                    </Col>
                    <Col style={{color: '#fff', paddingLeft: '305px', marginTop: '10px'}}>
                        Copyright &copy; lMwenda
                    </Col>
                </Row>
            </div>
        );
    } else{
        return(
            <div className="contact-container">
                <Row>
                    <Col style={{textAlign: 'left', paddingLeft: '50px'}}>
                        <h4>✦ lMwenda</h4>
                    </Col>
                    <Col style={{textAlign: 'right', paddingRight: '155px',  
                    paddingBottom: '10px'}}>
                        <h5>Contacts and Resources</h5>
                    </Col>
                </Row>
                <Row>
                    <Col style={{color: '#fff', paddingLeft: '875px'}}>
                        Discord Profile: number 1 dev#1019
                    </Col>
                </Row>
                <Row>
                    <Col style={{color: '#fff', paddingLeft: '800px', marginTop: '10px'}}>
                        Lukemwen@hotmail.com
                    </Col>
                </Row>
                <Row>
                    <Col style={{color: '#fff', textAlign: 'right', paddingRight: '290px',
                    paddingTop: '10px'
                    }}>
                        <a style={{color: '#fff'}} href="https://github.com/lmwenda">
                            Github Profile
                        </a>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Contact;