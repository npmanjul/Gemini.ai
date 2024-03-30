import React, { useContext, useState } from 'react';
import './navbar.css';
import { assets } from '../assets';
import { Context } from '../context/Context';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(true);
    const { onSent, prevPrompts, setrecentPrompt, newChat } = useContext(Context);

    const openNav = () => {
        setIsOpen(!isOpen)
    }

    const loadPrompt = async (prompt) => {
        setrecentPrompt(prompt);
        await onSent(prompt);
    }

 


    return (
        <>
            <div className='nav-container' style={{ width: isOpen ? "80px" : "180px", transition: "margin-left,.3s" }}>
                <div className='nav-box'>
                    <div className='menuline'>
                        <button onClick={openNav}><img src={assets.Menuline} alt='menu' /></button>

                        <div className='plusesign' onClick={() => newChat()}>
                            <img src={assets.Plussign} alt='plus' />
                            <div className='btn-txt' style={{ display: isOpen ? "none" : "block" }}>New Chats</div>
                        </div>

                        <div className='recent-activity'>
                            <div className='recent-txt' style={{ display: isOpen ? "none" : "block" }}>
                                Recent
                            </div>
                            <div className='recent-msgs' style={{ display: isOpen ? "none" : "block" }}>

                                {prevPrompts.map((item, index) => {
                                    return (
                                        <div className='recent-msg' onClick={() => loadPrompt(item)}>
                                            <img src={assets.msgIcon} />
                                            <div className='msg-text'>{item.slice(0, 7)}...</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className='otherOption'>
                        <div id='nav-btn'>
                            <img src={assets.Question} alt='question' />
                            <div className='btn-txt' style={{ display: isOpen ? "none" : "block" }}>Help</div>
                        </div>
                        <div id='nav-btn'>
                            <img src={assets.History} alt='history' />
                            <div className='btn-txt' style={{ display: isOpen ? "none" : "block" }}>Activity</div>
                        </div>
                        <div id='nav-btn'>
                            <img src={assets.Setting} alt='setting' />
                            <div className='btn-txt' style={{ display: isOpen ? "none" : "block" }}>Setting</div>
                        </div>
                    </div>
                </div>
            </div>

     
        </>
    );

}

export default Navbar;