import React from 'react';
import Button from '../Button';
import {
  InfoContainer,
  ButtonContainer,
  NormalText,
  BoldText,
  ItalicsText,
  Container,
  Image,
  TextContainer,
  Header,
  Description,
  Divider,
  UnorderedList,
  HeaderContainer,
} from './InfoSectionElements';
import {COLORS} from '../../constants/colors';

function InfoSection ({info, toggleModal, buttonDisabled}) {
  const infoList = [];
  if (info.info) {
    info.info.forEach((data, i) => {
      infoList.push(
        <InfoContainer key={i}>
          <BoldText>{data.boldText}</BoldText>
          <ItalicsText>{data.italicsText}</ItalicsText>
          <NormalText>{data.normalText}</NormalText>
        </InfoContainer>
      )
    });
  }

  return (
    <div>
      <Container>
        <Image src={info.img} />
        <TextContainer>
          <HeaderContainer>
            <Header>{info.header}</Header>
            {/*<ButtonContainer>
            <Button
              description="VIEW THE LAVALIST"
              lightColor={COLORS.light_orange}
              darkColor={COLORS.dark_orange}
              disabled={buttonDisabled}
              buttonPressed={toggleModal}
            />
            </ButtonContainer>*/}
          </HeaderContainer>
          <Description>{info.description}</Description>
          <UnorderedList>
            {infoList}
          </UnorderedList>
        </TextContainer>
      </Container>
      <Divider />
    </div>
  );
};

export default InfoSection;
