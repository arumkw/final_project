import React from 'react';
import Header from '../components/header';
import '../css/profile.css';
import Profile from '../templates/profile';

function DetailProfile() {
    return (
        <div className='detailProfile'>
            <Header />
            <Profile />
        </div>
    )
}

export default DetailProfile;