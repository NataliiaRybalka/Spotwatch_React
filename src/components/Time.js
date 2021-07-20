import React from 'react';
import './Time.css';

export default function Time(props) {
  const {hour, min, sec} = props;

  return (
    <div className='time'>
      {hour <= 9 ? ('0' + hour) : hour}
      :
      {min <= 9 ? ('0' + min) : min}
      :
      {sec <= 9 ? ('0' + sec) : sec}
    </div>
  )
}
