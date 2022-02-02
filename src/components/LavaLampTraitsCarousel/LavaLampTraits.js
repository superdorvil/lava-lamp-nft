import React from 'react';
import LavaLamp from '../LavaLamp';
import DataBlock from '../DataBlock';
import {
  Container,
  InnerContainer,
  Title,
  SubTitle,
  Description,
  TraitContainer,
  LavaLampContainer,
  TraitDataBlocks,
} from './Elements';
import {COLORS} from '../../constants';

function LavaLampTraits({traits}) {
  return (
    <Container>
      <InnerContainer>
        <LavaLampContainer>
          <LavaLamp src={traits.img} size={32} />
        </LavaLampContainer>
        <TraitContainer>
          <Title>{traits.title}</Title>
          <SubTitle>{traits.subtitle}</SubTitle>
          <Description>{traits.description}</Description>
          <SubTitle>{traits.ender}</SubTitle>
        </TraitContainer>
      </InnerContainer>
      <TraitDataBlocks>
        <DataBlock
          lightColor={COLORS.light_blue}
          darkColor={COLORS.dark_blue}
          data={traits.baseData}
          units={traits.baseUnits}
        />
        <DataBlock
          lightColor={COLORS.light_yellow}
          darkColor={COLORS.dark_yellow}
          data={traits.rarityData}
          units={traits.rarityUnits}
        />
        <DataBlock
          lightColor={COLORS.light_green}
          darkColor={COLORS.dark_green}
          data={traits.overlayData}
          units={traits.overlayUnits}
        />
        <DataBlock
          lightColor={COLORS.light_purple}
          darkColor={COLORS.dark_purple}
          data={traits.backgroundData}
          units={traits.backgroundUnits}
        />
        <DataBlock
          lightColor={COLORS.light_orange}
          darkColor={COLORS.dark_orange}
          data={traits.attributeData}
          units={traits.attributeUnits}
        />
      </TraitDataBlocks>
    </Container>
  );
}

export default LavaLampTraits;
