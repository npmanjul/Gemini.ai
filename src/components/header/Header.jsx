import React from 'react';
import './header.css';
import { assets } from '../assets';
import Sidemenu from '../Sidemenu/Sidemenu';


const Header = () => {

    function openNav() {
        document.getElementById("myNav").style.width = "50%";
        document.getElementById("myNav").style.display = "block";

      }
      

    return (
        <>
            <div className='maincontant-header'>
                <div className='header-menu-line' onClick={openNav}>
                    <img src={assets.Menuline} />
                </div>
                <div className='gemini-logo'>
                    Gemini
                </div>
                <div className='profile-pic'>
                    <img src={assets.manImg} />
                </div>
            </div>

            <Sidemenu/>

           
        </>
    )
}

export default Header