import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/header/Header';
import Heroai from './components/Mainscreen/Heroai';

const App = () => {

  return (
    <>
      <div className='wrapper'>
        <div className='container'>
          <Navbar/>
          <div className='main-container'>
          <Header/>
          <Heroai/>
          </div>

        </div>

      </div>
    </>
  )
}

export default App