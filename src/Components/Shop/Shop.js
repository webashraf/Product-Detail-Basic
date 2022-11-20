import { Link } from 'react-router-dom';
import css from './shop.css'
import PDetails from './../ProductDetails/PDetails';

const Shop = (props) => {
    const{id, title, image, description, price, rating} = props.product;
    return (
        <div className='mainBody'>
            <img className='productImage' src={image} alt="" />
            <h2 className='produtTitle'>{title}</h2>
            <mark>Rating : {rating.rate} Count : {rating.count}</mark>
            <p className='productDes'>{description}</p>
            <Link to={`/shop/${id}`}> <button>Show Details</button> </Link>

            <button>{price} $</button>
            
        </div>
    );
};

export default Shop;