import React from 'react';

const Card = () => {
    return (      
        <div className="card full dark">
          <div className="stats">
            <h3>POS FAILURE RATE</h3>

            <div className="info">
              <p className="percentage">60%</p>
              <span className="change"><ion-icon name="caret-up-outline"></ion-icon> 8%</span>
            </div>

          </div>
          <div className="controls">
            <div className="actions">
              <div className="mode">MODE</div>
              <div className="switch">SWITCH</div>
            </div>
            
            
            <p className="source">Source <span>NIBBS</span></p>
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