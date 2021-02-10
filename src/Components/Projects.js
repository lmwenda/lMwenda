import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

import '../Styles/dist/Projects.css';

function Projects(){
    return(
        <div className="projects-container">
            <div className="wrapper">
                <h1>My Projects</h1>
                <div className="projects">
                    <Col>
                        <Row>
                        
                        {/* Chat Application */}
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title style={{color: '#000'}}>Chat Application</Card.Title>
                                <Card.Text style={{color: '#000'}}>
                                A Real Time Chat Application I built in ReactJS, SocketIO and ExpressJS.
                                It is also a deployed app so look at my Github Repository to view it.
                                </Card.Text>
                                <Button variant="primary"><a style={{color: '#fff'}} href="https://github.com/lmwenda/Chat-Application">View Project</a></Button>
                            </Card.Body>
                        </Card>

                        {/* React Data Analytics */}
                        <Card style={{ width: '18rem' }}>
                            <Card.Body style={{color: '#000'}}>
                                <Card.Title>React Data Analytics</Card.Title>
                                <Card.Text>
                                This my first ReactJS Project which it stores data into graphs.
                                As of now it takes fake data but I'm going to make it take real API data.
                                </Card.Text>
                                <Button variant="primary"><a style={{color: '#fff'}} href="https://github.com/lmwenda/React-Data-Analytics">View Project</a></Button>
                            </Card.Body>
                        </Card>

                        {/* Ecommerce Store */}
                        <Card style={{ width: '18rem' }}>
                            <Card.Body style={{color: '#000'}}>
                                <Card.Title>Ecommerce Store</Card.Title>
                                <Card.Text>
                                I this in React, Redux and Django. I learnt how to add Payment
                                integrations, Redux and gathering real-time data. Gained a ton of experience. 
                                <bold style={{fontWeight: 'bold'}}> In progress.</bold>
                                </Card.Text>
                                <Button variant="primary"><a style={{color: '#fff'}} href="https://github.com/lmwenda/Ecommerce-Store">View Project</a></Button>
                            </Card.Body>
                        </Card>

                        {/* HTML and CSS Website */}
                        <Card style={{ width: '18rem' }}>
                            <Card.Body style={{color: '#000'}}>
                                <Card.Title>Frontend Only Website</Card.Title>
                                <Card.Text>
                                This is the first website related thing I've ever done. I created my first website
                                in HTML and CSS within a few days. You can view it on my github repository.
                                </Card.Text>
                                <Button variant="primary"><a style={{color: '#fff'}} href="https://github.com/lmwenda/Frontend-Only-Website">View Project</a></Button>
                            </Card.Body>
                        </Card>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            {/* User API Generator */}
                            <Card style={{ width: '18rem' }}>
                                <Card.Body style={{color: '#000'}}>
                                    <Card.Title>User API Generator</Card.Title>
                                    <Card.Text>
                                    I built an Application so when you refresh the page it will generate a new User.
                                    It has Real-time loading with Asynchronous Data. View my Github to see it.
                                    </Card.Text>
                                    <Button variant="primary"><a style={{color: '#fff'}} href="https://github.com/lmwenda/User-API-Generator">View Project</a></Button>
                                </Card.Body>
                            </Card>

                            {/* Django Blog */}
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body style={{color: '#000'}}>
                                    <Card.Title>Django Blog</Card.Title>
                                    <Card.Text>
                                    I built a Blog with User Auth, Blogs is stored in a Sqlite3 DB and much more.
                                    If you would like to see this view my Github.
                                    </Card.Text>
                                    <Button variant="primary"><a style={{color: '#fff'}} href="https://github.com/lmwenda/Django-Blog">View Project</a></Button>
                                </Card.Body>
                            </Card>

                            {/* Online Socket Server Desktop App */}
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Online Desktop Chat App</Card.Title>
                                    <Card.Text>
                                    An Online Desktop Chat Application which I built in Java using Java Sockets 
                                    and Java Swing. If you would like to run this Project view my Github Repo to see it.
                                    </Card.Text>
                                    <Button variant="primary"><a style={{color: '#fff'}} href="https://github.com/lmwenda/Online-Socket-Server-Application">View Project</a></Button>
                                </Card.Body>
                            </Card>

                            {/* Notepad */}
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                </div>
            </div>
        </div>
    );
}

export default Projects;