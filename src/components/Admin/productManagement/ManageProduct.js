import React, { useEffect, useState } from 'react';
import ManageProductList from './ManageProductList';

const ManageProduct = () => {
    const [products, setProducts]=useState([])

    useEffect(()=>{
        fetch('https://evening-headland-26779.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            {
                products.map(product=><ManageProductList product={product}></ManageProductList>)
            }
        </div>
    );
};

export default ManageProduct;