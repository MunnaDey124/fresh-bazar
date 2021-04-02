
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './checkout.css';

const CheckOut = () => {
    const {productId} = useParams();
    const [product ,setProducts]=useState({});


    // const handleCheckOut =()=>{
    //     history.push('/orders');
    // }

    useEffect(()=>{
        const url =`https://evening-headland-26779.herokuapp.com/products/${productId}`;
    fetch(url)
        .then(res => res.json())
        .then(data=>setProducts(data));
    },[productId])
    return (
        <div className=" container mt-5 pt-5 checkOutStyle">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.name}</td>
                        <td>1</td>
                        <td>{product.AddPrice}</td>
                    </tr>
                </tbody>
            </Table>
            <Button className="btn btn-success">
                <Link className="btn btn-white"  to ={`/orders/${product._id}`}>CheckOut</Link> 
            </Button>
        </div>
    );
};

export default CheckOut;
