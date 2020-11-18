import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {

    const [{ cart }, dispatch] = useStateValue();
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    return (
        <div className="product" >
            <div className="product_info" >
                <p className="product_title">{title}</p>
                <p className="product_price" >
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                {Array(rating).fill().map((_, i) => (
                    <span>⭐</span>
                ))}
            </div>
            <img src={image} alt="" />
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Product
