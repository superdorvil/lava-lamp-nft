import React from 'react';
import {
  PresaleText,
  PresaleTime,
  PresaleContainer,
} from './Elements';

function Presale({visible, minutes, seconds}) {
  const time =
    (minutes < 10 ? '0' + minutes : minutes) +
    ' : ' +
    (seconds < 10 ? '0' + seconds : seconds) +
    ' MINUTES LEFT!!!';

  if (visible) {
    return (
      <PresaleContainer>
        <PresaleText>WHITELIST LAVAGANG MEMBER'S PRESALE</PresaleText>
        <PresaleTime>{time}</PresaleTime>
      </PresaleContainer>
    );
  }

  return <div />;
}

export default Presale;
