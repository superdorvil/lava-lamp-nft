import React from "react";
import { Container, LinkContainer } from './Elements';
import Icon from '../Icon';
import {ICONS} from '../../constants';

function SocialMediaLinks() {
  return (
    <Container>
      <LinkContainer href="https://twitter.com/LavaLampsNFT">
        <Icon
          icon={ICONS.TWITTER}
          iconColor='#FFFFFF'
          width={64}
          height={64}
          highlight={true}
        />
      </LinkContainer>
      <LinkContainer href="/opensea">
        <Icon
          icon={ICONS.OPENSEA}
          iconColor='#FFFFFF'
          width={64}
          height={64}
          highlight={true}
        />
      </LinkContainer>
      <LinkContainer href="https://discord.gg/kHjfv5t2Ns">
        <Icon
          icon={ICONS.DISCORD}
          iconColor='#FFFFFF'
          width={64}
          height={64}
          highlight={true}
        />
      </LinkContainer>
    </Container>
  );
}

export default SocialMediaLinks;

//<LinkContainer href="https://testnets.opensea.io/collection/lavalamp-pcugi5qe4j">
