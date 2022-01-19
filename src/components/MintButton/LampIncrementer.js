import React from 'react';
import {
  LampIncrementerContainer,
  LampText,
  LampCount,
  LampCountContainer,
  IncrementButton,
} from './Elements';
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
        <Icon
          icon={ICONS.MINUS}
          iconColor='#FABE09'
          width={3.125}
          height={3.125}
          hoverColor='#FDF21B'
        />
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
        <Icon
          icon={ICONS.PLUS}
          iconColor='#FABE09'
          width={3.125}
          height={3.125}
          hoverColor='#FDF21B'
        />
      </IncrementButton>
    </LampIncrementerContainer>
  );
}

export default LampIncrementer;
