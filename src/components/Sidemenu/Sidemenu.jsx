import React, { useContext, useState } from 'react';
import './sidemenu.css';
import { Context } from '../context/Context';
import { assets } from '../assets';

const Sidemenu = () => {

    const { onSent, prevPrompts, setrecentPrompt, newChat } = useContext(Context);

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";

    }


    const loadPrompt = async (prompt) => {
        setrecentPrompt(prompt);
        await onSent(prompt);
    }


    const closeNavOnNewChat=()=>{
        newChat();
        closeNav();
    }

  

    return (
        <>
            <div id="myNav" class="overlay">

                <div class="overlay-content">
                    <div className='menu-container' >
                        <div className='menu-box'>
                            <div className='menulinebtn'>
                                <button onClick={closeNav}><img src={assets.Menuline} alt='menu' /></button>

                                <div className='menu-plusesign' onClick={closeNavOnNewChat}>
                                    <img src={assets.Plussign} alt='plus' onClick={closeNav} />
                                    <div className='btn-txt' onClick={closeNav} >New Chats</div>
                                </div>

                                <div className='menu-recent-activity'>
                                    <div className='menu-recent-txt' >
                                        Recent
                                    </div>
                                    <div className='menu-recent-msgs' >

                                        {prevPrompts.map((item, index) => {
                                            return (
                                                <div className='menu-recent-msg' onClick={() => loadPrompt(item)}>
                                                    <img src={assets.msgIcon} onClick={closeNav}  />
                                                    <div className='menu-msg-text' onClick={closeNav} >{item.slice(0, 7)}...</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className='otherOption'>
                                <div id='menu-nav-btn'>
                                    <img src={assets.Question} alt='question' />
                                    <div className='menu-btn-txt' >Help</div>
                                </div>
                                <div id='menu-nav-btn'>
                                    <img src={assets.History} alt='history' />
                                    <div className='menu-btn-txt' >Activity</div>
                                </div>
                                <div id='menu-nav-btn'>
                                    <img src={assets.Setting} alt='setting' />
                                    <div className='menu-btn-txt' >Setting</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sidemenu