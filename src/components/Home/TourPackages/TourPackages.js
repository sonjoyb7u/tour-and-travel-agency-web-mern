import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TourPackage from './TourPackage/TourPackage';
import './TourPackages.css';


const TourPackages = () => {
    const [tourPackages, setTourPackages] = useState([]);

    useEffect(() => {
        // const url = `https://limitless-hollows-79049.herokuapp.com/all-tour-packages`;
        const url = "https://limitless-hollows-79049.herokuapp.com/all-tour-packages";
        fetch(url)
        .then((res) => res.json())
        .then((data) => setTourPackages(data.slice(0, 6)));

    }, []);

    return (
        <section className="book-tour-section" id="tour-package">
            <div className="container">
                <div className="row justify-content-center pb-4">
                    <div className="col-md-12 heading-section text-center">
                        <span className="book-tour-heading">Destination</span>
                        <h2 className="mb-4">Tour Destination</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        tourPackages?.map(tourPackage => <TourPackage key={tourPackage?._id} tourPackage={tourPackage}></TourPackage>)
                    }
                </div>
                <div className="row align-items-center">
                    <Link to="/">
                        <Button className="all-book-tour-btn">View All Tour's</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TourPackages;