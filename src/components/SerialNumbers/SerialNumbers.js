import React from 'react';
import {Container, Description, SerialImage} from './Elements';
import serialNumbersSVG from '../../images/SerialNumbers.svg';

function SerialNumbers() {
  return(
    <Container>
      <SerialImage src={serialNumbersSVG} />
      <Description>YOUR LAVA LAMP'S UNIQUE COLORS ARE TIED TOTHEIR SERIAL NUMBERS</Description>
    </Container>
  );
}

export default SerialNumbers;
