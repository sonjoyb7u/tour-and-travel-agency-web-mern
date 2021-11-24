import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import './EditOrder.css'
import useAuth from '../../../../Hooks/useAuth';

const EditOrder = (props) => {
    // const {bookOrderId} = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [bookOrderDetail, setBookOrderDetail] = useState({})
    const { user } = useAuth();
    const editBookingOrderId = props.orderId;

    const onSubmit = (data) => {
        console.log(data);
        // data.name = bookOrderDetail?.name;
        // data.email = bookOrderDetail?.email;
        // data.key = bookOrderDetail?.key;
        // data.placeName = bookOrderDetail?.place_name;
        // data.imgUrl = bookOrderDetail?.image;
        // data.perPersonPrice = bookOrderDetail?.per_person_price;
        // data.familyPackPrice = bookOrderDetail?.family_Package_price;
        // data.location = bookOrderDetail?.location;
        // data.country = bookOrderDetail?.country;
        // data.orderStatus = "pending";

        // const url = `https://limitless-hollows-79049.herokuapp.com/tour-package/booking-order/update/`;
        const url = `https://limitless-hollows-79049.herokuapp.com/booking-order/update/${editBookingOrderId}`
        fetch(url, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),

        })
        .then(function(res) {
            // console.log(res);
            if(res.statusText === "OK") {
                alert("Data Update Successfully Done...")
                reset();
            }
            else {
                alert("Data Update Failed!!!");
                reset();
            }
        })
        .catch(function(err) {
            console.log(err.message);
        })
    }

    const handleUpdateBookingOrder = () => {
        alert();
    }

    useEffect(() => {
        // const url = `https://limitless-hollows-79049.herokuapp.com/booking-order/detail/${editBookingOrderId}`;
        fetch(`https://limitless-hollows-79049.herokuapp.com/booking-order/detail/${editBookingOrderId}`)
        .then(res => res.json())
        .then(result => setBookOrderDetail(result))

    }, []);
    // console.log(bookOrderDetail);


    return (
        <div className="edit-form">
            <h2>Edit Booking Order: </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-5 edit-booking-order-form">
                    <div className="container">
                        <div className="row">
                            {/* <div className="col-md-12"> */}
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <input disabled defaultValue={bookOrderDetail?.name} {...register("name")}type="text" className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input disabled defaultValue={bookOrderDetail?.email} {...register("email", { required: true })} type="text" className="form-control" />
                                        {/* {errors.email && <span className="error">This field is required!</span>} */}
                                    </div>
                                    <div className="form-group mb-3">
                                        <input placeholder="Enter Address" defaultValue={bookOrderDetail?.shipping_address} {...register("shipping_address", {required: true})} type="text" className="form-control" />
                                        {/* {errors.shipping_address && <span className="error">This field is required!</span>} */}
                                    </div>
                                </div>
                                <div className="col-md-6">                   
                                    <div className="form-group mb-3">
                                        <input placeholder="Enter City" defaultValue={bookOrderDetail?.city} {...register("city")} type="text" className="form-control" />
                                        {errors.city && <span className="error">This field is required!</span>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <input placeholder="Enter Phone number" defaultValue={bookOrderDetail?.phone} {...register("phone", {required: true})} type="text" className="form-control" />
                                        {/* {errors.phone && <span className="error">This field is required!</span>} */}
                                    </div>
                                    <div className="form-group mb-3">
                                        <input disabled defaultValue={bookOrderDetail?.placeName} {...register("place_name", {required: true})} type="text" className="form-control" />
                                        {/* {errors.phone && <span className="error">This field is required!</span>} */}
                                    </div>
                                </div>
                            {/* </div> */}

                        <div className="edit-btn mt-3">
                            <Button type="submit">Update Order</Button>
                        </div>

                    </div>
                </div>
            </form>
        </div>

        
    );
};

export default EditOrder;