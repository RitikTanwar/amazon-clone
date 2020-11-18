import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, image, title, price, rating }) {

    const [{ cart }, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }
    // console.log(cart);

    return (
        <div className="productCheckout">
            <img className="checkoutProduct_image" src={image} />
            <div className="checkoutProduct_info" >
                <p className="checheckoutProduct_title">{title}</p>
                <p className="checkoutProduct_price"><small>₹</small><strong>{price}</strong> </p>
                <p className="checkoutProduct_rating">
                    {Array(rating).fill().map((_, i) => (
                        <span>⭐</span>
                    ))}
                </p>
                <button onClick={removeFromCart}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
