
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <div className='login'>
            <Link to='/'>
            <img 
            className='login__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text'/>
                    <h5>Password</h5>
                    <input type='password'/>
                    <button className='login__signinButton'>Sign In</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                
            </div>
            <div className='divider'>
                <h5>New to Amazon?</h5>
            </div>
            <button className='login__registerButton'>Create your Amazon account</button>
            <div className='divider__section'>

            </div>
            <p>
                © 1996-2021, Amazon.com, Inc. or its affiliates
            </p>
        </div>
    )
}

export default Login
