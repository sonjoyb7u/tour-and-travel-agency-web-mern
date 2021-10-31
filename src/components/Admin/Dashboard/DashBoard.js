import React from 'react';
import { Button, Col, Container, Row, ToggleButton } from 'react-bootstrap';
import './DashBoard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faStore } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import Home from '../Home/Home'
import Add from '../TourPackage/Add/Add';
import Manage from '../TourPackage/Manage/Manage';

library.add(fab);

const DashBoard = () => {
    const [control, setControl] = useState("home");
    return (
        <div className="dashboard-box">
            <Container>
                <Row>
                    <div className="mt-3 d-flex flex-wrap">
                        <Col md={3} lg={3} sm={12}>
                            <div className="mt-3">
                                <div className="dashboard-panel text-light" style={{backgroundColor: "#f5f5f5", width: "100%", height: "100vh", padding: "20px"}}>
                                    <div className="dashboard-social-media d-flex flex-column">
                                        <h5 className="text-dark fw-bold mb-5">Admin Sidebar: </h5>
                                        <Button onClick={() => setControl("home")} className="btn btn-danger mt-2 text-light fw-bold"><FontAwesomeIcon icon={faHome} /></Button>&nbsp;&nbsp;
                                        <Button onClick={() => setControl("addBooking")} className="btn btn-primary mt-2 text-light fw-bold"><FontAwesomeIcon icon={faStore} /></Button>&nbsp;&nbsp;
                                        <Button  onClick={() => setControl("manageAllBooking")} className="btn btn-dark mt-2 text-light fw-bold"><FontAwesomeIcon icon={faList} /></Button>&nbsp;&nbsp;
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={9} lg={9}>
                            <div className="mt-3">
                                <h2 style={{ color: "#25304c", padding: "10px", textAlign: "center", background: "#f5f5f5" }}>Dashboard:</h2>
                                {/* BOKKING CRUD COMPONENT GOES HERE ...  */}
                                <div className="m-4">
                                    {control == "home" && <Home></Home>}
                                    {control == "addBooking" && <Add></Add>}
                                    {control == "manageAllBooking" && <Manage></Manage>}
                                </div>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default DashBoard;