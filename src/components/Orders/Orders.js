import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Orders = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
        const { productId } = useParams();
        const [product, setProducts] = useState({});

        const onSubmit =data=>{
      const orderDetails = {...loggedInUser, products: product.name, shipment: data, orderTime: new Date()};

      fetch('https://evening-headland-26779.herokuapp.com/addOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderDetails)
      })
      .then(res => res.json())
      .then(data => {
        if(data){
          alert('your order placed successfully');
        }
      });
            
        }
        useEffect(() => {
            const url = `https://evening-headland-26779.herokuapp.com/products/${productId}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setProducts(data));
        }, [productId])

        
        return (
            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue={loggedInUser.name}  placeholder="Your Name" />
                {errors.name && <span className="error">Name is required</span>}
                <input name="email" defaultValue={loggedInUser.email}  placeholder="Your Email" />
                {errors.email && <span className="error">Email is required</span>}

                <input name="address"  placeholder="Your Address" />
                {errors.address && <span className="error">Address is required</span>}

                <input name="phone"  placeholder="Your Phone Number" />
                {errors.phone && <span className="error">Phone Number is required</span>}

                <input type="submit" />
            </form>
        );
    };

    export default Orders;