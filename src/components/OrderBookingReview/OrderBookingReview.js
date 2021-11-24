import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './OrderBookingReview.css'
import { Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const OrderBookingReview = () => {
    const {orderBookPackageId} = useParams()
    const history = useHistory()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useAuth();
    // console.log(orderBookPackageId);
    const [tourPackageBookDetail, setTourPackageBookDetail] = useState({})
    // console.log(tourPackageBookDetail);

    useEffect(() => {
        // const url = `https://limitless-hollows-79049.herokuapp.com/tour-booking/detail/${orderBookPackageId}`;
        fetch(`https://limitless-hollows-79049.herokuapp.com/tour-booking/detail/${orderBookPackageId}`)
        .then(res => res.json())
        .then(result => setTourPackageBookDetail(result))

    }, [])

    const onSubmit = data => {
        data.key = tourPackageBookDetail?.key;
        data.placeName = tourPackageBookDetail?.place_name;
        data.imgUrl = tourPackageBookDetail?.image;
        data.perPersonPrice = tourPackageBookDetail?.per_person_price;
        data.familyPackPrice = tourPackageBookDetail?.family_Package_price;
        data.location = tourPackageBookDetail?.location;
        data.country = tourPackageBookDetail?.country;
        data.orderStatus = "pending";

        fetch(`https://limitless-hollows-79049.herokuapp.com/order-placed`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId) {
                alert('Your Order Submit Success, please wait for delivery...');
                reset();
                history.push('/home');
            }
            else {
                alert("Something Wrong, please try again later!!!")

            }
        })
        // console.log(data)
    };


    return (
        <div className="book-order-container">
            <div className="container">
                <div className="row">
                    <div className="mt-5 d-flex flex-wrap justify-content-between">
                        <div className="col-lg-8 col-md-8 col-sm-12">
                            <div className="tour-package-container">
                                <h2 style={{ display: 'inline-block', margin: '0 auto' }}>Booking Order - Tour Package Details: </h2> 
                                <hr />
                                <div className="tour-package d-flex">
                                    
                                    <img className="" src={tourPackageBookDetail?.image} alt="" />
                                    <div className="tour-package-info mt-3">
                                        <h4>{tourPackageBookDetail?.place_name}</h4>
                                        <span>
                                            <small className="fw-bold">{tourPackageBookDetail?.location}, </small>
                                            <small className="fw-bold">{tourPackageBookDetail?.country}</small>
                                        </span>
                                        <div className="tour-package-detail mt-3">
                                            <p><strong>Per Person Price: $</strong>{tourPackageBookDetail?.per_person_price}</p>
                                            <p><strong>Family Tour Package Price: $</strong>{tourPackageBookDetail?.family_Package_price}</p>
                                            <p><strong>Description: </strong> {tourPackageBookDetail?.longDesc}</p>

                                            {/* <button className="package-remove-btn" ><FontAwesomeIcon icon={faShoppingCart} /> Remove</button>  */}
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">   
                            <div className="order-checkout-container">
                                <h2>Order Place Form: </h2>
                                <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-5 contact-form">
                                    <div className="form-group mb-3">
                                        <input defaultValue={user.displayName} {...register("name")}type="text" className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input defaultValue={user.email} {...register("email", { required: true })} type="email" className="form-control" />
                                        {errors.email && <span className="error">This field is required!</span>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <input placeholder="Enter Address" defaultValue="" {...register("shipping_address", {required: true})} type="text" className="form-control" />
                                        {errors.shipping_address && <span className="error">This field is required!</span>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <input placeholder="Enter City" defaultValue="" {...register("city")} type="text" className="form-control" />
                                        {errors.city && <span className="error">This field is required!</span>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <input placeholder="Enter Phone number" defaultValue="" {...register("phone", {required: true})} type="text" className="form-control" />
                                        {errors.phone && <span className="error">This field is required!</span>}
                                    </div>

                                    <div className="contact-btn">
                                        <Button type="submit">Place Your Order</Button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderBookingReview;