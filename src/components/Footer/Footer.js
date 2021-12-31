import React from "react";
import {
  Container,
  OurTeamContainer,
  Header,
  Text,
} from './Elements';
import SocialMediaLinks from '../SocialMediaLinks';

function Footer() {
  return (
    <Container>
      <SocialMediaLinks size={3.125} />
      <OurTeamContainer>
        <Header>OUR TEAM</Header>
        <Text>{"Founder: @ReignofWain"}</Text>
        <Text>{"Graphic Design: @KateHurd_Design"}</Text>
        <Text>{"Dev: @superdorvil"}</Text>
        <Text>{"Dev: @nwain24"}</Text>
      </OurTeamContainer>
    </Container>
  );
}

export default Footer;
