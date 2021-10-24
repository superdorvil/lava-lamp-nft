import React from 'react';
import { BuyButton, BuyTextContainer, BuyNow, EthPrice } from './HeroElements';

function BuyLampButton({mint}) {
  return (
      <BuyButton onClick={(e) => {mint()}}>
        <BuyTextContainer>
        <div>
          <EthPrice>TOTAL:</EthPrice>
          <EthPrice>.06 ETH</EthPrice>
        </div>
        <BuyNow>BUY NOW</BuyNow>
        </BuyTextContainer>
      </BuyButton>
  );
}

export default BuyLampButton;
