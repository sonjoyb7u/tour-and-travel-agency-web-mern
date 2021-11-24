import React, { useEffect, useState } from 'react';
import { Table, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './ManageOrders.css'

const ManageOrders = (props) => {
    const allBookingOrders = props.allBookingOrders;
    const handleEditOrder = props.handleEditOrder;
    const handleDeletedOrder = props.handleDeletedOrder

    return (
        <div className="all-book-orders">
            <div className="container mt-5 mx-auto">
                <div className="row">
                    <div className="col-md-12">

                        <h2>All Manage Orders: </h2>

                        <Table striped bordered hover responsive >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Booking Address</th>
                                    <th>Tour Place Name</th>
                                    <th>Image</th>
                                    <th>Per Person Price</th>
                                    <th>Family Pack Price</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allBookingOrders?.length 
                                    ?
                                    allBookingOrders?.map((bookingOrder, index) => 
                                        <tr key={bookingOrder?._id}>
                                            <td>{index + 1}</td>
                                            <td>{bookingOrder?.name}</td>
                                            <td>{bookingOrder?.email}</td>
                                            <td>{bookingOrder?.phone}</td>
                                            <td>{bookingOrder?.shipping_address}, {bookingOrder?.city}</td>
                                            <td>{bookingOrder?.placeName}</td>
                                            <td>
                                                <Image width="75" src={bookingOrder?.imgUrl}></Image>
                                            </td>
                                            <td>{bookingOrder?.perPersonPrice}</td>
                                            <td>{bookingOrder?.familyPackPrice}</td>
                                            <td>{bookingOrder?.orderStatus}</td>
                                        
                                            <td className="d-flex">
                                                {/* <Button className="m-1 text-light btn-sm" variant="primary" size="sm">View</Button> */}
                                                {/* <Link to={`/dashboard/booking-order/edit/${bookOrder?._id}`}> */}
                                                    <Button onClick={() => handleEditOrder(bookingOrder?._id)} className="m-1 text-light btn-sm" variant="info" size="sm"><FontAwesomeIcon icon={faEdit} /></Button>
                                                {/* </Link> */}
                                                <Button onClick={() => handleDeletedOrder(bookingOrder?._id)} className="m-1 text-light btn-sm" variant="danger" size="sm"><FontAwesomeIcon icon={faTrash} /></Button>
                                            </td>
                                        </tr> 
                                    )
                                    : 
                                    <tr>
                                        <td colSpan="11">No Orders Found!!!</td>
                                    </tr>

                                }
                                
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageOrders;