import React from 'react';
import './header.css';
import { assets } from '../assets';


const Header = () => {
    return (
        <>
            <div className='maincontant-header'>
                <div className='gemini-logo'>
                    Gemini
                </div>
                <div className='profile-pic'>
                    <img src={assets.manImg}/>
                </div>
            </div>
        </>
    )
}

export default Header