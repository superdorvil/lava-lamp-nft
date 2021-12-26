import styled from 'styled-components';

// Connect Wallet button
export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 54px;
  padding-top: 44px;
  @media screen and (max-width: 1024px) {
    padding-right: 54px;
    padding-top: 44px;
  }
  @media screen and (max-width: 800px) {
    padding-right: 36px;
    padding-top: 26px;
  }
  @media screen and (max-width: 600px) {
    padding-right: 36px;
    padding-top: 22px;
  }
  @media screen and (max-width: 480px) {
    padding-right: 24px;
    padding-top: 14px;
  }
`;

export const ConnectButton = styled.button`
  border-width: ${props => props.connectedWallet ? 0 : 4}px;
  border-style: solid;
  border-color: #FFFFFF;
  border-radius: 10px;
  color: #FFFFFF;
  font-family: Bangers;
  cursor: pointer;
  background: transparent;
  font-size: 48px;
  padding: 12px;
  @media screen and (max-width: 1024px) {
    font-size: 48px;
  }
  @media screen and (max-width: 800px) {
    font-size: 36px;
  }
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }

  &:hover {
    transition: all 0.1s ease-in-out;
    background: #FFFFFF;
    color: #000000;
  }
`;
