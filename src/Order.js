import React from 'react';
import './Order.css';
import moment from "moment";
import CheckoutProduct from './CheckoutProduct';
import NumberFormat from 'react-number-format';
import {getCartTotal,getTotal} from './reducer';

function Order({order}) {

    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className='order__id'>
                <small>{order.id}</small>
            </p>
            {
                order.data.cart?.map(item =>(
                    <CheckoutProduct
                        id= {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                        count = {item.count}
                        hideButton 
                    />
                ))
            }
            <NumberFormat 
            value={order.data.amount} 
            displayType={'text'} 
            thousandSeparator={true}
            prefix={'₹'}
            renderText={(value, props) =>(
                <>
                <p className='order__total'>
                    Order Total :<strong>{value}</strong>
                </p>
                </>
            ) }
            />
        </div>
    )
}

export default Order
