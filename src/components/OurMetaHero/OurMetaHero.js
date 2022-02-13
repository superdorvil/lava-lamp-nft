import React from 'react';
import {
  OuterContainer,
  Container,
  InnerContainer,
  Title,
  Description,
  SubTitle,
  MetaHero,
} from './Elements';
import metaHero1 from '../../images/MetaHero1.png';

function OurMetaHero({}) {
  return (
    <OuterContainer>
      <Container>
        <MetaHero src={metaHero1} />
        <InnerContainer>
          <Title>MEET OUR METAHERO</Title>
          <Description>
          80% of our initial sale goes to purchase Pixel Vault’s Meta Heros and stake them for $POW!  This is just the beginning, we’re planning to grow this collection... & sidekicks too 🚀
          </Description>
          <SubTitle>JOIN THE LAVA SQUAD! 👇</SubTitle>
        </InnerContainer>
      </Container>
    </OuterContainer>
  );
}

export default OurMetaHero;
