import React from 'react';
import './Subtotal.css';
import NumberFormat from 'react-number-format';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useStateValue } from './StateProvider';
import { getCartTotal , getTotal } from './reducer';
import { useNavigate } from 'react-router';

function Subtotal() {
    const navigator = useNavigate();
    const [{cart}] = useStateValue();
    return (
        <div className='checkout__subtotal' key={cart.id}>
            <NumberFormat 
            value={getCartTotal(cart)} 
            displayType={'text'} 
            thousandSeparator={true}
            prefix={'₹'}
            renderText={(value, props) =>(
                <>
                <p className='green_text'>
                    <CheckCircleIcon style={{color:'green',fontSize:'20px',marginBottom:'-5px',marginRight:'5px'}}/><span>Your order is eligible for FREE Delivery.</span>
                     
                </p>
                <p style={{marginLeft:'25px',borderBottom:'1px solid lightgray',paddingBottom:'10px'}}>Select this option at checkout.</p>
                <p style={{marginTop:'20px',fontSize:'20px'}}>
                    Subtotal ({getTotal(cart)} items):<strong>{value}</strong>
                </p>
                <button onClick={e => navigator('/payments')} className='proceed__buy'>Proceed to Buy</button>
                </>
            ) }
            />
        </div>
    )
}

export default Subtotal
