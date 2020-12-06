import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {

    const [{basket}, dispatch] = useStateValue()
    
    return (
        <nav className='header'>
            <Link to='/'>
                    <img className='header_logo' src= 'http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=""/>
            </Link>
            <div className='header_search'>
                <input type='text' className='header_searchbox'/>
                <SearchIcon className='header_searchicon' />
            </div>
            <div className='header_nav'>
                <Link to='/login' className='header_link'>
                    <div className='header_option'>
                        <span className='header_optionlineone'>Hello user</span>
                        <span className='header_optionlinetwo'>Sign in</span>
                    </div>
                </Link>
            </div>
            <div className='header_nav'>
                <Link to='/login' className='header_link'>
                    <div className='header_option'>
                        <span className='header_optionlineone'>Returns</span>
                        <span className='header_optionlinetwo'>& Orders</span>
                    </div>
                </Link>
            </div>
            <div className='header_nav'>
                <Link to='/login' className='header_link'>
                    <div className='header_option'>
                        <span className='header_optionlineone'>Your</span>
                        <span className='header_optionlinetwo'>Prime</span>
                    </div>
                </Link>
            </div>
            <Link to='/checkout' className='header_link'>
                <div className='header_optionbasket'>
                    <ShoppingBasketIcon /> 
                        <span className='header_optionlinetwo header_basketcount'>{basket?.length}</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header
