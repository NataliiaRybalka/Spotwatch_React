import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";
import Time from './Time';
import './Spotwatch.css';
  
export default function Spotwatch() {
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

  return (
    <div className='spotwatch'>
      <div>
        <Time 
          hour={hour}
          min={min}
          sec={sec}
        />
      </div>

      <div>
        <Buttons 
          isActive={isActive} 
          setIsActive={setIsActive} 
          setSec={setSec}  
          setMin={setMin}
          setHour={setHour}
        />
      </div>
    </div>
  );
}
  