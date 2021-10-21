import React from 'react';
import {
  InfoContainer,
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
} from './InfoSectionElements';

/*
FIXME:: Use the div display inline property to fix the styling of this ish
*/
function InfoSection ({info, buttonDescription}) {
  const infoList = [];
  if (info.info) {
    info.info.forEach((data, i) => {
      infoList.push(
        <InfoContainer>
          <BoldText>{data.boldText}</BoldText>
          <ItalicsText>{data.italicsText}</ItalicsText>
          <NormalText>{data.normalText}</NormalText>
        </InfoContainer>
      )
    });
  }

  console.log(infoList);

  return (
    <div>
      <Container>
        <Image src={info.img} />
        <TextContainer>
          <Header>{info.header}</Header>
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
