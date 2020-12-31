import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct( { id, image, title, price, rating } ) {
    const [{ basket }, dispatch] = useStateValue()

    const removeFrombasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <strong>₹{price}</strong>
                </p>
                <div className='checkoutProduct_rating'>
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>
                            {/* <img src="https://img.icons8.com/emoji/30/000000/glowing-star.png"/> */}
                            <img src="https://img.icons8.com/fluent/30/000000/star.png" alt=''/>    
                        </p>
                    ))}    
                </div>
                <button onClick={removeFrombasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
