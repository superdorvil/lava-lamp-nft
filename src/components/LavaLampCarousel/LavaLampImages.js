import React from 'react';
import LavaLamp from './LavaLamp';
import { ListContainer } from './LavaLampElements';

function LavaLampImages({lamp1,lamp2,lamp3, lamp4, lamp5}) {
  return (
    <ListContainer>
      <LavaLamp lamp={lamp1} />
      <LavaLamp lamp={lamp2} />
      <LavaLamp lamp={lamp3} />
      <LavaLamp lamp={lamp4} />
      <LavaLamp lamp={lamp5} />
    </ListContainer>
  );
}

export default LavaLampImages;
