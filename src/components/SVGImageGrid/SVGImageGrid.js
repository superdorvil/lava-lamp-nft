import React from 'react';
import {SVGContainer} from './ImageGridElements';
import LavaLampImages from './LavaLampImages';
import LavaLamp from './LavaLamp';

import {generateNRandomLavaLamps} from '../../LavaLampGenerator';

function SVGImageGrid() {
  const lavaLamps = generateNRandomLavaLamps({n: 49});

  return (
    <SVGContainer>
      <LavaLampImages
        lamp1={lavaLamps[0]}
        lamp2={lavaLamps[1]}
        lamp3={lavaLamps[2]}
        lamp4={lavaLamps[3]}
        lamp5={lavaLamps[4]}
        lamp6={lavaLamps[5]}
        lamp7={lavaLamps[6]}
      />
      <LavaLampImages
        lamp1={lavaLamps[7]}
        lamp2={lavaLamps[8]}
        lamp3={lavaLamps[9]}
        lamp4={lavaLamps[10]}
        lamp5={lavaLamps[11]}
        lamp6={lavaLamps[12]}
        lamp7={lavaLamps[13]}
      />
      <LavaLampImages
        lamp1={lavaLamps[14]}
        lamp2={lavaLamps[15]}
        lamp3={lavaLamps[16]}
        lamp4={lavaLamps[17]}
        lamp5={lavaLamps[18]}
        lamp6={lavaLamps[19]}
        lamp7={lavaLamps[20]}
      />
      <LavaLampImages
        lamp1={lavaLamps[21]}
        lamp2={lavaLamps[22]}
        lamp3={lavaLamps[23]}
        lamp4={lavaLamps[24]}
        lamp5={lavaLamps[25]}
        lamp6={lavaLamps[26]}
        lamp7={lavaLamps[27]}
      />
      <LavaLampImages
        lamp1={lavaLamps[28]}
        lamp2={lavaLamps[29]}
        lamp3={lavaLamps[30]}
        lamp4={lavaLamps[31]}
        lamp5={lavaLamps[32]}
        lamp6={lavaLamps[33]}
        lamp7={lavaLamps[34]}
      />
      <LavaLampImages
        lamp1={lavaLamps[35]}
        lamp2={lavaLamps[36]}
        lamp3={lavaLamps[37]}
        lamp4={lavaLamps[38]}
        lamp5={lavaLamps[39]}
        lamp6={lavaLamps[40]}
        lamp7={lavaLamps[41]}
      />
      <LavaLampImages
        lamp1={lavaLamps[42]}
        lamp2={lavaLamps[43]}
        lamp3={lavaLamps[44]}
        lamp4={lavaLamps[45]}
        lamp5={lavaLamps[46]}
        lamp6={lavaLamps[47]}
        lamp7={lavaLamps[48]}
      />
    </SVGContainer>
  );
}

export default SVGImageGrid;
