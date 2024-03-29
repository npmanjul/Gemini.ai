import React from 'react';
import './heroai.css';
import Suggestionbox from '../suggestion box/Suggestionbox';
import Searcharea from '../Searcharea/Searcharea';

const Heroai = () => {
    return (
        <>
            <div className='heroai-main-container'>
                <div className='container-inner'>
                    <div className='heading-container'>
                        <div className='name-heading'>
                            Hello,Anjul.
                        </div>
                        <div className='greeting-heading'>
                            How can I help you today?
                        </div>
                    </div>
                    <div className='prompt-container'>
                        <div className='suggestion-container'>
                            <Suggestionbox />
                            <Suggestionbox />
                            <Suggestionbox />
                            <Suggestionbox />
                        </div>
                    </div>
                    <div className='prompt-box'>
                        <Searcharea/>
                        <div className='footer-description'>
                            Gemini may display inaccurate info, including about people, so double-check its responses. <a href='https://support.google.com/gemini/answer/13594961?visit_id=638473440005319957-2891492336&p=privacy_notice&rd=1#privacy_notice'> Your privacy & Gemini Apps</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heroai