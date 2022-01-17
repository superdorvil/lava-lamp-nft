import React from 'react';
import {
  NavBarContainer,
  ButtonContainer,
  TopLeftText
} from './Elements';
import Button from '../Button';
import ScrollButton from '../ScrollButton';
import ConnectWalletButton from '../ConnectWalletButton';

function NavBar({dropComing, connectWallet, blockchainAccount, openLavaList }) {
console.log('nav bar');
  return(
    <NavBarContainer>
      <TopLeftText>LAVA LAMPS</TopLeftText>
      <ButtonContainer>
        <ScrollButton description="FAQS" />
        <ScrollButton description="STATS" />
        <Button
          description="LAVALIST"
          buttonPressed={openLavaList}
        />
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
