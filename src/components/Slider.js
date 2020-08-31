import React from 'react';

const Slider = ({ sliderChange }) => {
    return (
      <div className="slider">
          <input 
            type="range" 
            min="1" 
            max="100" 
            onChange={sliderChange}
            value=""/>                  
      </div>
    );
  }

export default Slider