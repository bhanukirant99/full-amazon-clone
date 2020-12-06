import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function Subtotal() {

    const [{basket}, dispatch] = useStateValue();

    let price = 0;

    const calculatePrice = basket.map(item => {
        price += item.price;
    })

    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                             Subtotal ({basket?.length} items): <strong>{price}</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type='checkbox' /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
{/* <CurrencyFormat 
                renderText={(value) => {
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{`${value}`}</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type='checkbox' /> This order contains a gift
                        </small>
                    </>
                }}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"₹"}
            /> */}