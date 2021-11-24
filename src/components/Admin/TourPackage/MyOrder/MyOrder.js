import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../../Hooks/useAuth';
import './MyOrder.css'

const MyOrder = () => {
    const [allMyBookingOrders, setAllMyBookingOrders] = useState([])
    const {user} = useAuth();

    useEffect(() => {
        const url = `https://limitless-hollows-79049.herokuapp.com/user-booking-order/${user?.email}`;
        fetch(url)
        .then(res => res.json())
        .then(result => setAllMyBookingOrders(result))

    }, [])

    // console.log(bookOrders);

    // Delete Booking Order ... 
    const handleMyBookingOrderDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure want to delete this order?")
        if(confirmDelete) {
            const url = `https://limitless-hollows-79049.herokuapp.com/user-booking-order/delete/${id}`;
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
                    const restServices = allMyBookingOrders.filter(myOrder => myOrder._id != id)
                    setAllMyBookingOrders(restServices)
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
                                    (allMyBookingOrders?.length > 0) 
                                    ?
                                    allMyBookingOrders?.map((myOrder, index) => 
                                        <tr key={myOrder?._id}>
                                            <td>{index + 1}</td>
                                            <td>{myOrder?.name}</td>
                                            <td>{myOrder?.email}</td>
                                            <td>{myOrder?.phone}</td>
                                            <td>{myOrder?.shipping_address}, {myOrder?.city}</td>
                                            <td>{myOrder?.placeName}</td>
                                            <td>
                                                <Image width="75" src={myOrder?.imgUrl}></Image>
                                            </td>
                                            <td>{myOrder?.perPersonPrice}</td>
                                            <td>{myOrder?.familyPackPrice}</td>
                                            <td>{myOrder?.orderStatus}</td>
                                        
                                            <td>
                                                {/* <Button className="m-1 text-light btn-sm" variant="primary" size="sm">View</Button> */}
                                                {/* <Link to={`/dashboard/user-booking-order/edit/${myOrder?._id}`}>
                                                    <Button className="m-1 text-light btn-sm" variant="info" size="sm">Edit</Button>
                                                </Link> */}
                                                <Button onClick={() => handleMyBookingOrderDelete(myOrder?._id)} className="m-1 text-light btn-sm" variant="danger" size="sm"><FontAwesomeIcon icon={faTrash} /></Button>
                                            </td>
                                        </tr> 
                                    )
                                    : 
                                    <tr>
                                        <td colSpan="11">No Order Found!!!</td>
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

export default MyOrder;