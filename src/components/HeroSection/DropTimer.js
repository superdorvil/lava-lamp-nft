import React from 'react';
import {
  DropTime,
  DropContainer,
  DropItem,
  DropUnit,
} from './HeroElements';
import {COLORS} from '../../constants/colors';

function DropTimer() {
  return (
    <DropContainer>
      <DropItem color={COLORS.dark_yellow}>
        <DropTime>30</DropTime>
        <DropUnit>DAYS</DropUnit>
      </DropItem>
      <DropItem color={COLORS.dark_green}>
        <DropTime>12</DropTime>
        <DropUnit>HRS</DropUnit>
      </DropItem>
      <DropItem color={COLORS.dark_blue}>
        <DropTime>52</DropTime>
        <DropUnit>MINS</DropUnit>
      </DropItem>
      <DropItem color={COLORS.dark_orange}>
        <DropTime>01</DropTime>
        <DropUnit>SECS</DropUnit>
      </DropItem>
    </DropContainer>
  );
}

export default DropTimer;
