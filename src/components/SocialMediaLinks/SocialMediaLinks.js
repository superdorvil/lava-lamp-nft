import React from "react";
import { Container, LinkContainer } from './Elements';
import Icon from '../Icon';
import {ICONS} from '../../constants';

function SocialMediaLinks({size}) {
  return (
    <Container>
      <LinkContainer pad={size / 4} href="https://twitter.com/LavaLampsNFT">
        <Icon
          icon={ICONS.TWITTER}
          iconColor='#FFFFFF'
          width={size}
          height={size}
          highlight={true}
        />
      </LinkContainer>
      <LinkContainer pad={size / 4} href="/opensea">
        <Icon
          icon={ICONS.OPENSEA}
          iconColor='#FFFFFF'
          width={size}
          height={size}
          highlight={true}
        />
      </LinkContainer>
      <LinkContainer pad={size / 4} href="https://discord.gg/kHjfv5t2Ns">
        <Icon
          icon={ICONS.DISCORD}
          iconColor='#FFFFFF'
          width={size}
          height={size}
          highlight={true}
        />
      </LinkContainer>
    </Container>
  );
}

export default SocialMediaLinks;

//<LinkContainer href="https://testnets.opensea.io/collection/lavalamp-pcugi5qe4j">
