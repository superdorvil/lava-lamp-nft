import React from 'react';
import {
  LavaPoolBackground,
  Title,
  SubTitle,
  Description,
  Breakdown,
  CenterItems,
} from './Elements';

function LavaPool() {
  return(
    <LavaPoolBackground>
      <Title>LAVA POOL</Title>
      <CenterItems>
        <SubTitle>HALF THE PROCEEDS ARE USED TO PURCHASE ETHEREUM</SubTitle>
      </CenterItems>
      <CenterItems>
        <Description>After 1 year we will vote... will it be distributed to the community or held for another year?!</Description>
      </CenterItems>
      <CenterItems>
        <Breakdown>BREAKDOWN</Breakdown>
      </CenterItems>
    </LavaPoolBackground>
  );
}

export default LavaPool;
