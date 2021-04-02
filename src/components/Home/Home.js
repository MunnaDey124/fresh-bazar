import React, { useEffect, useState } from 'react';
import Product from './Product';
import './home.css';

const Home = () => {
    const [products, setProducts]=useState([])

    useEffect(()=>{
        fetch('https://evening-headland-26779.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="row homePgStyle">
            {
                products.map(product =><Product product={product}></Product>)
            }
            
        </div>
    );
};

export default Home;