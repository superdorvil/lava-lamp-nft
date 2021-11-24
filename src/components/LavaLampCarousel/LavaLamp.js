import React from 'react';
import { LampContainer, LampImage } from './LavaLampElements';

function LavaLamp ({lamp}) {
  return (
      <LampContainer>
        <LampImage src={`data:image/svg+xml;base64,${btoa(lamp)}`} />
      </LampContainer>
  );
}

export default LavaLamp;
