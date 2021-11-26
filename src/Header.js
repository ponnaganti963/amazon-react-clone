import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{cart}, dispatch] = useStateValue();
    return (
        <div className='header'>
            <Link to='/'>
            <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='Amazon-logo'/>
            </Link>
            <div className='header_search'>
                <input className='header_searchInput' type='text'/>
                <SearchIcon className='header_searchIon'></SearchIcon>
            </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_option1'>
                        Hello Guest
                    </span>
                    <Link to='/login'>
                    <span className='header_option2'>
                        Sign In
                    </span>
                    </Link>
                    
                </div>
                <div className="header_option">
                    <span className='header_option1'>
                            Returns&
                    </span>
                    <span className='header_option2'>
                        Orders
                    </span>
                </div>
                {/* <div className="header_option">
                    <span className='header_option1'>
                            Your
                    </span>
                    <span className='header_option2'>
                        Prime
                    </span>
                </div> */}
                <Link to='/checkout'>
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header_option2 header_basketCount'>
                        {cart?.length}
                    </span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
