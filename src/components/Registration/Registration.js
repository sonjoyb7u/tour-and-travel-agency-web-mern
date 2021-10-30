import React from 'react';
import {Link} from 'react-router-dom'
import { Col, Container, Form, Row, Button, Image } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import './Registration';

// library.add(fab);

const Registration = () => {
    return (
        <div className="register-form-container">
            <Container fluid="md">
                <Row>
                    <Col md={3} lg={3}></Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className="form mt-5">
                            <h2 style={{ color: "#25304c", padding: "10px", textAlign: "center" }}>Registration Form:</h2>
                            <div className="register-form p-3 text-white">
                                <span className="text-success fw-bold"></span>
                                <span className="text-danger fw-bold"></span>
                                <Form className="mt-4">
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                                    <Form.Label column sm="3">
                                        Full Name
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control type="text" placeholder="Full name" required />
                                    </Col>
                                    </Form.Group>
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
                                    <Form.Group as={Row} className="mb-3" controlId="formBasicAlreadyResisterCheckbox">
                                        <Form.Label column sm="3">
                                        </Form.Label>
                                        <Col sm="8">
                                        Already an account? &nbsp;
                                        <span className="d-inline-block ml-0">
                                            <Link to="/login"> Please login</Link>
                                        </span>
                                        </Col>
                                    </Form.Group>

                                    <Button className="ml-auto register-btn" type="submit">
                                        Register
                                    </Button>

                                </Form>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} lg={3}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Registration;