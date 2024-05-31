// App.js

import React, { useEffect, useRef, useState } from 'react';
import Game from './game/base';
import Menu from './components/Menu';
import Settings from './components/Settings';
import Barn from './components/Barn';
import './index.css';

function App() {
  const canvasRef = useRef(null);
  const [showMenu, setShowMenu] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [showBarn, setShowBarn] = useState(false); // State for showing the Barn component
  const [selectedColor, setSelectedColor] = useState('blue');  //State for selected chatacter color

  useEffect(() => {
    const canvas = canvasRef.current;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const startGame = () => {
      setShowMenu(false);
      new Game(canvas, selectedColor); // americans again
    };

    resizeCanvas();

    if (!showMenu && !showBarn && !showOptions) {
      startGame();
    }

    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [showMenu, showBarn, showOptions, selectedColor]);

  const handleStartClick = () => {
    setShowMenu(false);
  };

  const handleSettingsClick = () => {
    setShowOptions(true);
    setShowMenu(false);
  };

  const handleBarnClick = () => {
    setShowBarn(true);
    setShowMenu(false);
  };

  const handleBackClick = () => {
    setShowOptions(false);
    setShowBarn(false);
    setShowMenu(true);
  };

  const handleCharacterSelect = (color) => {
    setSelectedColor(color); // update the selected color
  };

  return (
    <div className="App">
      {showMenu && (
        <Menu
          onStartClick={handleStartClick}
          onSettingsClick={handleSettingsClick}
          onBarnClick={handleBarnClick} // Add Barn button handler
        />
      )}

      {showOptions && <Settings onBackClick={handleBackClick} />}
      {showBarn && <Barn onBackClick={handleBackClick} onCharacterSelect={handleCharacterSelect} />}
      <canvas ref={canvasRef} style={{ border: '1px solid black', display: showMenu ? 'none' : 'block' }} />
    </div>
  );
}

export default App;
