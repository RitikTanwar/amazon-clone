import React, { useState } from 'react'
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format';
import { cartSumTotal } from './Reducer';

function Payment() {
    const [{ cart, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const element = useElements();

    const [error, setError] = useState(null);
    const [disable, setDisable] = useState(true);

    const handleSubmit = (e => {

    })
    const handleChange = (e => {
        setDisable(e.empty);
        setError(e.error ? e.error.message : "")
    })

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout(
                <Link to='/checkout'>{cart.length} items</Link>
                )
            </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h2>Delivery Address</h2>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>H-13 React Lane</p>
                        <p>California</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h2>Review Items</h2>
                    </div>
                    <div className="payment_items_details">
                        {cart.map(item => (
                            <CheckoutProduct
                                title={item.title}
                                id={item.id}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h2>Payment Method</h2>
                    </div>
                    <div className="payment_detail">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment_price_details">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <p>
                                                Order Total:<strong> {value}</strong>
                                            </p>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={cartSumTotal(cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={'₹'}
                                />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
