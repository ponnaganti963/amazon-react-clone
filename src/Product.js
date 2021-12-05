import React from 'react';
import NumberFormat from 'react-number-format';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {
    const [{cart}, dispatch] = useStateValue();
    const addToCart = () =>{
        console.log(cart);
        var found = 0;
        Object.values(cart).forEach((a)=>{
            if (a['id'] === id){
                found = 1
            }
        })

        found ?
        console.log('already in cart')
        :
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                count: 1
            },
        })
    };

    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <NumberFormat
                    value={price} 
                    displayType={'text'} 
                    thousandSeparator={true}
                    prefix={'₹'}
                    renderText={(value, props) =>(
                        <>
                        <p className='product__price'>
                            <strong>{value}</strong>
                        </p>
                        </>
                    ) }
                />
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_,i)=> (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={image}></img>
            <button onClick={addToCart} className='product__button'>Add to Cart</button>
        </div>
    )
}

export default Product
