import React from 'react';
import {
  DropTime,
  DropContainer,
  DropItem,
  DropUnit,
} from './HeroElements';
import {COLORS} from '../../constants/colors';

function DropTimer({days, hours, minutes, seconds}) {
  const doubleDigits = (time) => {
    return time < 10 ? '0' + time : time;
  };

  return (
    <DropContainer>
      <DropItem lightColor={COLORS.light_yellow} darkColor={COLORS.dark_yellow}>
        <DropTime>{doubleDigits(days)}</DropTime>
        <DropUnit>DAYS</DropUnit>
      </DropItem>
      <DropItem lightColor={COLORS.light_green} darkColor={COLORS.dark_green}>
        <DropTime>{doubleDigits(hours)}</DropTime>
        <DropUnit>HRS</DropUnit>
      </DropItem>
      <DropItem lightColor={COLORS.light_blue} darkColor={COLORS.dark_blue}>
        <DropTime>{doubleDigits(minutes)}</DropTime>
        <DropUnit>MINS</DropUnit>
      </DropItem>
      <DropItem lightColor={COLORS.light_orange} darkColor={COLORS.dark_orange}>
        <DropTime>{doubleDigits(seconds)}</DropTime>
        <DropUnit>SECS</DropUnit>
      </DropItem>
    </DropContainer>
  );
}

export default DropTimer;
