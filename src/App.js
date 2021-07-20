import React, { useState, useEffect } from "react";
  
export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  
  useEffect(() => {
    let interval = null;
  
    if (isActive) {
      interval = setInterval(() => {
        // setTime((time) => time + 1);

        setSec((sec) => sec + 1);
        console.log(sec);
        if (sec > 10) {
          setSec(0);
          setMin(min => min + 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);
  
  const onStart = () => {
    setIsActive(true);
  };
  
  const onStop = () => {
    setIsActive(false);
    // setTime(0);
    setSec(0);
    setMin(0);
    setHour(0);
  };

  const onWait = () => {
    setIsActive(false);
  }
  
  const onReset = () => {
    // setTime(0);
    setSec(0);
    setMin(0);
    setHour(0);
    setIsActive(true);
  };

  return (
    <div>
      <div>
        {/* {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
        :
        {("0" + Math.floor(time / 60000)).slice(-2)}
        :
        {("0" + Math.floor(time)).slice(-2)} */}

        {hour} : {min} : {sec}
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
  