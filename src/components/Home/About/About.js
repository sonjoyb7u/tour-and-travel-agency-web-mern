import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link, NavLink } from 'react-router-dom';
import './About.css'
import aboutImgOne from './../../../images/about/about_us_1.jpg'
import { Nav } from 'react-bootstrap';

const About = () => {
    return (
        <section className="about-section img" id="about-us"> 
            <div className="container">
                <div className="row d-flex">
                    <div className="col-md-12 about-intro">
                        <div className="row">
                            <div className="col-md-6 d-flex">
                                <div className="about-img d-flex align-items-center justify-content-center">
                                </div>
                            </div>
                            <div className="col-md-6 mt-5">
                                <div className="row py-5">
                                    <div className="col-md-12 about-info ">
                                        <span className="about-heading">About Us</span>
                                        <h2 className="mb-2">Make Your Tour Memorable and Safe With Us.
                                        </h2>
                                        <p className="mb-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

                                        </p>
                                        <p>
                                            <Nav.Link as={HashLink} to="/home#search-tour" className="btn about-btn">Book Your Dream</Nav.Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;