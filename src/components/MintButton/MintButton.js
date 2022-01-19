import React, {useState} from 'react';
import {
  MintContainer,
  MintText,
  BuyTextContainer,
  BuyButton,
  EthPrice,
  EthPriceHover,
} from './Elements';
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
              <MintText>MINT</MintText>
              </BuyTextContainer>
            )
          }
        </BuyButton>
      </MintContainer>
  );
}

export default MintButton;
