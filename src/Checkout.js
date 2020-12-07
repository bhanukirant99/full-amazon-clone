import React from 'react'
import './Checkout.css'
import SUbtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'

function Checkout() {
    const [{ basket }, dispatch] = useStateValue()

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
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className='checkout_right'>
                <SUbtotal />
            </div>
        </div>
    )
}

export default Checkout
