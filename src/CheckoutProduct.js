import React from 'react'
import { useStateValue } from './StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({id, image, title, price, rating,count, hideButton}) {
    const [{}, dispatch] = useStateValue();
    const removeFromCart = () =>{
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }
    const changeQuantity = (e) => {
        dispatch({
            type: 'INCREMENT_COUNT',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                count: e.target.value
            },
        })
        console.log(e.target.value);
    }
    return (
        <div className='checkoutProduct' key={id}>
            <img className='checkoutProduct__image' src={image}/>
            <div className="checkoutProduct__info">
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_,i)=>(
                            <p>⭐</p>
                        ))
                    }
                </div>
                <img src='https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png'/>
                <span>Quantity: </span>
                {
                    (hideButton) ? (
                        <span>{count}</span>
                    ):
                    (
                        <select className='product__Quantity' name='quantity' onChange={changeQuantity}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    </select>
                    )
                }
                
                    {!hideButton && (
                        <button onClick={removeFromCart}>Remove from cart</button>
                    )}
            </div>
            
        </div>
    )
}

export default CheckoutProduct
