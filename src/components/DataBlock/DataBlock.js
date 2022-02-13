import React from 'react';
import {
  Data,
  PowContainer,
  TimeContainer,
  TraitContainer,
  DataUnit,
} from './Elements';

function DataBlock({lightColor, darkColor, data, units, timeData, pow}) {
  if (pow) {
    return (
      <PowContainer lightColor={lightColor} darkColor={darkColor}>
        <Data>{data}</Data>
        <DataUnit>{units}</DataUnit>
      </PowContainer>
    );
  }

  if (timeData) {
    return (
      <TimeContainer lightColor={lightColor} darkColor={darkColor}>
        <Data>{data}</Data>
        <DataUnit>{units}</DataUnit>
      </TimeContainer>
    );
  }

  return (
    <TraitContainer lightColor={lightColor} darkColor={darkColor}>
      <Data>{data}</Data>
      <DataUnit>{units}</DataUnit>
    </TraitContainer>
  );
}

export default DataBlock;
