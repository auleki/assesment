import React, { useState, useEffect } from 'react';
import Moon from '../moon.svg';
import Mode from '../mode.svg';
import ModeDark from '../mode-dark.svg';
import Sun from '../sun.svg';
import Info from '../info.svg';
import IconButton from './IconButton';

const Card = ({ cardState, switchState  }) => {  
  const [isDark, setIsDark] = useState(switchState)
  const [mode, setMode] = useState(0)
  // eslint-disable-next-line
  const [modeClass, setModeClass] = useState(cardState)
  const currentMode = modeClass[mode]


  //ACTION VARIABLES 
  const switchClass = isDark ? "dark": "light"
  const modeIcon = isDark ? ModeDark : Mode
  const switchIcon = isDark ? Sun : Moon

  useEffect(() => {
    if(mode === 3) setMode(0)
  }, [mode])
  
  const switchMode = () => {
    setMode(mode + 1)
  }

  const sliderChange = () => {
    
  }

  const darkToggle = () => {
    setIsDark(!isDark)
  }
  
  return (      
        <div className={`card ${switchClass} ${currentMode}`}>

        <div className="card_content">
          <div className="stats">
              <h3 className="title">
                POS FAILURE RATE
              </h3>

              <div className="info">
                <p className="percentage">60%</p>
                <span className="change"><ion-icon name="caret-up-outline"></ion-icon> 8%</span>
              </div>

            </div>

            <div className="controls">
              <div className="actions">
                <IconButton
                  iconUrl={modeIcon}
                  iconClass="mode"
                  onClick={switchMode}/>

                <IconButton 
                  iconUrl={switchIcon}
                  iconClass="switch"
                  onClick={darkToggle}/>
              </div>
              
              <div className="slider">
                <input 
                  type="range" 
                  min="1" 
                  max="100" 
                  onChange={sliderChange}
                  value=""/>                  
               </div>
              
              <div className="source">

                <img src={Info} alt="info icon"/>
                <p>
                  Sourced by <a 
                              href="https://nibss-plc.com.ng/"
                              target="_blank"
                              rel="noreferrer noopener"
                                >
                                NIBBS
                              </a>
                </p>

              </div>

            </div>            
        </div>
          

          <div className="range_minimal">
            <div className="range_width"></div>
          </div>
          {/* YET TO BE STYLED */}
          
          
          <div className="intervals">
            <span className="now">Daily</span>
            <span>Monthly</span>
            <span>Yearly</span>
          </div>

        </div>
    );
  }

export default Card