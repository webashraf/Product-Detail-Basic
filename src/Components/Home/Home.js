
import { createContext, useEffect, useState } from 'react';
import Shop from '../Shop/Shop';


const Home = () => {
    const [product, setProduct] = useState([])
    // console.log(product);
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div>
            <h1>This is home</h1>
            {
                product.map(p => <Shop product={p} ></Shop>)
            }
        </div>
    );
};

export default Home;