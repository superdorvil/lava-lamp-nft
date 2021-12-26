import React from 'react';
import LavaLamp from '../LavaLamp';
import { ListContainer } from './Elements';

function LavaLampImages({lamp1,lamp2,lamp3, lamp4, lamp5}) {
  return (
    <ListContainer>
      <LavaLamp src={lamp1} size={15} />
      <LavaLamp src={lamp2} size={15} />
      <LavaLamp src={lamp3} size={15} />
      <LavaLamp src={lamp4} size={15} />
      <LavaLamp src={lamp5} size={15} />
    </ListContainer>
  );
}

export default LavaLampImages;
