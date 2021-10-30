import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Error404'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import error404Image from './../../../images/error_page/error_404/error_404_1.png'

const Error404 = () => {
    return (
        <section className="error-404" id="error-404">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 error-404-img">
                        <Image className="w-100 h-100" src={error404Image} alt="Error 404 Image"></Image>
                    </div>
                    <div className="col-lg-5 col-md-5 error-404-content d-flex flex-column justify-content-center " >
                        <div className="error-404-btn">
                            <Link to="/">
                                <Button style={{   minWidth: "180px", backgroundColor: "#fa5624",border: "transparent", outline: "none", padding: "15px 30px" }}>Back To Home &nbsp; <FontAwesomeIcon className="error-404-icon" icon={faArrowLeft} /></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Error404;