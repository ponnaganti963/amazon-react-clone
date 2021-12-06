
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import {auth,db} from './firebase';
import { useStateValue } from './StateProvider';
function Login({title}) {
    document.title = title;
    const navigate = useNavigate();
    const [{},dispatch] = useStateValue();
    const [Auth,setAuth] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = async e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth =>{
            if(auth){
                setAuth(auth);
            }
        })
        .catch(error=> alert(error.message))

    }

    

    useEffect(()=>{
        if(Auth){
            db.collection('users')
           .doc(Auth.user.uid)
           .collection('account').onSnapshot(snapshot =>{
               dispatchData(snapshot.docs[0].data().name,snapshot.docs[0].data().phone)
               
           })

        }
        function dispatchData(name,phone){
            dispatch({
                type: 'SET_USER',
                user: {
                    userId: Auth.user.uid,
                    email: email,
                    name: name,
                    phone: phone
                }
              });
              navigate('/');
    
        }
       
    },[Auth])

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
                    <h5>Email <span className='required'>*</span></h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password <span className='required'>*</span></h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type='submit' onClick={signIn}
                    className='login__signinButton'>Sign In</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                
            </div>
            <div className='divider'>
                <h5>New to Amazon?</h5>
            </div>
            <Link to='/Signup'>
            <button 
                className='login__registerButton'>Create your Amazon account</button>
            </Link>
            <div className='divider__section'></div>
            <p>
                © 1996-2021, Amazon.com, Inc. or its affiliates
            </p>
        </div>
    )
}

export default Login
