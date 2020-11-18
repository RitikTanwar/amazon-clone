import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { cartSumTotal } from './Reducer';
import { useHistory } from 'react-router-dom';


function Subtotal() {
    const [{ cart }, dispatch] = useStateValue();
    const history = useHistory();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart.length} items):<strong> {value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={cartSumTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'₹'}
            />
            <button onClick={e => history.push('/payment')}>Proceed to CheckOut</button>
        </div>
    )
}

export default Subtotal
