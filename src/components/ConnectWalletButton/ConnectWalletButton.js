import React from 'react';
import {
  Container,
  ConnectButton,
} from './ButtonElements';

function ConnectWalletButton({connected, connectedWallet, buttonPressed}) {
  return (
    <Container>
      <ConnectButton
        onClick={(e) => {
          e.preventDefault();
          connectedWallet ?
            window.open("https://etherscan.io/address/" + connectedWallet, "_blank")
            : buttonPressed();
        }}
        connectedWallet={connectedWallet}
      >
      {connectedWallet ? connectedWallet.substring(0, 6) : 'CONNECT WALLET'}
      </ConnectButton>
    </Container>
  );
}

//https://etherscan.io/address/
export default ConnectWalletButton;
