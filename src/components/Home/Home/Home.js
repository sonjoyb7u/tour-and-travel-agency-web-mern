import React from 'react';
import About from '../About/About';
import SearchTourTravel from '../SearchTourTravel/SearchTourTravel';
import Slider from '../Slider/Slider';
import TourTravelCategory from '../TourTravelCategory/TourTravelCategory';
import './Home.css'
import TourPackages from '../TourPackages/TourPackages';

const Home = () => {
    
    return (
        <>
            <Slider></Slider>
            <SearchTourTravel></SearchTourTravel>
            <About></About>
            <TourTravelCategory></TourTravelCategory>
            <TourPackages></TourPackages>
        </>
    );
};

export default Home;