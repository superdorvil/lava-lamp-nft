import styled from 'styled-components';

export const Container = styled.button`
  border-width: ${props => props.connectedWallet ? 0 : .25}vw;
  border-style: solid;
  border-color: #FFFFFF;
  border-radius: .45vw;
  color: #FFFFFF;
  font-family: Bangers;
  cursor: pointer;
  background: transparent;
  font-size: 1.875vw;
  padding: 0.725vw;
  margin-left: 0.6vw;
  &:hover {
    transition: all 0.1s ease-in-out;
    background: #FFFFFF;
    color: #000000;
  }
`;
