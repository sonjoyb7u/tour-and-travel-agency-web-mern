import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import './Add.css'

const Add = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const generateKey = `${Math.ceil(Math.random(9999))}_${ new Date().getTime() }`;

    const onSubmit = (data) => {
        // console.log(data);
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
            <h2>Add Tour Package: </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-4 add-tour-package-form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <input {...register("place_name", { required: true })}  type="text" className="form-control" placeholder="Enter place Name" />
                                {errors.place_name && <span className="error">This field is required!</span>}
                            </div>
                            <div className="form-group mb-3">
                                <input {...register("location", { required: true })} type="text" className="form-control" placeholder="Enter location" />
                                {errors.location && <span className="error">This field is required!</span>}
                            </div>
                            <div className="form-group mb-3">
                                <input {...register("tour_days", { required: true })} type="number" className="form-control" placeholder="Enter tour days" />
                                {errors.tour_days && <span className="error">This field is required!</span>}
                            </div>
                            <div className="form-group mb-3">
                                <input {...register("family_Package_price", { required: true })} type="number" className="form-control" placeholder="Enter family package price" />
                                {errors.family_Package_price && <span className="error">This field is required!</span>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <input {...register("image", { required: true })} type="text" className="form-control" placeholder="Enter image url/path" />
                                {errors.image && <span className="error">This field is required!</span>}
                            </div>
                            <div className="form-group mb-3">
                                <input {...register("country", { required: true })} type="text" className="form-control" placeholder="Enter country" />
                                {errors.country && <span className="error">This field is required!</span>}
                            </div>
                            <div className="form-group mb-3">
                                <input {...register("per_person_price", { required: true })} type="number" className="form-control" placeholder="Enter per person price" />
                                {errors.per_person_price && <span className="error">This field is required!</span>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <textarea {...register("shortDesc", { required: true })} cols="30" rows="7" className="form-control" placeholder="Enter short description" ></textarea>
                                {errors.shortDesc && <span className="error">This field is required!</span>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <textarea {...register("longDesc", { required: true })} cols="30" rows="7" className="form-control" placeholder="Enter long description" ></textarea>
                                {errors.longDesc && <span className="error">This field is required!</span>}
                            </div>
                        </div>
                    </div>

                    <div className="add-btn mt-3">
                        <Button type="submit">Submit</Button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Add;