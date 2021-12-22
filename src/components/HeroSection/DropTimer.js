import React from 'react';
import DataBlock from '../DataBlock';
import {COLORS} from '../../constants';
import {DropContainer} from './HeroElements';

function DropTimer({days, hours, minutes, seconds}) {
  const doubleDigits = (time) => {
    return time < 10 ? '0' + time : time;
  };

  return (
    <DropContainer>
      <DataBlock
        lightColor={COLORS.light_yellow}
        darkColor={COLORS.dark_yellow}
        data={doubleDigits(days)}
        units="DAYS"
      />
      <DataBlock
        lightColor={COLORS.light_green}
        darkColor={COLORS.dark_green}
        data={doubleDigits(hours)}
        units="HRS"
      />
      <DataBlock
        lightColor={COLORS.light_blue}
        darkColor={COLORS.dark_blue}
        data={doubleDigits(minutes)}
        units="MINS"
      />
      <DataBlock
        lightColor={COLORS.light_orange}
        darkColor={COLORS.dark_orange}
        data={doubleDigits(seconds)}
        units="SECS"
      />
    </DropContainer>
  );
}

export default DropTimer;
