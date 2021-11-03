import React, {useState} from 'react';
import {
  MintContainer,
  BuyButton,
  BuyTextContainer,
  BuyNow,
  EthPrice,
  EthPriceHover,
} from './HeroElements';
import LampIncrementer from './LampIncrementer';

function MintButton({
  mint,
  lampCount,
  lampPrice,
  incrementLampCount,
  decrementLampCount
}) {
  const [isShown, setIsShown] = useState(false);

  return (
      <MintContainer>
        <LampIncrementer
          lampCount={lampCount}
          incrementLampCount={incrementLampCount}
          decrementLampCount={decrementLampCount}
        />
        <BuyButton onClick={(e) => {
          e.preventDefault();
          mint()}}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          { isShown ? <EthPriceHover>{"PRICE: " + lampPrice + 'ETH !'}</EthPriceHover> :
            (
                <BuyTextContainer>
                <div>
                  <EthPrice>TOTAL:</EthPrice>
                  <EthPrice>{lampPrice} ETH</EthPrice>
                </div>
                <BuyNow>BUY NOW</BuyNow>
                </BuyTextContainer>
              )
          }
        </BuyButton>
      </MintContainer>
  );
}

export default MintButton;
