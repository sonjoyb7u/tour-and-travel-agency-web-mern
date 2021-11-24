import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMapMarker, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'
import { NavLink } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
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
                                    <Link to="#">
                                        <span>
                                            <FontAwesomeIcon className="social-icon" icon={['fab', 'facebook']} /> 
                                        </span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="#">
                                        <span>
                                            <FontAwesomeIcon className="social-icon" icon={['fab', 'twitter']} />
                                        </span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="#">
                                        <span>
                                            <FontAwesomeIcon className="social-icon" icon={['fab', 'instagram']} />
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md pt-5">
                        <div className="footer-info pt-md-5 mb-4 ml-md-5">
                        <h2 className="footer-heading mb-4">Information</h2>
                            <ul className="list-unstyled">
                                <li><Link to="#" className="py-2 d-block">Online Enquiry</Link></li>
                                <li><Link to="#" className="py-2 d-block">General Enquiries</Link></li>
                                <li><Link to="#" className="py-2 d-block">Booking Conditions</Link></li>
                                <li><Link to="#" className="py-2 d-block">Privacy and Policy</Link></li>
                                <li><Link to="#" className="py-2 d-block">Refund Policy</Link></li>
                                <li><Link to="#" className="py-2 d-block">Call Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md pt-5">
                        <div className="footer-info pt-md-5 mb-4">
                        <h2 className="footer-heading mb-4">Experience</h2>
                            <ul className="list-unstyled">
                                <li><Link to="#" className="py-2 d-block">Adventure</Link></li>
                                <li><Link to="#" className="py-2 d-block">Hotel and Restaurant</Link></li>
                                <li><Link to="#" className="py-2 d-block">Beach</Link></li>
                                <li><Link to="#" className="py-2 d-block">Nature</Link></li>
                                <li><Link to="#" className="py-2 d-block">Camping</Link></li>
                                <li><Link to="#" className="py-2 d-block">Party</Link></li>
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