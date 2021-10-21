import React from 'react';
import { Button, MintContainer } from './MintButtonElements';

function MintButton({mint}) {
  return (
    <MintContainer>
      <Button onClick={(e) => {mint()}}>CLICK HERE TO MINT</Button>
    </MintContainer>
  );
}

export default MintButton;

/*
<StyledButton
  onClick={(e) => {
    e.preventDefault();
    clearCanvas();
  }}
>
  CLEAR
</StyledButton>
*/
