import React from "react";
import { LinkContainer, LinkButtonWrapper } from './HeroElements';
import SocialIcon from '../SocialIcon';
import {ICONS} from '../../constants/icons';

function SocialMediaLinks() {
  return (
    <LinkContainer>
      <LinkButtonWrapper href="https://twitter.com/LavaLampsNFT">
        <SocialIcon icon={ICONS.TWITTER} iconColor='#FFFFFF' />
      </LinkButtonWrapper>
      <LinkButtonWrapper href="/opensea">
        <SocialIcon icon={ICONS.OPENSEA} iconColor='#FFFFFF' />
      </LinkButtonWrapper>
      <LinkButtonWrapper href="https://discord.gg/kHjfv5t2Ns">
        <SocialIcon icon={ICONS.DISCORD} iconColor='#FFFFFF' />
      </LinkButtonWrapper>
    </LinkContainer>
  );
}

export default SocialMediaLinks;

//<LinkButtonWrapper href="https://testnets.opensea.io/collection/lavalamp-pcugi5qe4j">
