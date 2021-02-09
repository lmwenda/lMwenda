import React from "react";
import { Card, Button } from "react-bootstrap";

// Images
import Bootstrap from "../Images/bootstrap.png";
import Django from "../Images/django.png";
import Express from "../Images/express.png";
import Mongo from "../Images/mongo.png";
import Node from "../Images/node.png";
import ReactImg from "../Images/react.png";

// Styles
import '../Styles/dist/Services.css';

function Services(){
    return(
        <div className="services-container">
            <h1>Services</h1>
            <div className="container">
            <div className="wrapper">
                <div className="frontend-card">
                    <img src={ReactImg} alt="" />
                    <div className="frontend-content">
                        Frontend Developer
                    </div>
                </div>

                <div className="backend-card">
                    <img src={Django} alt="" />
                    <div className="frontend-content">
                        Backend Developer
                    </div>
                </div>

                <div className="api-card">
                    <img src={Express} alt="" />
                    <div className="api-content">
                        RestfulAPI Developer
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Services;