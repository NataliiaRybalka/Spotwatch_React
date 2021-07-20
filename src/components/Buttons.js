import React from 'react';
import './Buttons.css';

export default function Buttons(props) {
  const {isActive, setIsActive, setSec, setMin, setHour} = props;

  const onStart = () => {
    setIsActive(true);
  };
  
  const onStop = () => {
    setIsActive(false);
    setSec(0);
    setMin(0);
    setHour(0);
  };

  let clicks = [];

  const onWait = (event) => {
    let timeout;

    event.preventDefault();

    clicks.push(new Date().getTime());
    window.clearTimeout(timeout);

    timeout = window.setTimeout(() => {
      if (clicks.length > 1 && (clicks[1] - clicks[0]) < 300) {
        setIsActive(false);
      }
    }, 300);
  }
  
  const onReset = () => {
    if (isActive) {
      setSec(0);
      setMin(0);
      setHour(0);
      setIsActive(true);
    }
  };

  return (
    <div className='buttons'>
      {!isActive ? (
          <button onClick={onStart}>Start</button>
        ) : (
          <button onClick={onStop}>Stop</button>
        )}
        <button onClick={onWait}>Wait</button>
        <button onClick={onReset}>Reset</button>
    </div>
  )
}
