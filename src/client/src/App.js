// App.js

import React, { useEffect, useRef, useState } from 'react';
import Game from './game/base';
import Settings from './game/Settings'; // Import the Settings component
import Barn from './game/Barn'; // Import barn
import './index.css'; // change if CSS has been relocated


function App() {
  const canvasRef = useRef(null);
  const [showMenu, setShowMenu] = useState(true);
  const [showOptions, setShowOptions] = useState(false); 
  const [showBarn, setShowBarn] = useState(false); // added state for showing barn 


  useEffect(() => {
    const canvas = canvasRef.current;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const startGame = () => {
      setShowMenu(false);
      new Game(canvas);
    };

    resizeCanvas(); // Set initial size

    if (!showMenu) {
      startGame();
    }

    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [showMenu]);

  const handleStartClick = () => {
    setShowMenu(false);
  };

  // Function to handle displaying options when the "Settings" button is clicked
  const handleSettingsClick = () => {
    setShowOptions(true);
    setShowMenu(false); // Hide the main menu when options are shown
  };

  const handleBarnClick = () => {
    setShowBarn(true);
    setShowMenu(false);
  }

  //function to go back a notch
  const handleBackClick = () => {
    setShowOptions(false); // hide the options page
    setShowBarn(false); // hide the barn
    setShowMenu(true); // show the main menu
  };

  return (

    <div className={`App ${!showMenu ? 'background-hidden' : ''}`}>
      <div className="background-container">
        <div className="background-image"></div>
      </div>
      {showMenu ? (
        <div className='centre-menu'>

          <h3>Main Menu</h3>
          <button className='menu-buttons' onClick={handleStartClick}>Start Game</button>
          <button className='menu-buttons' onClick={handleBarnClick}>Barn</button>
          <button className='menu-buttons' onClick={handleSettingsClick}>Settings</button> {/* Call handleSettingsClick for "Settings" button */}
        </div>
      ) : null}

      {showOptions ? (
        <div>
          <Settings onBackClick={handleBackClick} /> 
        </div>
      ) : null}

      {showBarn ? (
        <div>
          <Barn onBackClick={handleBackClick} />
        </div>
      ) : null}

      {!showMenu && (

      <div>
      <canvas ref={canvasRef} style={{ border: '1px solid black', display: showMenu ? 'none' : 'block' }} />
      <button className='menu-buttons' onClick={handleBackClick} style={{ position: 'absolute', top: 20, left: 20}}>Return to Menu</button>
    </div>
  )}
  </div>
  );
}
export default App;
