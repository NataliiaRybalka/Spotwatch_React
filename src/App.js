import React, { useState } from 'react';

export default function App() {
  const [hh, setHH] = useState(0);
  const [mm, setMM] = useState(0);
  const [ss, setSS] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  let watch;

  if (isStarted) {
    watch = setInterval(() => startSetTime(), 1000);
  } else {
    clearInterval(watch);
  }

  const onStart = () => {
    setIsStarted(true);
  }

  const onStop = () => {
    setIsStarted(false);
  }

  const startSetTime = () => {
    setSS(ss + 1);
    if (ss > 59) {
      setMM(mm + 1 );
      setSS(0);
    }
    if (mm > 59) {
      setHH(hh + 1 );
      setMM(0);
    }
    if (hh > 23) {
      setHH(0);
    }
  }

  const onWait = () => {
    if (isStarted) {
      return setIsStarted(false);
    }

    setIsStarted(true);
  }

  const onReset = () => {
    setIsStarted(false);

    setHH(0);
    setMM(0);
    setSS(0);
  }

  return (
    <div>
      <h1> {hh} : {mm} : {ss} </h1>

      <div>
        {!isStarted ? (
          <button onClick={onStart}>Start</button>
        ) : (
          <button onClick={onStop}>Stop</button>
        )}
        <button onClick={onWait}>Wait</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  )
}
