import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import './Add.css'

const Add = () => {
    const { register, handleSubmit, reset } = useForm();
    const generateKey = `${Math.ceil(Math.random(9999))}_${ new Date().getTime() }`;

    const onSubmit = (data) => {
        // const url = `https://limitless-hollows-79049.herokuapp.com/tour-package/create;
        const url = "https://limitless-hollows-79049.herokuapp.com/tour-package/create"

        data.key = generateKey

        fetch(url, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),

        })
        .then(function(res) {
            // console.log(res);
            if(res.statusText === "OK") {
                alert("Data Inserted Success...")
                reset();
            }
            else {
                alert("Data Inserted Failed!!!");
                reset();
            }
        })
        .catch(function(err) {
            console.log(err.message);
        })
    }


    return (
        <div className="add-form">
            <h2>Add Booking: </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-4 add-form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <input {...register("place_name", { required: true })}  type="text" className="form-control" placeholder="Enter place Name" />
                            </div>
                            <div className="form-group mb-3">
                                <input {...register("location", { required: true })} type="text" className="form-control" placeholder="Enter location" />
                            </div>
                            <div className="form-group mb-3">
                                <input {...register("tour_days", { required: true })} type="number" className="form-control" placeholder="Enter tour days" />
                            </div>
                            <div className="form-group mb-3">
                                <input {...register("family_Package_price", { required: true })} type="number" className="form-control" placeholder="Enter family package price" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <input {...register("image", { required: true })} type="text" className="form-control" placeholder="Enter image url/path" />
                            </div>
                            <div className="form-group mb-3">
                                <input {...register("country", { required: true })} type="text" className="form-control" placeholder="Enter country" />
                            </div>
                            <div className="form-group mb-3">
                                <input {...register("per_person_price", { required: true })} type="number" className="form-control" placeholder="Enter per person price" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <textarea {...register("shortDesc", { required: true })} cols="30" rows="7" className="form-control" placeholder="Enter short description" ></textarea>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <textarea {...register("longDesc", { required: true })} cols="30" rows="7" className="form-control" placeholder="Enter long description" ></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="add-btn mt-2">
                        <Button type="submit">Submit</Button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Add;