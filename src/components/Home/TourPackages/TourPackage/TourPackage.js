import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faShower, faChessKing, faMountain } from '@fortawesome/free-solid-svg-icons';
import bookImgOne from './../../../../images/book_tour/book_tour_1.jpg'
import './TourPackage.css';

const TourPackage = ({tourPackage}) => {
    const {_id, place_name, location, tour_days, family_Package_price, image, country, per_person_price, shortDesc, longDesc, key} = tourPackage;
    // console.log(tourPackage);


    return (
        <div className="col-md-4">
            <div className="booking-box">
                <NavLink to="" className="img" >
                    <Image src={image}></Image>
                    <span className="price">${per_person_price}/person</span>
                </NavLink>
                <div className="book-info p-4">
                    <span className="tour-days">{tour_days} Days Tour</span>
                    <h3><NavLink to="">{place_name}</NavLink></h3>
                    <p className="location"><span><FontAwesomeIcon icon={faMap} /></span>{location}</p>
                    <p>{shortDesc}</p>
                    <ul>
                        <li><span><FontAwesomeIcon icon={faShower} /></span>2</li>
                        <li><span><FontAwesomeIcon icon={faChessKing} /></span>3</li>
                        <li><span><FontAwesomeIcon icon={faMountain} /></span>In {country}</li>
                    </ul> 
                    <div>
                        <Link to={`/order-booking/${_id}`}>
                            <Button className="book-btn">Book Dream</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourPackage;