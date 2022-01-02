import React from "react";
import {
  Container,
  OurTeamContainer,
  OurTeam,
  TeamMember,
} from './Elements';
import SocialMediaLinks from '../SocialMediaLinks';

function Footer() {
  return (
    <Container>
      <SocialMediaLinks />
      <OurTeamContainer>
        <OurTeam>OUR TEAM</OurTeam>
        <TeamMember>{"Founder: @ReignofWain"}</TeamMember>
        <TeamMember>{"Graphic Design: @KateHurd_Design"}</TeamMember>
        <TeamMember>{"Dev: @superdorvil"}</TeamMember>
        <TeamMember>{"Dev: @nwain24"}</TeamMember>
      </OurTeamContainer>
    </Container>
  );
}

export default Footer;
