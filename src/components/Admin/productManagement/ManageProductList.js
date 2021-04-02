import React from 'react';
import { Table } from 'react-bootstrap';

const ManageProductList = ({ product }) => {

    const deleteEvent = id=>{
        fetch(`https://evening-headland-26779.herokuapp.com/deleteProduct/`+ id , {
            method:'DELETE'

        })
        .then(res =>res.json())
        .then(result =>{
              alert("delete success",result)
        })

    }
    return (
        <div className="container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Wight</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.weight}gm</td>
                        <td>{product.AddPrice}</td>
                        <td><button onClick={()=>deleteEvent(product._id)} className="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ManageProductList;
