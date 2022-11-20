import React from 'react';
import { useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import css from './detail.css'

const PDetails = () => {
    const {pId} = useParams();
    const [product, setProduct] = useState([])
    console.log(product);
    useEffect(() =>{
        const url = `https://fakestoreapi.com/products/${pId}`
        fetch(url).then(resopnse => resopnse.json()).then(data => setProduct(data))
    },[])
    const{id, title, image, description, price, rating} = product;
    return (
        <div className='detailParent'>
            <img style={{width: '200px'}} src={image} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
            <h4>{price}</h4>
        </div>
    );
};

export default PDetails;