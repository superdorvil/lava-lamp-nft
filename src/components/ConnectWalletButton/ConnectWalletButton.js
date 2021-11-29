import React from 'react';
import { StyledButton, Ccccc } from './ButtonElements';

function ConnectWalletButton({connected, connectedWallet, buttonPressed}) {
  return (
    <StyledButton
      onClick={(e) => {
        e.preventDefault();
        buttonPressed();
      }}
    >
    {connected ? 'DISCONNECT WALLET' : 'CONNECT WALLET'}
    </StyledButton>
  );
}

export default ConnectWalletButton;
