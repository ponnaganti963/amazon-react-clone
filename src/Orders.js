import React, { useEffect, useState } from 'react';
import './Orders.css';
import {db} from './firebase';
import { useStateValue } from './StateProvider';
import Order from './Order';

function Orders({title}) {
    document.title = title;
    const [orders, setOrders] = useState([]);
    const [{user}] = useStateValue();
    useEffect(() =>{
        if(user){
        db.collection('users')
        .doc(user?.userId)
        .collection('orders')
        .orderBy('created','desc')
        .onSnapshot(snapshot =>{
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
        }else{
            setOrders([]);
        }
    },[user])
    console.log(orders);
    return (
        <div className='orders'>
            <h1 className='orders__title'>Your Orders</h1>

            {
                orders.length>0 ? (
                    <div className="orders__order">
                {
                    orders?.map(order=> (
                        <Order order={order}/>
                    ))
                }
            </div>
                ):
                
                    <p>Your Orders are Empty</p>
                
            }

            
        </div>
    )
}

export default Orders
