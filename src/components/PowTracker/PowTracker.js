import React, { useEffect, useState, useRef } from 'react';
import {
  LavaPoolBackground,
  Title,
  CenterItems,
} from './Elements';
import DataBlock from '../DataBlock';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
   useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function LavaPool() {
  const [pow, setPow] = useState(0);

  const updatePow = () => {
    const now = new Date();
    const initialPow = new Date(2022, 1, 10, 19, 15, 0, 0);
    const powUpdateRate = 530000;
    const pow = (now - initialPow) / powUpdateRate;

    setPow(Math.trunc(pow));
  }

  useInterval(() => updatePow(), 300000);

  return(
    <LavaPoolBackground>
      <Title>POW TRACKER</Title>
      <CenterItems>
        <DataBlock
          lightColor="#000000"
          darkColor="#000000"
          data={pow}
          units="POW"
          pow={true}
        />
      </CenterItems>
    </LavaPoolBackground>
  );
}

export default LavaPool;
