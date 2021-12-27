import styled from 'styled-components';

export const Container = styled.button`
  border-width: ${props => props.connectedWallet ? 0 : 2}px;
  border-style: solid;
  border-color: #FFFFFF;
  border-radius: 5px;
  color: #FFFFFF;
  font-family: Bangers;
  cursor: pointer;
  background: transparent;
  font-size: 2.5vw;
  padding: 0.75vw;
  margin-left: 0.6vw;

  &:hover {
    transition: all 0.1s ease-in-out;
    background: #FFFFFF;
    color: #000000;
  }
`;
