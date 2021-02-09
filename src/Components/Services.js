import React from "react";
import { Card, Button } from "react-bootstrap";

import '../Styles/dist/Services.css';

function Services(){
    return(
        <div className="services-container">
            <h1>Services</h1>

            <div className="wrapper-1">
                <div className="frontend-card">
                    <img src={null} alt="" />
                    <div className="frontend-content">
                        Frontend Developer
                    </div>
                </div>

                <div className="backend-card">
                    <img src={null} alt="" />
                    <div className="frontend-content">
                        Backend Developer
                    </div>
                </div>

                <div className="api-card">
                    <img src={null} alt="" />
                    <div className="api-content">
                        RestfulAPI Developer
                    </div>
                </div>
            </div>

            <h1>Technologies</h1>
            <div className="wrapper-2">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>React</Card.Title>
                    <Card.Text>
                    ReactJS is one of the most popular frontend frameworks out there.
                    Great for Components and a big community.
                    </Card.Text>
                    <Button variant="primary">View this Technology</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Redux</Card.Title>
                    <Card.Text>
                    Redux is one of the most popular state managements out there.
                    Great Tool for connecting the frontend to the backend.
                    </Card.Text>
                    <Button variant="primary">View this Technology</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Express</Card.Title>
                    <Card.Text>
                    ExpressJS is a great tool for building Lightweight websites with an RestAPI.
                    Widely used with MongoDB.
                    </Card.Text>
                    <Button variant="primary">View this Technology</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Django</Card.Title>
                    <Card.Text>
                    Django is a Heavy weight framework for building complex websites.
                    It is the most popular Python framework.
                    </Card.Text>
                    <Button variant="primary">View this Technology</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>MongoDB</Card.Title>
                    <Card.Text>
                    MongoDB is one of the most used Databases out there. I used MongoDB with
                    ReactJS and Express to build a fullstack app.
                    </Card.Text>
                    <Button variant="primary">View this Technology</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Sqlite3/MySQL</Card.Title>
                    <Card.Text>
                    Sqlite3 is a Lightweight and easy Database I use with Python Apps and
                    creating a Database system with Django.
                    </Card.Text>
                    <Button variant="primary">View this Technology</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>NodeJS</Card.Title>
                    <Card.Text>
                    I use NodeJS modules when I'm building Web-Applications. I usely mean 
                    3rd Party Modules which I usely use on my Apps.
                    </Card.Text>
                    <Button variant="primary">View this Technology</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Bootstrap</Card.Title>
                    <Card.Text>
                    I used Bootstrap for parts that need quick styling. I typically mix Bootstrap
                    with my own Styling which is SCSS/SASS.
                    </Card.Text>
                    <Button variant="primary">View this Technology</Button>
                </Card.Body>
            </Card>             
            </div>
        </div>
    );
}

export default Services;