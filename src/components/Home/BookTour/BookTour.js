import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faShower, faChessKing, faMountain } from '@fortawesome/free-solid-svg-icons';
import './BookTour.css';
import { Button, Image } from 'react-bootstrap';
import bookImgOne from './../../../images/book_tour/book_tour_1.jpg'

const BookTour = () => {
    return (
        <section className="book-tour-section" id="booking">
            <div className="container">
                <div className="row justify-content-center pb-4">
                    <div className="col-md-12 heading-section text-center">
                        <span className="book-tour-heading">Destination</span>
                        <h2 className="mb-4">Tour Destination</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 ">
                        <div className="booking-box">
                            <NavLink to="" className="img" >
                                <Image src={bookImgOne}></Image>
                                <span className="price">$550/person</span>
                            </NavLink>
                            <div className="book-info p-4">
                                <span className="tour-days">8 Days Tour</span>
                                <h3><NavLink to="">Banaue Rice Terraces</NavLink></h3>
                                <p className="location"><span><FontAwesomeIcon icon={faMap} /></span> Banaue, Ifugao, Philippines</p>
                                <ul>
                                    <li><span><FontAwesomeIcon icon={faShower} /></span>2</li>
                                    <li><span><FontAwesomeIcon icon={faChessKing} /></span>3</li>
                                    <li><span><FontAwesomeIcon icon={faMountain} /></span>Near Mountain</li>
                                </ul>  
                                <Button className="book-btn">Book Dream</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="booking-box">
                            <NavLink to="" className="img">
                                <Image src={bookImgOne}></Image>
                                <span className="price">$550/person</span>
                            </NavLink>
                            <div className="book-info p-4">
                                <span className="tour-days">10 Days Tour</span>
                                <h3><NavLink to="">Banaue Rice Terraces</NavLink></h3>
                                <p className="location"><span><FontAwesomeIcon icon={faMap} /></span> Banaue, Ifugao, Philippines</p>
                                <ul>
                                    <li><span><FontAwesomeIcon icon={faShower} /></span>2</li>
                                    <li><span><FontAwesomeIcon icon={faChessKing} /></span>3</li>
                                    <li><span><FontAwesomeIcon icon={faMountain} /></span>Near Mountain</li>
                                </ul>
                                <Button className="book-btn">Book Dream</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="booking-box">
                            <NavLink to="" className="img">
                                <Image src={bookImgOne}></Image>
                                <span className="price">$550/person</span>
                            </NavLink>
                            <div className="book-info p-4">
                                <span className="tour-days">7 Days Tour</span>
                                <h3><NavLink to="">Banaue Rice Terraces</NavLink></h3>
                                <p className="location"><span><FontAwesomeIcon icon={faMap} /></span> Banaue, Ifugao, Philippines</p>
                                <ul>
                                    <li><span><FontAwesomeIcon icon={faShower} /></span>2</li>
                                    <li><span><FontAwesomeIcon icon={faChessKing} /></span>3</li>
                                    <li><span><FontAwesomeIcon icon={faMountain} /></span>Near Mountain</li>
                                </ul>
                                <Button className="book-btn">Book Dream</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="booking-box">
                            <NavLink to="" className="img">
                                <Image src={bookImgOne}></Image>
                                <span className="price">$550/person</span>
                            </NavLink>
                            <div className="book-info p-4">
                                <span className="tour-days">8 Days Tour</span>
                                <h3><NavLink to="">Banaue Rice Terraces</NavLink></h3>
                                <p className="location">
                                    <span><FontAwesomeIcon icon={faMap} /></span> Banaue, Ifugao, Philippines
                                </p>
                                <ul>
                                    <li><span><FontAwesomeIcon icon={faShower} /></span>2</li>
                                    <li><span><FontAwesomeIcon icon={faChessKing} /></span>3</li>
                                    <li><span><FontAwesomeIcon icon={faMountain} /></span>Near Mountain</li>
                                </ul>
                                <Button className="book-btn">Book Dream</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="booking-box">
                            <NavLink to="" className="img">
                                <Image src={bookImgOne}></Image>
                                <span className="price">$550/person</span>
                            </NavLink>
                            <div className="book-info p-4">
                                <span className="tour-days">10 Days Tour</span>
                                <h3><NavLink to="">Banaue Rice Terraces</NavLink></h3>
                                <p className="location"><span><FontAwesomeIcon icon={faMap} /></span> Banaue, Ifugao, Philippines</p>
                                <ul>
                                    <li><span><FontAwesomeIcon icon={faShower} /></span>2</li>
                                    <li><span><FontAwesomeIcon icon={faChessKing} /></span>3</li>
                                    <li><span><FontAwesomeIcon icon={faMountain} /></span>Near Mountain</li>
                                </ul>
                                <Button className="book-btn">Book Dream</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="booking-box">
                            <NavLink to="" className="img">
                                <Image src={bookImgOne}></Image>
                                <span className="price">$550/person</span>
                            </NavLink>
                            <div className="book-info p-4">
                                <span className="tour-days">7 Days Tour</span>
                                <h3><NavLink to="">Banaue Rice Terraces</NavLink></h3>
                                <p className="location"><span><FontAwesomeIcon icon={faMap} /></span> Banaue, Ifugao, Philippines</p>
                                <ul>
                                    <li><span><FontAwesomeIcon icon={faShower} /></span>2</li>
                                    <li><span><FontAwesomeIcon icon={faChessKing} /></span>3</li>
                                    <li><span><FontAwesomeIcon icon={faMountain} /></span>Near Mountain</li>
                                </ul>
                                <Button className="book-btn">Book Dream</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <Button className="all-book-tour-btn">View All Tour's</Button>
                </div>
            </div>
        </section>
    );
};

export default BookTour;