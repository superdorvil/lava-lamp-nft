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
        <SubTitle>HALF THE PROCEEDS FROM INITIAL SALES GO INTO THE POOL!</SubTitle>
      </CenterItems>
      <CenterItems>
        <Description></Description>
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
