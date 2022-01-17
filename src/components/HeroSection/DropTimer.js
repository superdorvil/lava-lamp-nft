import React from 'react';
import DataBlock from '../DataBlock';
import {COLORS} from '../../constants';
import {DropContainer} from './Elements';

function DropTimer({days, hours, minutes, seconds}) {
console.log('drop timer');
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
        timeData={true}
      />
      <DataBlock
        lightColor={COLORS.light_green}
        darkColor={COLORS.dark_green}
        data={doubleDigits(hours)}
        units="HRS"
        timeData={true}
      />
      <DataBlock
        lightColor={COLORS.light_blue}
        darkColor={COLORS.dark_blue}
        data={doubleDigits(minutes)}
        units="MINS"
        timeData={true}
      />
      <DataBlock
        lightColor={COLORS.light_orange}
        darkColor={COLORS.dark_orange}
        data={doubleDigits(seconds)}
        units="SECS"
        timeData={true}
      />
    </DropContainer>
  );
}

export default DropTimer;
