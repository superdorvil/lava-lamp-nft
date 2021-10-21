import React from 'react';
import {
  ListContainer,
  Container,
  Header,
  Image,
  Info,
} from './LampPropertiesElements';
import {
  basesInfo,
  backgroundsInfo,
  extrasInfo,
} from './Data';

function LampProperties() {
  return (
    <ListContainer>
      <Container>
        <Image src={basesInfo.img} />
        <Header>{basesInfo.header}</Header>
        <Info>{basesInfo.info}</Info>
      </Container>
      <Container>
        <Image src={backgroundsInfo.img} />
        <Header>{backgroundsInfo.header}</Header>
        <Info>{backgroundsInfo.info}</Info>
      </Container>
      <Container>
        <Image src={extrasInfo.img} />
        <Header>{extrasInfo.header}</Header>
        <Info>{extrasInfo.info}</Info>
      </Container>
    </ListContainer>
  );
};

export default LampProperties;
