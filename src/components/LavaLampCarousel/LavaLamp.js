import React from 'react';
import { LampContainer, LampImage } from './LavaLampElements';

function LavaLamp ({lamp}) {
  return (
      <LampContainer>
        <LampImage src={lamp} />
      </LampContainer>
  );
}

export default LavaLamp;
