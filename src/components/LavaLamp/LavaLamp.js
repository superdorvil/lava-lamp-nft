import React from 'react';
import { LampImage } from './Elements';

function LavaLamp ({src, size}) {
  return (
    <LampImage src={`data:image/svg+xml;base64,${btoa(src)}`} size={size} />
  );
}

export default LavaLamp;
