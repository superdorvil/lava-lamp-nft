import React from 'react';
import {Title, Container} from './Elements';
import AccordionComponent from '../AccordionComponent';

function LavaLampFaqs() {
  const triggers = [
    "WHAT IS LAVA LAMPS NFT?",
    "WHAT IS THE LAVA POOL?",
    "HOW DOES VOTING WORK?",
    "WHY WOULDN'T WE JUST VOTE TO DISTRUBUTE THE ETHEREUM AFTER YEAR 1?",
    "WHAT HAPPENS NEXT?",
  ];
  const descriptions = [
    "Lava Lamps NFT is a collection of 7,979 revamped NFT’s plus an additional 278 NFT’s from our original project. Each is a unique digital collectible stored on the Ethereum blockchain as an ERC-721 token. Your Lava Lamp NFT doubles as a share in the Lava Pool.",
    "The Lava Pool is our way of giving back to all community members. At launch, we will use 50% of the proceeds from the sale to purchase Ethereum. This Ethereum will be held for 1 year and then voted on to be distributed to the community or held for another year. The ethereum will be held in a hardware wallet until the community votes in majority to disperse the Ethereum. Each Lava Lamp owned from our original project and our new launch will get an equal share in the Ethereum.",
    "Our original Lava Lamps have a 2:1 voting weight. Our newly launched Lava Lamps will have a 1:1 share voting weight. This is one way we are giving back to our original supporters. Voting will happen 1 year after our initial sale using Snapshot. If majority (51%) approves Ethereum distribution we will distribute at that time. If we do not reach majority (less than 51%) the Ethereum will be held for another year and the cycle will continue. This process will continue year after year until there is majority approval.",
    "This is where things get interesting! 33% of all transaction fees received on Open Sea will go towards buying additional Ethereum. An additional 33% of all transaction fees will go towards buying and burning floor Lava Lamps. This will create a deflationary supply of Lava Lamps and a rising supply of Ethereum. As a result, each Lava Lamp holder should receive a larger portion of Ethereum over time. (This is tied directly to secondary volume and is not guaranteed.) The remaining portion of transaction fees will go to the team.",
    "We currently have whitelist spots open. You can join our discord to be given a whitelist spot. This will be capped at 1000 members. Our sale will start on January 7th at 8pm and will be priced at .03 eth. It will be open to WL members for 1 hour and then public thereafter. Once live we will have a section on lavalamps.io where you can see real time data on Lava Lamps in circulation and Ethereum in the Lava Pool. Move quickly, the floor is Lava!",
  ];
  return (
    <Container id='FAQS'>
      <Title>FAQS</Title>
      <AccordionComponent triggers={triggers} descriptions={descriptions} />
    </Container>
  );
}

export default LavaLampFaqs;
