import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React ,{useState, useEffect} from 'react';
import NumberFormat from 'react-number-format';
import { Link ,useNavigate} from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payments.css'
import { useStateValue } from './StateProvider';
import { getCartTotal , getTotal } from './reducer';
import axios from './axios';
import {db} from './firebase';

function Payments() {
    const [{cart,user}, dispatch] = useStateValue();
    const [error, setError] = useState(null);
    const [disabled, SetDisabled] = useState(true);
    const [processing, setprocessing] = useState('');
    const [succeeded, setsucceeded] = useState(false);
    const [clientSecret, setclientSecret] = useState('');
    const navigator = useNavigate();

    useEffect(() => {
        const getClientSecret = async () =>{
            if( getCartTotal(cart)){
                const response = await axios({
                    method: 'post',
                    url: `/payments/create?total=${getCartTotal(cart)*100}`
                });
                setclientSecret(response.data.clientSecret);
            }
        }

        getClientSecret();
        
    }, [cart])

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(event) =>{
        event.preventDefault();
        setprocessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) =>{
            //PaymentIntent is payment confirmation 

            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                cart: cart,
                amount: getCartTotal(cart),
                created: paymentIntent.created
            })


            setsucceeded(true);
            setError(null);
            setprocessing(false);
            dispatch({
                type: 'EMPTY_CART'
            })
            navigator('/orders');
        })
    }

    const handleChange = event =>{
            SetDisabled(event.empty);
            setError(event.error ? event.error.message : "");
    }

    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>
                    Checkout (<Link to='/checkout'>{cart?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__Address">
                        <p>{user?.email}</p>
                        <p>3-143, Behind old Andhra bank</p>
                        <p>Malikipuram, Andhra Pradesh</p>
                    </div>

                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {
                            cart.map(item =>(
                                <CheckoutProduct
                                    id ={item.id}
                                    title = {item.title}
                                    image = {item.image}
                                    price = {item.price}
                                    rating  = {item.rating}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className='payment__priceContainer'>
                                <NumberFormat 
                                    value={getCartTotal(cart)} 
                                    displayType={'text'} 
                                    thousandSeparator={true}
                                    prefix={'₹'}
                                    renderText={(value, props) =>(
                                        <h3 style={{marginTop:'20px',fontSize:'20px'}}>
                                            Order Total ({getTotal(cart)} items):<strong>{value}</strong>
                                        </h3>
                                    ) }
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>

                                {error && <div>{error}</div>}

                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Payments
