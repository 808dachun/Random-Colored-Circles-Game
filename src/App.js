import React from 'react';
import logo from './logo.svg';
import Dice from './Dice.js';
import './App.css';



function App() {
  return (
    <div className="App">
      <Dice numDice={4} maxVal={6} />
    </div>
  );
}

export default App;
