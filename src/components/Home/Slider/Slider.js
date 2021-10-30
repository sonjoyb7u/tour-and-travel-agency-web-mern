import React from 'react';
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import './Slider.css'
import { NavLink } from 'react-router-dom';

const Slider = () => {
    return (
        <section className="slider" id="search-tour">
            <div className="container">
                <div className="slider-info">
                    <div className="row">
                            <div className="col-sm-12 col-md-7 slider-desc">
                                <span className="slider-title">Welcome To Tour & Traveler</span>
                                <h1 className="mb-5">Discover Your Favorite Place with Us</h1>
                                <p className="caps">Travel to the any corner of the world, without going around in circles</p>
                            </div>
                            {/* <div className="col-md-4"></div> */}
                            <div className="col-sm-12 col-md-5 d-flex justify-content-end align-items-center mb-5">
                                <NavLink to="https://vimeo.com/225112515" target="_blank" className="icon-video mb-4">
                                    <span>
                                        <FontAwesomeIcon icon={faPlay} />
                                    </span>
                                </NavLink>
                            </div>
                    </div>
                </div>
            </div>
            <div className="overlay"></div>
        </section>
    );
};

export default Slider;