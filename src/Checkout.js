import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import {Link} from 'react-router-dom';


function Checkout() {
    const [{cart} , dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                {
                    
                    cart.length ?
                    (
                        <>
                        <h1>Shopping Cart</h1>
                        {
                            cart.map(item =>(
                                <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                
                                />
                            ))
                        }
                   
                    </>
                    )
                    :
                    (
                        <>
                        <h1>Your Amazon Cart is Empty.</h1>
                        <h2>
                            Add your products to Buy..
                            <Link to='/' style={{textDecoration:'none'}}>
                            <span >continue Shopping</span>
                        </Link>
                        </h2>
                        
                        </>
                    )
                    
                }
            </div>
            <div className="checkout__right">
                <img className='amazonSecure_img' src='https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png'/>
                {
                    cart?.length ?
                    <Subtotal /> : ''
                }
                
            </div>
        </div>
    )
}

export default Checkout
