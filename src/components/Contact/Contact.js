import React from 'react';
import { Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {

    return (
        <section className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="d-flex mt-5">
                        <div className="col-md-6 google-map d-flex justify-content-around align-items-center border border-2 m-3">
                            <h2>Google Map Goes Here...</h2>
                        </div>
                        <div className="col-md-6 m-3">
                            <h2>Contact Form: </h2>
                            <form action="#" className="bg-light p-5 contact-form">
                                <div className="form-group mb-3">
                                    <input  type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group mb-3">
                                    <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                                </div>
                                <div className="contact-btn">
                                    <Button type="submit">Submit</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;