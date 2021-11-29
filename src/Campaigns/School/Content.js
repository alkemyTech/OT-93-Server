import React from 'react';
import { DUMMY_TEXT } from '../../utils/constants';
import Timer from '../../Components/Timer';

const Content = () => {
  const time = new Date('2021-12-12');
  time.setSeconds(time.getSeconds() + 600);
  return (
    <div>
        <Timer expiryTimestamp={time} />
        <p>{DUMMY_TEXT}</p>
    </div>
  );
};

export default Content;
