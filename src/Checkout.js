import React from 'react'
import './Checkout.css'
import SUbtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className='checkout_left'>
                <img 
                    className="checkout_ad"
                    src="https://www.adweek.com/wp-content/uploads/2019/09/spotify-80s-ads-2019.jpg"
                    alt=""
                />
                <div>
                    <h2 className='checkout_title'>
                        Your shopping basket
                    </h2>
                </div>
            </div>
            <div className='checkout_right'>
                <SUbtotal />
            </div>
        </div>
    )
}

export default Checkout
