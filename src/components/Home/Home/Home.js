import React from 'react';
import About from '../About/About';
import BookTour from '../BookTour/BookTour';
import SearchTourTravel from '../SearchTourTravel/SearchTourTravel';
import Slider from '../Slider/Slider';
import TourTravelCategory from '../TourTravelCategory/TourTravelCategory';
import './Home.css'

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <SearchTourTravel></SearchTourTravel>
            <About></About>
            <TourTravelCategory></TourTravelCategory>
            <BookTour></BookTour>
        </>
    );
};

export default Home;