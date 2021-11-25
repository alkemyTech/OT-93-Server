import React from 'react';
import { FiPlay } from 'react-icons/fi';
import '../../css/PlayButton.css';

const Component = () => (
    <div>
      {/* eslint-disable-next-line react/button-has-type */}
      <button className="player-btn">
        <FiPlay className="player-icn" />
      </button>
    </div>
);

export default Component;
