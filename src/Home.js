import React from 'react'
import './Home.css'
import Product from './Product';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <div className='home_container'>
                <div className='home_title'>
                    <h1>Welcome to Prime Video</h1>
                    <p>Join Prime to watch the latest movies, TV shows and <br/> award-winning Amazon Originals</p>
                    <Link to='/prime'>
                        <button className='home_button'>Start your 30-day free trail</button>
                    </Link>
                </div>
                <img className='home_image'
                    src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._SY1200_FMJPG_.jpg"
                    alt=""
                />
                <div className='home_row'>
                    <Product 
                        id="111"
                        title='The MSI laptop' 
                        price={50000}
                        image='https://images-na.ssl-images-amazon.com/images/I/81bgZU7qPoL._SL1500_.jpg'
                        rating={5}
                    />
                    <Product 
                        id="112"
                        title="One plus 7 pro"
                        price={37000}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61FRLa8IFTL._SL1500_.jpg"
                    />

                </div>
                <div className='home_row'>
                    <Product 
                        id="113"
                        title="Suheldev"
                        price={100}
                        rating={4}
                        image="https://images-eu.ssl-images-amazon.com/images/I/51UNiQJBLEL._AC_SX184_.jpg"
                    />
                    <Product 
                        id="114"
                        title="Meditation"
                        price={150}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/51BHLSGt51L._SY346_.jpg"
                    />
                    <Product 
                        id="115"
                        title="Helmet"
                        price={100}
                        rating={3}
                        image="https://images-eu.ssl-images-amazon.com/images/I/31NAQirJ%2BsL._AC_UL200_SR200,200_.jpg"
                    />
                </div>
                <div className='home_row'>
                    <Product 
                        id="116"
                        title="Smart watch"
                        price={170}
                        rating={3}
                        image="https://images-eu.ssl-images-amazon.com/images/I/71RrPTCdy-L._AC_UL200_SR200,200_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home