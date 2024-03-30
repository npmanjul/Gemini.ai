import React, { useContext } from 'react';
import './searcharea.css';
import voiceIcon from '../icon/mice.png';
import sendBtn from '../icon/send btn.png';
import uploadImg from '../icon/gallery_icon-DX7cOO5y.png';
import { Context } from '../context/Context';

const Searcharea = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);

    return (
        <>
            <div className='search-area'>
                <div className='search-box'>
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here'></input>
                </div>
                <div className='search-icon'>
                    <img src={uploadImg}/>
                    <img src={voiceIcon}/>
                    <img onClick={()=>onSent()} src={sendBtn}/>
                </div>

            </div>
        </>
    )
}

export default Searcharea