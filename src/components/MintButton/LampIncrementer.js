import React from 'react';
import {
  LampIncrementerContainer,
  LampText,
  LampCount,
  LampCountContainer,
  IncrementButton,
} from './ButtonElements';
import Icon from '../Icon';
import {ICONS} from '../../constants';

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
        <Icon icon={ICONS.MINUS} iconColor='#FABE09' width={32} height={32} />
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
        <Icon icon={ICONS.PLUS} iconColor='#FABE09' width={32} height={32} />
      </IncrementButton>
    </LampIncrementerContainer>
  );
}

export default LampIncrementer;
