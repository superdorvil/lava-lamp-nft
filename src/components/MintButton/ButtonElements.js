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
  margin-right: 32px;

  border-radius: 30px;
  border: 5px;
  border-style: solid;
  border-color: transparent;
  background:
    linear-gradient(90deg, #000000, #000000) padding-box,
    linear-gradient(90deg, ${COLORS.light_blue}, ${COLORS.dark_blue}) border-box;
  @media screen and (max-width: 1024px) {
    border-radius: 20px;
    margin-right: 32px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 16px;
    margin-right: 0px;
  }
  @media screen and (max-width: 480px) {
    border-radius: 18px;
    margin-top: 12px;
    margin-right: 0px;
  }
`;

export const LampText = styled.p`
  font-size: 24px;
  font-family: Montserrat-bold;
  align-self: center;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
 @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const LampCount = styled.p`
  font-family: Montserrat;
  font-size: 48px;
  align-self: center;
  @media screen and (max-width: 1024px) {
    font-size: 36px;
  }
  @media screen and (max-width: 800px) {
    font-size: 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const LampCountContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IncrementButton = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;
  padding-left: ${props => props.left ? 32 : 16}px;
  padding-right: ${props => props.right ? 32 : 16}px;
  padding-top: 38px;
  padding-bottom: 38px;
  background-color: #000000;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  @media screen and (max-width: 1024px) {
    padding-left: ${props => props.left ? 28 : 12}px;
    padding-right: ${props => props.right ? 28 : 12}px;
    padding-top: 26px;
    padding-bottom: 26px;
  }
  @media screen and (max-width: 800px) {
    padding-left: ${props => props.left ? 20 : 12}px;
    padding-right: ${props => props.right ? 20 : 12}px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  @media screen and (max-width: 480px) {
    padding-left: ${props => props.left ? 14 : 8}px;
    padding-right: ${props => props.right ? 14 : 8}px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
`;

// Mint button
export const MintContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
  @media screen and (max-width: 1024px) {
    margin-top: 24px;
    margin-bottom: 24px;
  }
  @media screen and (max-width: 800px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 12px;
    margin-bottom: 12px;
  }
`;

export const BuyButton = styled.button`
  align-self: center;
  display: flex;
  justify-content: center;
  border-width: 5px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 30px;
  background-color: #000000;
  border-color: #FF0000;
  border-style: solid;
  color: #FFFFFF;
  cursor: pointer;
  &:hover {
    background-color: #3A3A3A;
    padding-top: 27px;
    padding-bottom: 27px;
    padding-left: 60px;
    padding-right: 60px;
  }
  @media screen and (max-width: 1024px) {
    border-width: 5px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 20px;
    &:hover {
      padding-top: 27px;
      padding-bottom: 27px;
      padding-left: 60px;
      padding-right: 60px;
    }
  }
  @media screen and (max-width: 800px) {
    border-width: 5px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 14px;
    padding-bottom: 14px;
    border-radius: 20px;
    &:hover {
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 50px;
      padding-right: 50px;
    }
  }
  @media screen and (max-width: 480px) {
    border-width: 5px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 14px;
    padding-bottom: 14px;
    border-radius: 16px;
    &:hover {
      padding-top: 16px;
      padding-bottom: 16px;
      padding-left: 40px;
      padding-right: 40px;
    }
  }
`;

export const EthPriceHover = styled.p`
  transition: all 0.2s ease-in-out;
  font-size: 52px;
  font-family: Bangers;
  @media screen and (max-width: 1024px) {
    font-size: 30px;
  }
  @media screen and (max-width: 600px) {
    font-size: 28px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const BuyNow = styled.p`
  color: #FFFFFF;
  font-size: 40px;
  font-family: Montserrat;
  padding-left: 30px;
  @media screen and (max-width: 1024px) {
    font-size: 32px;
    padding-left: 24px;
  }
  @media screen and (max-width: 600px) {
    font-size: 32px;
    padding-left: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    padding-left: 12px;
  }
`;

export const EthPrice = styled.p`
  color: #FFFFFF;
  font-size: 20px;
  font-family: Montserrat-Bold;
  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

export const BuyTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
