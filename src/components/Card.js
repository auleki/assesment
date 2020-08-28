import React, { useState, useEffect } from 'react';
import Moon from '../moon.svg';
import Mode from '../mode.svg';
import ModeDark from '../mode-dark.svg';
import Sun from '../sun.svg';
import Info from '../info.svg';

const Card = () => {

  const [isDark, setIsDark] = useState(false)
  const [mode, setMode] = useState("")
  // const [classState, setClassState] = useState("card light minimal")
  const allModes = ["full", "minimal", "compact"]
  

  // const classArray = ['card', 'dark', 'full']

  const switchClass = isDark ? "dark": "light"

  useEffect(() => {
    const modeIndex = Math.floor(Math.random() * allModes.length)
    console.log(modeIndex);
    let currentMode = allModes[modeIndex]
    setMode(currentMode)
    
  }, [])

  const switchMode = () => {
    // classArray.pop()
    // classArray.push(mode[1])
    // classString = classArray.join(" ")
    // console.log(classString);
    // setClassState(classString)
    
  }

  const darkToggle = () => {
    setIsDark(!isDark)
  }
  
  return (      
        <div className={`card ${switchClass} ${mode}`}>
        {/* // <div className={`card`}> */}
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
                  {/* <img 
                    src={Moon} 
                    onClick={switchMode}
                    alt="moon"/> */}
                    <button
                      onClick={switchMode}>
                      MODE
                    </button>
              </div>

              <div className="switch">
                  {/* <img 
                    src={Moon} 
                    onClick={darkToggle}
                    alt="moon switch"/> */}
                    <button
                      onClick={darkToggle}>
                      SWITCH
                    </button>
              </div>
            </div>
            
            <div className="slider">
              <input type="range" min="1" max="100" value="50"/>
            </div>
            
            {/* <p className="source">Source <span>NIBBS</span></p> */}
          </div>

          <div className="range_minimal">
            <div className="range_width"></div>
          </div>
          {/* YET TO BE STYLED */}
          
          <div className="info">
            <img src={Info} alt="info icon"/>
            <p className="info">
              Sourced by NIBBS
            </p>

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