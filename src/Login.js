import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';


function Login() {
    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src= 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' alt=""/>
            </Link>
            <div className="login_container">
                <h1>Sign In to the Amazon Clone</h1>
                <form action="">
                    <h5>Email</h5>
                    <input type='email' />
                    <h5>Password</h5>
                    <input type='password'/>
                    <p>By continuing, you agree to Amazon Clone's Conditions of Use and Privacy Notice.</p>
                    <button className='login_signInButton'>Sign In</button>
                </form>
                <button className='login_registerButton'>Create your Amazon account for this Clone</button>
            </div>
        </div>
    )
}

export default Login
