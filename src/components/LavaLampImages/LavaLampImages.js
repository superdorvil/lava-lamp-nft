import React from 'react';
import LavaLamp from './LavaLamp';
import { ListContainer } from './LavaLampElements';
import alienLamp from '../../images/AlienLamp.jpg';
import angelLamp from '../../images/AngelLamp.png';
import normalLamp1 from '../../images/NormalLamp1.jpg';
import normalLamp2 from '../../images/NormalLamp2.png';
import rocketLamp from '../../images/RocketLamp.png';

function LavaLampImages() {
  return (
    <ListContainer>
      <LavaLamp lamp={alienLamp} />
      <LavaLamp lamp={angelLamp} />
      <LavaLamp lamp={normalLamp1} />
      <LavaLamp lamp={normalLamp2} />
      <LavaLamp lamp={rocketLamp} />
    </ListContainer>
  );
}

export default LavaLampImages;
