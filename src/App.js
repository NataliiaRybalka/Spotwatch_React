import React, { useState, useEffect } from "react";
  
export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  
  useEffect(() => {
    let interval = null;
  
    if (isActive) {
      interval = setInterval(() => {
        setSec((sec) => sec + 1);
        if (sec === 59) {
          setSec(0);
          setMin(min => min + 1);
        }
        if (min === 59 && sec === 59) {
          setMin(0);
          setHour(hour => hour + 1);
        }
        if (hour === 23 && min === 59 && sec === 59) {
          setHour(0);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, sec, min, hour]);
  
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
    <div>
      <div>
        {/* {hour} : {min} : {sec} */}
        {hour <= 9 ? ('0' + hour) : hour}
        :
        {min <= 9 ? ('0' + min) : min}
        :
        {sec <= 9 ? ('0' + sec) : sec}

      </div>

      <div>
        {!isActive ? (
          <button onClick={onStart}>Start</button>
        ) : (
          <button onClick={onStop}>Stop</button>
        )}
        <button onClick={onWait}>Wait</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
}
  