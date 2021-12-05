import React ,{useState,useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';
import {auth,db} from './firebase';
import { useStateValue } from './StateProvider';

function Signup({title}) {
    document.title = title;
    const navigate = useNavigate();
    const [valid, setValid] = useState(false);
    const [{user},dispatch] = useStateValue();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [number, setnumber] = useState('')
    const [password, setPassword] = useState('');
    
    const register = e => {
        e.preventDefault();
        if(valid){
            console.log('dfasdf')
            auth.createUserWithEmailAndPassword(email,password)
            .then((auth) =>{
                if(auth){
                    db.collection('users')
                        .doc(auth.user?.uid)
                        .collection('account')
                        .doc('accountInfo')
                        .set({
                            email: email,
                            name: name,
                            phone: number
                        });

                        dispatch({
                            type: 'SET_USER',
                            user: {
                                userId: auth.user.uid,
                                email: email,
                                name: name,
                                phone: number
                            }
                        });


                    navigate('/');
                }
            })
            .catch(error => {
                document.querySelector('.error_msg').innerHTML = error.message;
                // alert(error.message)
            })
        }else{
            console.log('dsfasdf')
            document.querySelector('.error_msg').innerHTML = 'Please fill your name'
        }
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
                    <h5>Full Name <span className='required'>*</span></h5>
                    <input type='text' value={name} 
                    onChange={e => { 
                        setName(e.target.value);
                        if(e.target.value){ 
                            document.querySelector('.error_msg').innerHTML = '';
                            setValid(true)
                        }else{
                            document.querySelector('.error_msg').innerHTML = 'Please fill you name';
                                setValid(false)}

                    }} required/>
                    <h5>Email <span className='required'>*</span></h5>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password <span className='required'>*</span></h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <h5>Phone number</h5>
                    <input type='number' value={number} onChange={e => setnumber(e.target.value)}/>
                    <p className='error_msg'></p>
                    <button type='submit' disabled={!valid} onClick={register}
                    className='login__signinButton'>Sign Up</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
               
                
            </div>
            <div className='divider'>
                    <h5>Already have an account</h5>
                </div>
                <Link to='/Login'>
                <button 
                    className='login__registerButton'>Sign In</button>
                </Link>
                <div className='divider__section'></div>
                <p>
                    © 1996-2021, Amazon.com, Inc. or its affiliates
                </p>

        </div>
    )
}

export default Signup
