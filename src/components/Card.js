import React, { useState } from 'react';

const Card = () => {
  const [isDark, setIsDark] = useState(false);



  const switchMode = () => {
    
  }

  const darkToggle = () => {
    setIsDark(!isDark)
  }
  const pickClass = isDark ? 'card dark full' : 'card light full';
  
  return (      
        <div className={pickClass}>
          <div className="stats">
            <h3 className="title">POS FAILURE RATE</h3>
            {/* FIX STRUCTURE TO CONTAIN TITLE IN A BOX */}
            <div className="info">
              <p className="percentage">60%</p>
              <span className="change"><ion-icon name="caret-up-outline"></ion-icon> 8%</span>
            </div>

          </div>
          <div className="controls">
            <div className="actions">
              <div className="mode">
                <button
                  onClick={switchMode}
                  >
                  MODE
                </button>
              </div>
              <div className="switch">
              <button
                  onClick={darkToggle}
                  >
                  SWITCH
                </button>
              </div>
            </div>
            
            <div className="slider">
              <input type="range" min="1" max="100" value="50"/>
            </div>
            
            <p className="source">Source <span>NIBBS</span></p>
          </div>

          <div className="range_minimal">
            <div className="range_width"></div>
          </div>

          <div className="intervals">
            <span className="now">Daily</span>
            <span>Monthly</span>
            <span>Yearly</span>
          </div>

        </div>
    );
  }

export default Card