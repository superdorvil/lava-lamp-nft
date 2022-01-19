import styled from 'styled-components';
import {COLORS} from '../../constants';

// Lamp Incrementer
export const LampIncrementerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  color: #FFFFFF;
  font-family: Montserrat;
  margin-right: 1.5vw;
  border-radius: 1.75vw;
  border: .4vw;
  border-style: solid;
  border-color: transparent;
  background:
    linear-gradient(90deg, #000000, #000000) padding-box,
    linear-gradient(90deg, ${COLORS.light_blue}, ${COLORS.dark_blue}) border-box;
`;

export const LampText = styled.p`
  font-size: 1.25vw;
  font-family: Montserrat-bold;
  align-self: center;
`;

export const LampCount = styled.p`
  font-family: Montserrat;
  font-size: 3.125vw;
  align-self: center;
`;

export const LampCountContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IncrementButton = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;
  padding-left: ${props => props.left ? 2 : 1}vw;
  padding-right: ${props => props.right ? 2 : 1}vw;
  padding-top: 2vw;
  padding-bottom: 2vw;
  background-color: #000000;
  border: none;
  cursor: pointer;
  border-radius: 1.75vw;
`;

// Mint button
export const MintContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2vw;
  margin-bottom: 2vw;
  /*flex-direction: column-reverse;*/
`;

export const BuyButton = styled.button`
  align-self: center;
  display: flex;
  justify-content: center;
  border-width: .4vw;
  padding-left: 2.75vw;
  padding-right: 2.75vw;
  padding-top: 1.8vw;
  padding-bottom: 1.8vw;
  border-radius: 1.75vw;
  background-color: #000000;
  border-color: #FF0000;
  border-style: solid;
  color: #FFFFFF;
  cursor: pointer;
  &:hover {
    background-color: #3A3A3A;
    padding-top: 1.9vw;
    padding-bottom: 1.9vw;
    padding-left: 4vw;
    padding-right: 4vw;
  }
`;

export const EthPriceHover = styled.p`
  transition: all 0.2s ease-in-out;
  font-size: 3.125vw;
  font-family: Bangers;
`;

export const MintText = styled.p`
  color: #FFFFFF;
  font-size: 2.75vw;
  font-family: Montserrat;
  padding-left: 2vw;
`;

export const EthPrice = styled.p`
  color: #FFFFFF;
  font-size: 1.4vw;
  font-family: Montserrat-Bold;
`;

export const BuyTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
