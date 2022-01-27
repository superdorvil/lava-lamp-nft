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
import alienLamp from '../../../src/images/LavaLampTraitAlien.png';

function LavaLampTraits() {
  return (
    <Container>
      <InnerContainer>
        <LavaLampContainer>
          <LavaLamp src={alienLamp} size={32} />
        </LavaLampContainer>
        <TraitContainer>
          <Title>YOUR TRAITS</Title>
          <SubTitle>EVERY LAVA LAMP IS UNIQUE</SubTitle>
          <Description>
            Generated from 8 base types with 6 colors for each, 10 backgrounds with 8 fun overlay patterns, 8 glass colors, 4 additional attributes and of course, every lamp has a unique lava color tied to it’s serial number!
          </Description>
          <SubTitle>WITH VARYING LEVELS OF RARITY</SubTitle>
        </TraitContainer>
      </InnerContainer>
      <TraitDataBlocks>
        <DataBlock
          lightColor={COLORS.light_blue}
          darkColor={COLORS.dark_blue}
          data="40%"
          units="ALIEN BASE"
        />
        <DataBlock
          lightColor={COLORS.light_yellow}
          darkColor={COLORS.dark_yellow}
          data="10%"
          units="DIAMOND"
        />
        <DataBlock
          lightColor={COLORS.light_green}
          darkColor={COLORS.dark_green}
          data="5%"
          units="SWIRL"
        />
        <DataBlock
          lightColor={COLORS.light_purple}
          darkColor={COLORS.dark_purple}
          data="7%"
          units="PURPLE"
        />
        <DataBlock
          lightColor={COLORS.light_orange}
          darkColor={COLORS.dark_orange}
          data="9%"
          units="BABY ALIEN"
        />
      </TraitDataBlocks>
    </Container>
  );
}

export default LavaLampTraits;
