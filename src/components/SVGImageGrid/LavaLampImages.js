import React from 'react';
import LavaLamp from './LavaLamp';
import { ListContainer } from './ImageGridElements';

function LavaLampImages({lamp1,lamp2,lamp3, lamp4, lamp5, lamp6, lamp7}) {
  return (
    <ListContainer>
      <LavaLamp lamp={lamp1} />
      <LavaLamp lamp={lamp2} />
      <LavaLamp lamp={lamp3} />
      <LavaLamp lamp={lamp4} />
      <LavaLamp lamp={lamp5} />
      <LavaLamp lamp={lamp6} />
      <LavaLamp lamp={lamp7} />
    </ListContainer>
  );
}

export default LavaLampImages;
