import React from 'react';
import {Title, Container} from './Elements';
import AccordionComponent from '../AccordionComponent';
import Data from './Data';
function LavaLampFaqs() {

  return (
    <Container id='FAQS'>
      <Title>FAQS</Title>
      <AccordionComponent data={Data} />
    </Container>
  );
}

export default LavaLampFaqs;
