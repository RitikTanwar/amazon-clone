import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {

    const [{ cart, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_top">
                <img
                    className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
            </div>
            <div className="checkout_bottom">
                <div className="checkout_left">
                    <h4>Hello {user?.email}</h4>
                    <h1>Your Shopping Cart</h1>


                    <hr />
                    {cart.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>

                <div className="checkout_right">
                    <Subtotal />
                </div>
            </div>
        </div>
    )
}

export default Checkout
