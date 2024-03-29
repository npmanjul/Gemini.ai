import React, { useState } from 'react';
import './navbar.css';
import Menuline from '../icon/menu-line.png';
import Plussign from '../icon/download.png';
import Question from '../icon/question.png';
import History from '../icon/history.png';
import Setting from '../icon/setting.png';
import msgIcon from '../icon/msg-icon.png'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(true);

    const openNav = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <div className='nav-container' style={{ width: isOpen ? "80px" : "180px",transition: "margin-left,.3s" }}>
                <div className='nav-box'>
                    <div className='menuline'>
                        <button onClick={openNav}><img src={Menuline} alt='menu' /></button>

                        <div className='plusesign'>
                            <img src={Plussign} alt='plus' />
                            <div className='btn-txt' style={{ display: isOpen ? "none" : "block"}}>New Chats</div>
                        </div>

                        <div className='recent-activity'>
                            <div className='recent-txt' style={{ display: isOpen ? "none" : "block" }}>
                                Recent
                            </div>
                            <div className='recent-msgs' style={{ display: isOpen ? "none" : "block" }}>
                                <div className='recent-msg'>
                                    <img src={msgIcon} />
                                    <div className='msg-text'>html..</div>
                                </div>
                                <div className='recent-msg'>
                                    <img src={msgIcon} />
                                    <div className='msg-text'>html..</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='otherOption'>
                        <div id='nav-btn'>
                            <img src={Question} alt='question' />
                            <div className='btn-txt' style={{ display: isOpen ? "none" : "block" }}>Help</div>
                        </div>
                        <div id='nav-btn'>
                            <img src={History} alt='history' />
                            <div className='btn-txt' style={{ display: isOpen ? "none" : "block" }}>Activity</div>
                        </div>
                        <div id='nav-btn'>
                            <img src={Setting} alt='setting' />
                            <div className='btn-txt' style={{ display: isOpen ? "none" : "block" }}>Setting</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Navbar;