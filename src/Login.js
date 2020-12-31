import React, { useState } from 'react'
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
 
function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth)
            if (auth) {
                history.push('/')
            }
        }).catch(e => alert(e.message))
    }

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth)
            if (auth) {
                history.push('/')
            }
        }).catch(e => alert(e.message))
    }
    
    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src= 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' alt=""/>
            </Link>
            <div className="login_container">
                <h1>Sign In to the Amazon Clone</h1>
                <form action="">
                    <h5>Email</h5>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <p>By continuing, you agree to Amazon Clone's Conditions of Use and Privacy Notice.</p>
                    <button className='login_signInButton' onClick={signIn} type='submit'>Sign In</button>
                </form>
                <button className='login_registerButton' onClick={register}>Create your Amazon account for this Clone</button>
            </div>
        </div>
    )
}

export default Login
