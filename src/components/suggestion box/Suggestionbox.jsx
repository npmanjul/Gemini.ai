import React, { useContext } from 'react';
import './suggestionbox.css';
import navi from '../icon/navigation.png'
import { Context } from '../context/Context';



const Suggestionbox = () => {
    const { onSent, setrecentPrompt} = useContext(Context);

    const loadPrompt = async (prompt) => {
        setrecentPrompt(prompt);
        await onSent(prompt);
    }
    return (
        <>
            <div className='suggestion-box' onClick={() => loadPrompt("Suggest beautiful places to see on an upcoming road trip")}>
                <div className='card-text'>
                    Suggest beautiful places to see on an upcoming road trip
                </div>
                <div className='card-icon'>
                    <img src={navi} />
                </div>
            </div>
        </>
    )
}

export default Suggestionbox;