import React from 'react';
import {
  LampIncrementerContainer,
  LampText,
  LampCount,
  LampCountContainer,
  IncrementButton,
} from './HeroElements';
import Icon from '../Icon';
import {ICONS} from '../../constants/icons';

function LampIncrementer({
  lampCount,
  incrementLampCount,
  decrementLampCount
}) {
  return (
    <LampIncrementerContainer>
      <IncrementButton
        onClick={(e) => {
          e.preventDefault();
          decrementLampCount()}}
        left
      >
        <Icon icon={ICONS.MINUS} iconColor='#FABE09' size={32} />
      </IncrementButton>
      <LampCountContainer>
        <LampCount>{lampCount < 10 ? '0' + lampCount : lampCount}</LampCount>
        <LampText>LAMPS</LampText>
      </LampCountContainer>
      <IncrementButton
        onClick={(e) => {
          e.preventDefault();
          incrementLampCount()}}
        right
      >
        <Icon icon={ICONS.PLUS} iconColor='#FABE09' size={32} />
      </IncrementButton>
    </LampIncrementerContainer>
  );
}

export default LampIncrementer;
