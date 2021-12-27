import React from 'react';
import {
  NavBarContainer,
  ButtonContainer,
  TopLeftText
} from './Elements';
import Button from '../Button';
import ConnectWalletButton from '../ConnectWalletButton';

function NavBar({dropComing, connectWallet, blockchainAccount}) {
  return(
    <NavBarContainer>
      <TopLeftText>LAVA LAMPS</TopLeftText>
      <ButtonContainer>
        <Button description="FAQS" />
        <Button description="STATS" />
        <Button description="LAVALIST" />
        {dropComing ?
           <></> :
           <ConnectWalletButton
             connectedWallet={blockchainAccount}
             buttonPressed={connectWallet}
           />
        }
      </ButtonContainer>
    </NavBarContainer>
  );
}

export default NavBar;
