import React from 'react';
import {
  Data,
  Container,
  DataUnit,
} from './Elements';

function DataBlock({lightColor, darkColor, data, units}) {
  return (
    <Container lightColor={lightColor} darkColor={darkColor}>
      <Data>{data}</Data>
      <DataUnit>{units}</DataUnit>
    </Container>
  );
}

export default DataBlock;
