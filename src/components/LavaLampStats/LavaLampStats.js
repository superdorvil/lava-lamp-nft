import React from 'react';
import {
  Container,
  InnerContainer,
  Title,
  DataBlockContainer,
  AttributeImage,
} from './Elements';
import DataBlock from '../DataBlock';
import {COLORS} from '../../constants';
const {
  Lavalien,
  Halo,
  Kitty,
} = require('../../../src/images/LavaLampGenerator/layers/attributes');

function LavaLampStats() {
  const openTag = '<svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">';
  const closeTag = '</svg>';
  const lavalien = openTag + Lavalien() + closeTag;
  

  return (
    <Container id="STATS">
      <Title>STATS</Title>
      <InnerContainer>
        <DataBlockContainer>
          <DataBlock
            lightColor={COLORS.light_blue}
            darkColor={COLORS.dark_blue}
            data="1000"
            units="REMAINING LAMPS"
          />
          <DataBlock
            lightColor={COLORS.light_yellow}
            darkColor={COLORS.dark_yellow}
            data="300"
            units="BURNED LAMPS"
          />
          <DataBlock
            lightColor={COLORS.light_red}
            darkColor={COLORS.dark_red}
            data="0.03"
            units="ETH PER SHARE"
          />
        </DataBlockContainer>
        <AttributeImage src={`data:image/svg+xml;base64,${btoa(lavalien)}`} />
      </InnerContainer>
    </Container>
  );
}

export default LavaLampStats;
