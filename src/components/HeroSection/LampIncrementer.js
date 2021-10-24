import React from 'react';
import {
  LampIncrementerContainer,
  LampText,
  LampCount,
  LampCountContainer,
  IconContainer,
} from './HeroElements';
import Icon from '../Icon';
import {ICONS} from '../../constants/icons';

function LampIncrementer() {
  return (
    <LampIncrementerContainer>
      <IconContainer right>
        <Icon icon={ICONS.MINUS} iconColor='#FABE09' size={32} />
      </IconContainer>
      <LampCountContainer>
        <LampCount>02</LampCount>
        <LampText>LAMPS</LampText>
      </LampCountContainer>
      <IconContainer left>
        <Icon icon={ICONS.PLUS} iconColor='#FABE09' size={32} />
      </IconContainer>
    </LampIncrementerContainer>
  );
}

export default LampIncrementer;
