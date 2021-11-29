import React from 'react';
import { StyledButton } from './ButtonElements';

function ConnectWalletButton({connected, connectedWallet, buttonPressed}) {
  return (
    <StyledButton
      onClick={(e) => {
        e.preventDefault();
        connectedWallet ?
          window.open("https://etherscan.io/address/" + connectedWallet, "_blank")
          : buttonPressed();
      }}
      connectedWallet={connectedWallet}
    >
    {connectedWallet ? connectedWallet.substring(0, 6) : 'CONNECT WALLET'}
    </StyledButton>
  );
}
//https://etherscan.io/address/
export default ConnectWalletButton;
