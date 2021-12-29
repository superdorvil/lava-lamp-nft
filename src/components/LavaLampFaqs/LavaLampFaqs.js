import React from 'react';
import {Title, Container} from './Elements';
import AccordionComponent from '../AccordionComponent';

function LavaLampFaqs() {
  const triggers = [
    "WHAT IS LAVA LAMPS NFT?",
    "WHAT IS THE LAVA POOL?",
    "HOW DOES VOTING WORK?",
    "WHY WOULDN'T WE JUST VOTE TO DISTRUBUTE THE BITCOIN AFTER YEAR 1?",
    "WHAT HAPPENS NEXT?",
  ];
  const descriptions = [
    "Lava Lamps NFT is a collection of 7,979 revamped NFT’s plus an additional 278 NFT’s from our original project. Each is a unique digital collectible stored on the Ethereum blockchain as an ERC-721 token. Your Lava Lamp NFT doubles as a share in the Lava Pool.",
    "WHAT IS THE LAVA POOL?",
    "HOW DOES VOTING WORK?",
    "WHY WOULDN'T WE JUST VOTE TO DISTRUBUTE THE BITCOIN AFTER YEAR 1?",
    "WHAT HAPPENS NEXT?",
  ];
  return (
    <Container id='FAQS'>
      <Title>FAQS</Title>
      <AccordionComponent triggers={triggers} descriptions={descriptions} />
    </Container>
  );
}

export default LavaLampFaqs;
