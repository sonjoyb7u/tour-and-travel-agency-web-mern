import React from 'react';
import './Login'
import {Link} from 'react-router-dom';
import { Col, Container, Form, Row, Button, Image, NavLink } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const Login = () => {
    return (
        <div className="login-form-container">
            <Container fluid="md">
                <Row>
                    <Col md={3} lg={3}></Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className="form mt-5">
                            <h2 style={{ color: "#25304c", padding: "10px", textAlign: "center" }}>Login Form:</h2>
                            <div className="login-form p-3 text-light">
                                <span className="text-success fw-bold"></span>
                                <span className="text-danger fw-bold"></span>
                                <Form className="mt-4">
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Form.Label column sm="3">
                                        Email
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control type="email" placeholder="Email" required />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column sm="3">
                                        Password
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control type="password" placeholder="Password" required />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formBasicRememberMeCheckbox">
                                        <Form.Label column sm="3">
                                        </Form.Label>
                                        <Col sm="5">
                                        <Form.Check type="checkbox" label="Remember me" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formBasicAlreadyResisterCheckbox">
                                        <Form.Label column sm="3">
                                        </Form.Label>
                                        <Col sm="8">
                                        Forgot Password?&nbsp;
                                        <span className="d-inline-block">
                                            <Link> Click Here</Link>
                                        </span>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formBasicAlreadyResisterCheckbox">
                                        <Form.Label column sm="3">
                                        </Form.Label>
                                        <Col sm="8">
                                        Create an account?&nbsp;
                                        <span className="d-inline-block ml-0">
                                            <Link to="/registration"> Click here
                                            </Link>
                                        </span>
                                        </Col>
                                    </Form.Group>

                                    <Button className="ml-auto login-btn" type="submit">
                                        Login
                                    </Button>

                                </Form>
                                <hr />
                                <div className="social-media">
                                    <h5 className="text-light">Or, use one of these options</h5>
                                    <Button className="btn btn-danger mt-2 text-light fw-bold"><FontAwesomeIcon icon={['fab', 'google']} /></Button>&nbsp;&nbsp;
                                    <Button className="btn btn-primary mt-2 text-light fw-bold"><FontAwesomeIcon icon={['fab', 'facebook']} /></Button>&nbsp;&nbsp;
                                    <Button className="btn btn-dark mt-2 text-light fw-bold"><FontAwesomeIcon icon={['fab', 'github']} /></Button>&nbsp;&nbsp;
                                    <Button className="btn btn-info mt-2 text-light fw-bold"><FontAwesomeIcon icon={['fab', 'twitter']} /></Button>&nbsp;&nbsp;
                                    <Button className="btn btn-success mt-2 text-light fw-bold"><FontAwesomeIcon icon={['fab', 'microsoft']} /></Button>&nbsp;&nbsp;
                                    <Button className="btn btn-dark mt-2 text-light fw-bold"><FontAwesomeIcon icon={['fab', 'apple']} /></Button>&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} lg={3}></Col>
                </Row>
            </Container>        
        </div>
    );
};

export default Login;