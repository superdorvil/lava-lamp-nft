import React from 'react';
import LavaLamp from '../LavaLamp';
import { Container } from './Elements';

function LavaLampImages({lamp1,lamp2,lamp3, lamp4, lamp5,lamp6, lamp7}) {
  return (
    <Container>
      <LavaLamp src={lamp1} size={14.2857} />
      <LavaLamp src={lamp2} size={14.2857} />
      <LavaLamp src={lamp3} size={14.2857} />
      <LavaLamp src={lamp4} size={14.2857} />
      <LavaLamp src={lamp5} size={14.2857} />
      <LavaLamp src={lamp6} size={14.2857} />
      <LavaLamp src={lamp7} size={14.2857} />
    </Container>
  );
}

export default LavaLampImages;
