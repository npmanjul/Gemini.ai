import React from 'react';
import './suggestionbox.css';
import navi from '../icon/navigation.png'

const Suggestionbox = () => {
    return (
        <>
              <div className='suggestion-box'>
              <div className='card-text'>
              Suggest beautiful places to see on an upcoming road trip
              </div>
              <div className='card-icon'>
              <img src={navi}/>
              </div>
              </div>
        </>
    )
}

export default Suggestionbox