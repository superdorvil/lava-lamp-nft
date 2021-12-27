import React from 'react';
import {Container, Description, SerialImage} from './Elements';
import serialNum from './../../images/SerialNumbersImage.svg';

function SerialNumbers() {
  return(
    <Container>
      <SerialImage src={serialNum} />
      <Description>YOUR LAVA LAMP'S UNIQUE COLORS ARE TIED TOTHEIR SERIAL NUMBERS</Description>
    </Container>
  );
}

export default SerialNumbers;
