import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMapMarker, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'
import { NavLink } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab);

const Footer = () => {
    return (
        <footer className="footer-section" >
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md pt-5">
                        <div className="footer-info pt-md-5">
                            <h2 className="footer-heading mb-4">About</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </p>
                            <ul className="footer-social list-unstyled">
                                <li className="">
                                    <a href="#">
                                        <span>
                                            <FontAwesomeIcon className="social-icon" icon={['fab', 'facebook']} /> 
                                        </span>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="#">
                                        <span>
                                            <FontAwesomeIcon className="social-icon" icon={['fab', 'twitter']} />
                                        </span>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="#">
                                        <span>
                                            <FontAwesomeIcon className="social-icon" icon={['fab', 'instagram']} />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md pt-5">
                        <div className="footer-info pt-md-5 mb-4 ml-md-5">
                        <h2 className="footer-heading mb-4">Information</h2>
                            <ul className="list-unstyled">
                                <li><a href="#" className="py-2 d-block">Online Enquiry</a></li>
                                <li><a href="#" className="py-2 d-block">General Enquiries</a></li>
                                <li><a href="#" className="py-2 d-block">Booking Conditions</a></li>
                                <li><a href="#" className="py-2 d-block">Privacy and Policy</a></li>
                                <li><a href="#" className="py-2 d-block">Refund Policy</a></li>
                                <li><a href="#" className="py-2 d-block">Call Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md pt-5">
                        <div className="footer-info pt-md-5 mb-4">
                        <h2 className="footer-heading mb-4">Experience</h2>
                            <ul className="list-unstyled">
                                <li><a href="#" className="py-2 d-block">Adventure</a></li>
                                <li><a href="#" className="py-2 d-block">Hotel and Restaurant</a></li>
                                <li><a href="#" className="py-2 d-block">Beach</a></li>
                                <li><a href="#" className="py-2 d-block">Nature</a></li>
                                <li><a href="#" className="py-2 d-block">Camping</a></li>
                                <li><a href="#" className="py-2 d-block">Party</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md pt-5 border-left">
                        <div className="footer-info pt-md-5 mb-4">
                            <h2 className="footer-heading mb-4">Have a Questions?</h2>
                            <div className="block mb-3">
                                <ul>
                                <li>
                                    <span><FontAwesomeIcon className="icon" icon={faMapMarker} /></span><span >203 Fake St. Mountain View, San Francisco, California, USA</span>
                                </li>
                                <li>
                                    <NavLink href="#"><span><FontAwesomeIcon className="icon" icon={faPhone} /></span><span >+880 1322810867 (Available : 09:00am to 7:00pm)</span></NavLink></li>
                                <li>
                                    <NavLink href="#"><span><FontAwesomeIcon className="icon" icon={faPaperPlane} /></span>
                                    <span >info@yourdomain.com</span>
                                    </NavLink>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>
                            Copyright &#169;
                            2021 All rights reserved 
                            <br /> 
                            <span>
                                <FontAwesomeIcon icon={faHeart} /> 
                                <NavLink style={{ color: "grey" }} href="https://web.programming-hero.com/" target="_blank">
                                    Programming Hero Batch-4
                                </NavLink>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;