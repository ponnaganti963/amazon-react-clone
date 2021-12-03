
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import Payments from './Payments';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
import Signup from './Signup';

const promise = loadStripe(
  "pk_test_51K0nq2SAE8S9CQj27QYk7eqXri2kk5jAUtHxWsNqLfgeW8j1aMfwCpDBiQIZBUNBBK0YdYuXY23YMe86yP6H1dxy00EE61slj0"
);

function App() {

  const [{},dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      
      if(authUser){

        dispatch({
          type: 'SET_USER',
          user: authUser
        });

      }else{
        
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []);
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
              <Route path='/payments'
              element={
                <>
                <Header/>
                <Elements stripe={promise}> 
                <Payments/>
                </Elements>
                </>
                }
              />
              <Route path='/orders'
              element={
                <>
                <Header/>
                <Orders/>
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
