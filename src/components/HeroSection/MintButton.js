import React from 'react';
import {
  MintContainer,
  BuyButton,
  BuyTextContainer,
  BuyNow,
  EthPrice,
} from './HeroElements';
import LampIncrementer from './LampIncrementer';

function MintButton({mint}) {
  return (
      <MintContainer>
        <LampIncrementer />
        <BuyButton onClick={(e) => {
          e.preventDefault();
          mint()}}>
          <BuyTextContainer>
          <div>
            <EthPrice>TOTAL:</EthPrice>
            <EthPrice>.06 ETH</EthPrice>
          </div>
          <BuyNow>BUY NOW</BuyNow>
          </BuyTextContainer>
        </BuyButton>
      </MintContainer>
  );
}

export default MintButton;
