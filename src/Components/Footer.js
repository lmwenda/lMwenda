import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import '../Styles/dist/Footer.css'

function Footer(){
    return(
        <div className="footer-container">
            <Container>
                    <p className="text-align-center">Copyright &copy; lMwenda</p>
            </Container>
        </div>
    )
}

export default Footer;