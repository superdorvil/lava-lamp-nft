import React from 'react';
import {Container} from './Elements';

function ConnectWalletButton({connectedWallet, buttonPressed}) {
  return (
    <Container
      onClick={(e) => {
        e.preventDefault();
        //buttonPressed();
      }}
      /*onClick={(e) => {
        e.preventDefault();
        connectedWallet ?
          window.open("https://etherscan.io/address/" + connectedWallet, "_blank")
          : buttonPressed();
      }}*/
      connectedWallet={connectedWallet}
    >
      {connectedWallet ? connectedWallet.substring(0, 6) : 'CONNECT WALLET'}
    </Container>
  );
}

//https://etherscan.io/address/
export default ConnectWalletButton;
