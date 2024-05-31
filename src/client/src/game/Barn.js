import React, { useState } from 'react';
import './../barn.css';

const Barn = ({ onBackClick, onCharacterSelect }) => {
  const [selectedCharacter, setSelectedCharacter] = useState('blue');

  const handleCharacterClick = (color) => {
    setSelectedCharacter(color);
    onCharacterSelect(color);
  };

  return (
    <div className="barn-container">
      <h1>Barn</h1>
      <div className="character-selection">
        <h2>SELECT YOUR CHARACTER</h2>
        <div className="character-options">
          <button
            className={`character-button ${selectedCharacter === 'red' ? 'selected' : ''}`}
            style={{ backgroundColor: 'red' }}
            onClick={() => handleCharacterClick('red')}
          ></button>
          <button
            className={`character-button ${selectedCharacter === 'green' ? 'selected' : ''}`}
            style={{ backgroundColor: 'green' }}
            onClick={() => handleCharacterClick('green')}
          ></button>
          <button
            className={`character-button ${selectedCharacter === 'blue' ? 'selected' : ''}`}
            style={{ backgroundColor: 'blue' }}
            onClick={() => handleCharacterClick('blue')}
          ></button>
        </div>
      </div>
      <button className="back-button" onClick={onBackClick}>Back</button>
    </div>
  );
};

export default Barn;
