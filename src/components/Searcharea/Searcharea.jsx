import React from 'react';
import './searcharea.css';
import voiceIcon from '../icon/mice.png';
import sendBtn from '../icon/send btn.png';
import uploadImg from '../icon/gallery_icon-DX7cOO5y.png'

const Searcharea = () => {
    return (
        <>
            <div className='search-area'>
                <div className='search-box'>
                    <input type='text' placeholder='Enter a prompt here'></input>
                </div>
                <div className='search-icon'>
                    <img src={uploadImg}/>
                    <img src={voiceIcon}/>
                    <img src={sendBtn}/>
                </div>

            </div>
        </>
    )
}

export default Searcharea