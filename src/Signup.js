import React ,{useState,useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';
import {auth} from './firebase';

function Signup({title}) {
    document.title = title;
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) =>{
            if(auth){
                navigate('/');
            }
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className='signup'>
            <Link to='/'>
            <img 
            className='login__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
            </Link>
            <div className="login__container">
                <h1>Create an Account</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type='submit' onClick={register}
                    className='login__signinButton'>Sign Up</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                
            </div>
        </div>
    )
}

export default Signup
