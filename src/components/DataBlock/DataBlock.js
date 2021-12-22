import React from 'react';
import {
  Data,
  Container,
  DataUnit,
} from './HeroElements';
import {COLORS} from '../../constants/colors';

function DataBlock({lightColor, darkColor, data, units}) {
  return (
    <Container lightColor={lightColor} darkColor={darkColor}>
      <Data>{data}</Data>
      <DataUnit>{units}</DataUnit>
    </Container>
  );
}

export default DataBlock;
