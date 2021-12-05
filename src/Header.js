import React, {useState} from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
    const [{cart,user}, dispatch] = useStateValue();
    const handleAuthentication = () =>{
        if (user){
            auth.signOut();
        }
    }

    const hide = () =>{
        document.querySelector('.showAccounts').style.display = 'none';
    }
    const show = () =>{
        document.querySelector('.showAccounts').style.display = 'block';
    }

    return (
        <div className='header'>
            <Link to='/'>
            <img className='header_logo border__hoverEffect' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='Amazon-logo'/>
            </Link>
            <div className='header_search'>
                <input className='header_searchInput' type='text'/>
                <SearchIcon className='header_searchIon'></SearchIcon>
            </div>
            <div className='header_nav'>
                
                <div className='header_option border__hoverEffect'  onMouseEnter={show} onMouseLeave={hide}>
                    <span className='header_option1'>
                       Hello, {user?.name ? user?.name.split(' ')[0]:'Guests'}
                    </span>
                   
                    <span className='header_option2' style={{position:'relative',paddingRight: '10px'}} >
                        {!user ? 'Sign In' : 'Account'}
                        <ArrowDropDownIcon style={{fontSize: '20px',position: 'absolute'}}/>
                      
                    </span>

                    <div className="showAccounts">
                        <h1>Your Account</h1>
                        <Link to='/Account'><p className='list_items'>Your Account</p></Link>
                        <Link to='/orders'> <p className='list_items'>Your Order</p> </Link>
                        <Link to='/checkout'> <p className='list_items'>Your Cart</p> </Link>
                        <Link to={!user && '/login'}> <p className='list_items' onClick={handleAuthentication}>{user ? 'Sign Out': 'Sign In'}</p> </Link>
                    </div>
                </div>
            <Link to='/orders'>
                <div className="header_option border__hoverEffect">
                    <span className='header_option1'>
                            Returns&
                    </span>
                    <span className='header_option2'>
                        Orders
                    </span>
                </div>
            </Link>
                <Link to='/checkout'>
                <div className='header_optionBasket border__hoverEffect'>
                    <ShoppingBasketIcon />
                    <span className='header_option2 header_basketCount'>
                        {cart?.length}
                    </span>
                    <span className='cart_image'></span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
