import React from 'react';
import './Account.css';
import { useStateValue } from './StateProvider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Account({title}) {
    document.title = title;
    const [{user}] = useStateValue();
    console.log('Acccount',user)
    return (
        <div className='account'>
            <div className="profile_div">

                {
                user?.image
                ? <img className='profile__pic' src='https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'/> : 
                <AccountCircleIcon className='profile__pic'/>
                }
                <h3 className='user__name'>Hello, { user?.name ? user.name : 'Guest'} </h3>
            </div>
            <p><strong>Email:</strong> {user?.email ? user.email : 'xxx@gmail.com'}</p>
            <p><strong>Address:</strong> 3-153, behind Old Andhra Bank, Malikipuram</p>
            <p><strong>Phone Number:</strong> {user?.phone ? user.phone : '*********'}</p>

            
        </div>
    )
}

export default Account
