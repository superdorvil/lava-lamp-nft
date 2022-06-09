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
  const initialPow = 17085;
  const powRate = 155;
  const initialDate = new Date(2022, 3, 14, 7);
  const dayInMilli = 1000*60*60*24;
  const [pow, setPow] = useState((Math.floor((new Date() - initialDate) / dayInMilli) * powRate) + initialPow);

  const updatePow = () => {
    setPow((Math.floor((new Date() - initialDate) / dayInMilli ) * powRate) + initialPow);
  }

  //useInterval(() => updatePow(), 300000);

  return(
    <LavaPoolBackground>
      <Title>POW TRACKER</Title>
      <CenterItems>
        <DataBlock
          lightColor="#000000"
          darkColor="#000000"
          data={24106}
          units="POW"
          pow={true}
        />
      </CenterItems>
    </LavaPoolBackground>
  );
}

export default LavaPool;
