import React, { useContext } from 'react';
import './suggestionbox.css';
import navi from '../icon/navigation.png'
import { Context } from '../context/Context';



const Suggestionbox = (props) => {
    const { onSent, setrecentPrompt} = useContext(Context);

    const loadPrompt = async (prompt) => {
        setrecentPrompt(prompt);
        await onSent(prompt);
    }
    return (
        <>
            <div className='suggestion-box' onClick={() => loadPrompt(props.promptText)}>
                <div className='card-text'>
                    {props.promptText}
                </div>
                <div className='card-icon'>
                    <img src={props.promptImg} />
                </div>
            </div>
        </>
    )
}

export default Suggestionbox;