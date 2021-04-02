import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl, setImageUrl]=useState(null);

    const onSubmit = data => {
        const productData ={
            name: data.name,
            weight: data.weight,
            AddPrice: data.AddPrice,
            imageUrl:imageUrl
        };
        // console.log(data);
        const url =`https://evening-headland-26779.herokuapp.com/addProducts`;

        console.log(productData)
        fetch(url,{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(productData)
        })
       .then(res =>{
           alert("submit Successful",res);
       })
    };

    const handleImageUpload =event=>{
        const imageData = new FormData();
        imageData.set('key','636cc1717ed4e3a8b4ae30fc6a76901a');
        imageData.append('image',event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="container formstyle">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Product Name</h3>
                <input className="input_style" name="name" defaultValue="new products" ref={register} />
                <br/>
                <br/>
                <h3>weight</h3>
                <input className="input_style" name="weight" ref={register} />
                <br/>
                <br/>
                <h3>Add Price</h3>
                <input className="input_style" name="AddPrice" ref={register} />
                <br/>
                <br/>
                <input className="input_style" name="exampleRequired" type="file" onChange={handleImageUpload}/>
                <br/>
                <br/>
                <input className="input_style" type="submit" />
            </form>
        </div>
    );
};


export default AddProduct;