import React from 'react';
import LavaLamp from '../LavaLamp';
import { LampContainer } from './Elements';

function LavaLampImages({lamp1,lamp2,lamp3, lamp4, lamp5,lamp6, lamp7}) {
  return (
    <LampContainer>
      <LavaLamp src={lamp1} size={15} />
      <LavaLamp src={lamp2} size={15} />
      <LavaLamp src={lamp3} size={15} />
      <LavaLamp src={lamp4} size={15} />
      <LavaLamp src={lamp5} size={15} />
      <LavaLamp src={lamp6} size={15} />
      <LavaLamp src={lamp7} size={15} />
    </LampContainer>
  );
}

export default LavaLampImages;
