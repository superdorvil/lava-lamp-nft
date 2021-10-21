import React from "react";
import {
  Container,
  OurTeamContainer,
  ButtonContainer,
  ButtonWrapper,
  Header,
  Text,
} from './FooterElements';
import Button from '../Button';

function Footer() {
  return (
    <Container>
      <OurTeamContainer>
        <Header>OUR TEAM</Header>
        <Text>{"∙ Founder: @ReignofWain"}</Text>
        <Text>{"∙ Graphic Design: @KateHurd_Design"}</Text>
        <Text>{"∙ Dev: @superdorvil"}</Text>
        <Text>{"∙ Dev: @nwain24"}</Text>
      </OurTeamContainer>
      <ButtonContainer>
        <ButtonWrapper>
          <Button description="COMMUNITY CONTEST" color={'#21F6EA'} />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button description="LAVASIDE CHAT" color={'#71FF30'} />
        </ButtonWrapper>
      </ButtonContainer>
    </Container>
  );
}

export default Footer;
