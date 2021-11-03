import React from 'react';
import {
  MintContainer,
  BuyButton,
  BuyTextContainer,
  BuyNow,
  EthPrice,
} from './HeroElements';
import LampIncrementer from './LampIncrementer';

function MintButton({
  mint,
  lampCount,
  lampPrice,
  incrementLampCount,
  decrementLampCount
}) {
  return (
      <MintContainer>
        <LampIncrementer
          lampCount={lampCount}
          incrementLampCount={incrementLampCount}
          decrementLampCount={decrementLampCount}
        />
        <BuyButton onClick={(e) => {
          e.preventDefault();
          mint()}}>
          <BuyTextContainer>
          <div>
            <EthPrice>TOTAL:</EthPrice>
            <EthPrice>{lampPrice} ETH</EthPrice>
          </div>
          <BuyNow>BUY NOW</BuyNow>
          </BuyTextContainer>
        </BuyButton>
      </MintContainer>
  );
}

export default MintButton;
