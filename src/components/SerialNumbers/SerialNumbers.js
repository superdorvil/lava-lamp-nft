import React from 'react';
import {Container, Description, SerialImage} from './Elements';
import serialNumbers from '../../images/SerialNumbers.svg';

function SerialNumbers() {
  return(
    <Container>
      <SerialImage src={serialNumbers} />
      <Description>YOUR LAVA LAMP'S UNIQUE COLORS ARE TIED TOTHEIR SERIAL NUMBERS</Description>
    </Container>
  );
}

export default SerialNumbers;
