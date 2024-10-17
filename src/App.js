import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');
  const [showFullName, setShowFullName] = useState(false);

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  const handleEqualClick = () => {
    try {
      setDisplay(eval(display.replace('÷', '/')));
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleVelascoClick = () => {
    setShowFullName(true);
    setDisplay('Ernest Benedict Buan');
  };

  return (
    <div className="calculator-container">
      <h1>Calculator of Ernest Benedict Buan - IT3A</h1>
      <div className="calculator-display">
        {showFullName ? 'Ernest Benedict Buan' : display || '0'}
      </div>
      <div className="calculator-keys">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('÷')}>÷</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={() => handleButtonClick('C')}>C</button>
      </div>
      <button className="surname-button" onClick={handleVelascoClick}>BUAN</button>
    </div>
  );
}

export default App;
