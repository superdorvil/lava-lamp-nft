import React from 'react';
import {
  Container,
  Description,
  Description2,
  SerialImage,
} from './Elements';
import serialNum from './../../images/SerialNumbersImage.svg';

function SerialNumbers() {
  return(
    <Container>
      <SerialImage src={serialNum} />
      <Description>YOUR <Description2>LAVA LAMP'S</Description2> UNIQUE COLORS ARE TIED TO THEIR SERIAL NUMBERS</Description>
    </Container>
  );
}

export default SerialNumbers;
