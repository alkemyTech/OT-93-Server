/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { useTimer } from 'react-timer-hook';

function Timer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,

  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div style={{ textAlign: 'center' }}>

      <h3>¡Falta {days} días y {hours} horas para que termine la campaña! </h3>

      <div style={{ fontSize: '72px' }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}

export default Timer;
