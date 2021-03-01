import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

import '../Styles/dist/Projects.css';

function Projects(){
    const mql = window.matchMedia('(max-width: 600px)');
    let mobileView = mql.matches;
    if(!mobileView){
        return(
            <div className="projects-container">
                <div id="wrapper">
                    <h1>My Projects</h1>
                    <div className="projects">
                        <Col>
                            <Row>
                            
                            {/* Chat Application */}
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title style={{color: '#000'}}>Shop API</Card.Title>
                                    <Card.Text style={{color: '#000'}}>
                                    Rendering out a Real-Time Shop API with ReactJS, Axios and Bootstrap.
                                     I gained experience on using states and apis on the client-side.
                                    </Card.Text>
                                    <Button variant="primary"><a style={{color: '#fff'}} href="https://github.com/lmwenda/Shop-API">View Project</a></Button>
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
                                    I created this in React, Redux and Django. I learnt how to add Payment
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
                                        <Button variant="primary"><a style={{color: '#fff'}} href="https://github.com/lmwenda/user-generator-api">View Project</a></Button>
                                    </Card.Body>
                                </Card>

                                {/* Django Blog */}
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body style={{color: '#000'}}>
                                        <Card.Title>Django Blog</Card.Title>
                                        <Card.Text>
                                        I built a Blog with User Auth, Blogs is stored in a Sqlite3 DB and much more.
                                        If you would like to see this view my Github Repository.
                                        </Card.Text>
                                        <Button variant="primary"><a style={{color: '#fff'}} href="https://github.com/lmwenda/Django-Blog">View Project</a></Button>
                                    </Card.Body>
                                </Card>

                                {/* Online Socket Server Desktop App */}
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body style={{color: '#000'}}>
                                        <Card.Title>Authenticate Login</Card.Title>
                                        <Card.Text>
                                            An Authenticated Login I've built with ExpressJS, JWT Auth, Joi Validation and MongoDB.
                                            I've learnt how to build a ton of stuff which I can't list here. View my Repo.
                                        </Card.Text>
                                        <Button variant="primary"><a style={{color: '#fff'}} href="https://github.com/lmwenda/Online-Socket-Server-Application">View Project</a></Button>
                                    </Card.Body>
                                </Card>

                                {/* Notepad */}
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body style={{color: '#000'}}>
                                        <Card.Title>Notepad Desktop App</Card.Title>
                                        <Card.Text>
                                            I built a Notepad in Java using Advanced JavaSwing.
                                            I wanted to test if I still remembered how to use them.
                                            View my Github if you would like to run this. 
                                        </Card.Text>
                                        <Button variant="primary"><a style={{color: '#fff'}} href="https://github.com/lmwenda/Online-Notepad">View Project</a></Button>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <div id="phone-projects-container">
                <div id="phone-wrapper">
                    <h1>My Projects</h1>
                    <div className="phone-projects">
                        <Col>
                            <Row>
                            
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title style={{color: '#000'}}>Shop API</Card.Title>
                                    <Card.Text style={{color: '#000'}}>
                                    Rendering out a Real-Time Shop API with ReactJS, Axios and Bootstrap.
                                     I gained experience on using states and apis on the client-side.
                                    </Card.Text>
                                    <Button variant="primary"><a style={{color: '#fff'}} href="https://github.com/lmwenda/Shop-API">View Project</a></Button>
                                </Card.Body>
                            </Card>


                            {/* React Data Analytics */}
                            <Card id="second" style={{ width: '18rem' }}>
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
                            <Card id="third" style={{ width: '18rem' }}>
                                <Card.Body style={{color: '#000'}}>
                                    <Card.Title>Ecommerce Store</Card.Title>
                                    <Card.Text>
                                    I created this in React, Redux and Django. I learnt how to add Payment
                                    integrations, Redux and gathering real-time data. Gained a ton of experience. 
                                    <bold style={{fontWeight: 'bold'}}> In progress.</bold>
                                    </Card.Text>
                                    <Button variant="primary"><a style={{color: '#fff'}} href="https://github.com/lmwenda/Ecommerce-Store">View Project</a></Button>
                                </Card.Body>
                            </Card>

                            {/* HTML and CSS Website */}
                            <Card id="fourth" style={{ width: '18rem' }}>
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
                                <Card id="fifth" style={{ width: '18rem' }}>
                                    <Card.Body style={{color: '#000'}}>
                                        <Card.Title>User API Generator</Card.Title>
                                        <Card.Text>
                                        I built an Application so when you refresh the page it will generate a new User.
                                        It has Real-time loading with Asynchronous Data. View my Github to see it.
                                        </Card.Text>
                                        <Button variant="primary"><a style={{color: '#fff'}} href="https://github.com/lmwenda/user-generator-api">View Project</a></Button>
                                    </Card.Body>
                                </Card>

                                {/* Django Blog */}
                                <Card id="sixth" style={{ width: '18rem' }}>
                                    <Card.Body style={{color: '#000'}}>
                                        <Card.Title>Django Blog</Card.Title>
                                        <Card.Text>
                                        I built a Blog with User Auth, Blogs is stored in a Sqlite3 DB and much more.
                                        If you would like to see this view my Github Repository.
                                        </Card.Text>
                                        <Button variant="primary"><a style={{color: '#fff'}} href="https://github.com/lmwenda/Django-Blog">View Project</a></Button>
                                    </Card.Body>
                                </Card>

                                {/* Online Socket Server Desktop App */}
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body style={{color: '#000'}}>
                                        <Card.Title>Authenticate Login</Card.Title>
                                        <Card.Text>
                                            An Authenticated Login I've built with ExpressJS, JWT Auth, Joi Validation and MongoDB.
                                            I've learnt how to build a ton of stuff which I can't list here. View my Repo.
                                        </Card.Text>
                                        <Button variant="primary"><a style={{color: '#fff'}} href="https://github.com/lmwenda/Online-Socket-Server-Application">View Project</a></Button>
                                    </Card.Body>
                                </Card>

                                {/* Notepad */}
                                <Card id="last" style={{ width: '18rem' }}>
                                    <Card.Body style={{color: '#000'}}>
                                        <Card.Title>Notepad Desktop App</Card.Title>
                                        <Card.Text>
                                            I built a Notepad in Java using Advanced JavaSwing.
                                            I wanted to test if I still remembered how to use them.
                                            View my Github if you would like to run this. 
                                        </Card.Text>
                                        <Button variant="primary"><a style={{color: '#fff'}} href="https://github.com/lmwenda/Online-Notepad">View Project</a></Button>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;