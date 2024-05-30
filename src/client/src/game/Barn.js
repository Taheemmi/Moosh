import React from 'react';

const Barn = ({ onBackClick }) => {
  return (
    <div className="barn-container">
      <h3>Barn</h3>
      {/* Add your barn content here */}
      <button className='menu-buttons' onClick={onBackClick}>Return to Menu</button>
    </div>
  );
};

export default Barn;
