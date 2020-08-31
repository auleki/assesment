import React, { useState, useEffect } from 'react';
import Moon from '../moon.svg';
import Mode from '../mode.svg';
import ModeDark from '../mode-dark.svg';
import Sun from '../sun.svg';
import Info from '../info.svg';
import IconButton from './IconButton';
import Stats from './Stats';
import Slider from './Slider';
import Source from './Source';



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

  // STATE VARIABLES
  const statTitle = 'POS FAILURE RATE';
  const statRate = "60%";
  const changeRate = "8%"
  const url = "https://nibss-plc.com.ng/"
  const sourceText = "NIBBS"
  

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

          <Stats 
            title={statTitle}
            rate={statRate}
            change={changeRate}/>
          

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

              <Slider sliderChange={sliderChange} />         
              
              <Source 
                source={sourceText} 
                url={url}
                Info={Info}
                />
            </div>            
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