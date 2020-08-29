import React from 'react';
import Card from './components/Card';
import './App.sass'


const App = () => {
  const allModes = ["full", "minimal", "compact", "full"];
  const darkMode = false

    return (
      <div className="container">
        <Card cardState={allModes} switchState={darkMode}/>
      </div>
    );
  }

export default App