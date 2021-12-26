import React from 'react';
import {Container, Title, DataBlockContainer} from './Elements';
import DataBlock from '../DataBlock';
import {COLORS} from '../../constants';

function LavaLampStats() {
  return (
    <Container>
      <Title>STATS</Title>
      <DataBlockContainer>
      <DataBlock
        lightColor={COLORS.light_blue}
        darkColor={COLORS.dark_blue}
        data="40%"
        units="REMAINING LAMPS"
      />
      <DataBlock
        lightColor={COLORS.light_yellow}
        darkColor={COLORS.dark_yellow}
        data="10%"
        units="BURNED LAMPS"
      />
      <DataBlock
        lightColor={COLORS.light_green}
        darkColor={COLORS.dark_green}
        data="5%"
        units="CRYPTO PER SHARE"
      />
      </DataBlockContainer>
    </Container>
  );
}

export default LavaLampStats;
