import React from 'react';
import {
  LavaPoolBackground,
  Title,
  SubTitle,
  Description,
  CenterItems,
} from './Elements';
import Button from '../Button';
import {STATES} from '../../constants';

function LavaPool({toggleModal}) {
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
        <Button
          description="BREAKDOWN"
          dark={true}
          buttonPressed={() => toggleModal({state: STATES.modal.lavaPoolBreakdown})}
        />
      </CenterItems>
    </LavaPoolBackground>
  );
}

export default LavaPool;
