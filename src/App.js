
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import {auth, db} from './firebase';
import { useEffect, useState } from 'react';
import { useStateValue } from './StateProvider';
import Payments from './Payments';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
import Signup from './Signup';
import Account from './Account';

const promise = loadStripe(
  "pk_test_51K0nq2SAE8S9CQj27QYk7eqXri2kk5jAUtHxWsNqLfgeW8j1aMfwCpDBiQIZBUNBBK0YdYuXY23YMe86yP6H1dxy00EE61slj0"
);

function App() {

  const [{user},dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('final data',user);
      if(authUser){
            db.collection('users')
           .doc(authUser.uid)
           .collection('account').onSnapshot(snapshot =>{
               
               dispatchData(snapshot.docs[0].data().name,snapshot.docs[0].data().phone)
               
           })
           console.log('sdfasfsdf',authUser,user)
           function dispatchData(name,phone){
            dispatch({
              type: 'SET_USER',
              user: {
                userId: authUser.uid,
                email: authUser.email,
                name: name,
                phone: phone
              }
            });

           }
        
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });


  }, [auth]);
  return (

    <Router>
      <div className="app">
        <Routes>
            <Route path='/login'
              element={
                <>
                <Login title="Amazon Sign-In"/>
                </>
                }
              />
              <Route path='/Signup'
              element={
                <>
                <Signup title="Amazon Sign-Up"/>
                </>
                }
              />
              
            <Route path='/checkout'
              element={
                <>
                <Header/> 
                <Checkout title="Amazon Checkout"/>
                </>
                }
              />
              <Route path='/Account'
              element={
                <>
                <Header/> 
                <Account title="Your Account"/>
                </>
                }
              />
              <Route path='/payments'
              element={
                <>
                <Header/>
                <Elements stripe={promise}> 
                <Payments title="Payments"/>
                </Elements>
                </>
                }
              />
              <Route path='/orders'
              element={
                <>
                <Header/>
                <Orders title="Your Orders"/>
                </>
                }
              />
              <Route path='/'
              element={
                <>
                <Header/> 
                <Home title="Amazon clone"/>
                </>
                }
              />
              
        </Routes>
      
     
      </div>
    </Router>

  );
}

export default App;
