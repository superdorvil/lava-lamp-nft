import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Title,
  DataBlockContainer,
  AttributeImage,
} from './Elements';
import DataBlock from '../DataBlock';
import {COLORS} from '../../constants';
import lavalien from '../../images/Lavalien.svg';

function LavaLampStats() {
  const lamps = useSelector((state) => state.lamps);

  return (
    <Container id="STATS">
      <Title>STATS</Title>
      <DataBlockContainer>
        <DataBlock
          lightColor={COLORS.light_blue}
          darkColor={COLORS.dark_blue}
          data={lamps.remainingLamps}
          units="REMAINING LAMPS"
        />
        <DataBlock
          lightColor={COLORS.light_yellow}
          darkColor={COLORS.dark_yellow}
          data={lamps.lampsBurned}
          units="BURNED LAMPS"
        />
        {/*<DataBlock
          lightColor={COLORS.light_red}
          darkColor={COLORS.dark_red}
          data="0.03"
          units="ETH PER SHARE"
        />*/}
      </DataBlockContainer>
      <AttributeImage src={lavalien} />
    </Container>
  );
}

export default LavaLampStats;
