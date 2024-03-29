import React from 'react';
import './header.css';
import manImg from '../img/man.jpeg'

const Header = () => {
    return (
        <>
            <div className='maincontant-header'>
                <div className='gemini-logo'>
                    Gemini
                </div>
                <div className='profile-pic'>
                    <img src={manImg}/>
                </div>
            </div>
        </>
    )
}

export default Header