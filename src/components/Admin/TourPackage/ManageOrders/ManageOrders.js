import React, { useEffect, useState } from 'react';
import { Table, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageOrders.css'

const ManageOrders = () => {
    const [bookOrders, setAllBookingOrders] = useState([])

    useEffect(() => {
        const url = `https://limitless-hollows-79049.herokuapp.com/all-booking-orders`;
        fetch(url)
        .then(res => res.json())
        .then(result => setAllBookingOrders(result))

    }, [])

    // console.log(bookOrders);

    // Delete Booking Order ... 
    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure want to delete this order?")
        if(confirmDelete) {
            const url = `https://limitless-hollows-79049.herokuapp.com/booking-order/delete/${id}`;
            fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(result => {
                if(result.deletedCount > 0) {
                    alert("Booking Order has been Deleted Success...");
                    const restServices = bookOrders.filter(service => service._id != id)
                    setAllBookingOrders(restServices)
                }
                else {
                    alert("Booking Order Deleted Failed!!!");
                }
            })
        }
            
    }


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
                                    bookOrders.map((bookOrder, index) => 
                                        <tr key={bookOrder?._id}>
                                            <td>{index + 1}</td>
                                            <td>{bookOrder?.name}</td>
                                            <td>{bookOrder?.email}</td>
                                            <td>{bookOrder?.phone}</td>
                                            <td>{bookOrder?.shipping_address}, {bookOrder?.city}</td>
                                            <td>{bookOrder?.placeName}</td>
                                            <td>
                                                <Image width="75" src={bookOrder?.imgUrl}></Image>
                                            </td>
                                            <td>{bookOrder?.perPersonPrice}</td>
                                            <td>{bookOrder?.familyPackPrice}</td>
                                            <td>{bookOrder?.orderStatus}</td>
                                        
                                            <td>
                                                {/* <Button className="m-1 text-light btn-sm" variant="primary" size="sm">View</Button> */}
                                                <Link to={`/dashboard/booking-order/edit/${bookOrder?._id}`}>
                                                    <Button className="m-1 text-light btn-sm" variant="info" size="sm">Edit</Button>
                                                </Link>
                                                <Button onClick={() => handleDelete(bookOrder._id)} className="m-1 text-light btn-sm" variant="danger" size="sm">Delete</Button>
                                            </td>
                                        </tr> 
                                    )

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