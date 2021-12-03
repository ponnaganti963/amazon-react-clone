import React from 'react';
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
                
            <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className='header_option border__hoverEffect'>
                    <span className='header_option1'>
                       Hello, {user ? (user.email.split('@')[0].length > 10 ? user.email.split('@')[0].substr(0,10) :user.email.split('@')[0]):'Sign in'}
                    </span>
                   
                    <span className='header_option2'>
                      {!user ? 'Sign In' : 'Sign Out'}
                    </span>
                </div>
            </Link>
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
