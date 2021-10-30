import React from 'react';
import { NavLink } from 'react-router-dom';
// import WOW from 'wowjs';
import catHotelImg from './../../../images/category/category_1.png'
import catRestaurantImg from './../../../images/category/category_2.png'
import catShoppingMallImg from './../../../images/category/category_3.png'
import catCinemaImg from './../../../images/category/category_4.png'
import './TourTravelCategory.css'

const TourTravelCategory = () => {

    // const componentDidMount = () => {
    //     new WOW.WOW().init();
    // };
    // componentDidMount();

    return (
        <section className="category-area" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="all-catagories">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md">
                                    <div className="single-category-area" >
                                        <div className="category-content">
                                            <img src={catHotelImg} alt="" />
                                            <NavLink to="/">
                                            <h6>Hotels</h6>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md">
                                    <div className="single-category-area">
                                        <div className="category-content">
                                            <img src={catRestaurantImg} alt="" />
                                            <NavLink to="/">
                                                <h6>Restaurants</h6>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md">
                                    <div className="single-category-area" >
                                        <div className="category-content">
                                            <img src={catShoppingMallImg} alt="" />
                                            <NavLink to="/">
                                            <h6>Shopping</h6>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md">
                                    <div className="single-category-area" >
                                        <div className="category-content">
                                            <img src={catCinemaImg} alt="" />
                                            <NavLink to="/">
                                            <h6>Cinema</h6>
                                            </NavLink>
                                        </div>
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

export default TourTravelCategory;