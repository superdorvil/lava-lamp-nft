import styled from 'styled-components';
import lavaBackground from '../../images/LavaBackground.png';
import lavaBackgroundMobile from '../../images/LavaBackgroundMobile.png';
import {COLORS} from '../../constants/colors';

export const LavaBackground = styled.div`
  height: 800px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #000000;
  background-image: url(${lavaBackground});
  @media screen and (max-width: 480px) {
    height: 300px;
    width: 100vw;
    background-image: url(${lavaBackgroundMobile});
  }
`;

export const TopLeftText = styled.p`
  margin: 0px;
  padding-left: 54px;
  padding-top: 54px;
  font-size: 48px;
  color: #ffffff;
  font-family: Bangers;
  @media screen and (max-width: 1024px) {
    padding-left: 54px;
    padding-top: 54px;
    font-size: 48px;
  }
  @media screen and (max-width: 800px) {
    padding-left: 36px;
    padding-top: 36px;
    font-size: 36px;
  }
  @media screen and (max-width: 600px) {
    padding-left: 36px;
    padding-top: 36px;
    font-size: 30px;
  }
  @media screen and (max-width: 480px) {
    padding-left: 24px;
    padding-top: 24px;
    font-size: 20px;
  }
`;

export const Title = styled.p`
  margin: 0;
  margin-top: 80px;
  text-align: center;
  font-size: 150px;
  color: #ffffff;
  font-family: Bangers;
  @media screen and (max-width: 1024px) {
    margin-top: 80px;
    font-size: 120px;
  }
  @media screen and (max-width: 800px) {
    margin-top: 80px;
    font-size: 100px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 60px;
    font-size: 80px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 30px;
    font-size: 40px;
  }
`;

export const SubTitle = styled.p`
  text-align: center;
  font-size: 42px;
  color: #ffffff;
  font-family: Bangers;
  @media screen and (max-width: 1024px) {
    font-size: 36px;
  }
  @media screen and (max-width: 800px) {
    font-size: 30px;
  }
  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const MintDetails = styled.p`
  text-align: center;
  font-size: 24px;
  color: #ffffff;
  font-family: Montserrat;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

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
      padding-top: 0px;
      padding-bottom: 0px;
      padding-left: 0px;
      padding-right: 0px;
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

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  @media screen and (max-width: 600px) {
    margin-top: 24px;
  }
  @media screen and (max-width: 480px) {
    display: none
  }
`;

export const LinkButtonWrapper = styled.a`
  margin-right: 16px;
  margin-left: 16px;
  @media screen and (max-width: 600px) {
    margin-right: 12px;
    margin-left: 12px;
  }
`;

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







// Drop Container shitsss

export const DropContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1.5vw;
  margin-bottom: 1.5vw;
  @media screen and (max-width: 1024px) {

  }
  @media screen and (max-width: 800px) {

  }
  @media screen and (max-width: 600px) {

  }
  @media screen and (max-width: 480px) {

  }
`;

export const DropItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-width: 4px;
  border-style: solid;
  border-color: transparent;
  background:
    linear-gradient(90deg, #000000, #000000) padding-box,
    linear-gradient(90deg, ${props => props.lightColor}, ${props => props.darkColor}) border-box;
  height: 15vh;
  width: 15vh; /* these both vh intentially to keep is a square*/
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 30px;
  background-color: #000000;
  margin-right: 16px;
  margin-left: 16px;
  @media screen and (max-width: 1024px) {

  }
  @media screen and (max-width: 800px) {

  }
  @media screen and (max-width: 600px) {

  }
  @media screen and (max-width: 480px) {

  }
`;

export const DropTime = styled.p`
  font-family: Montserrat;
  font-size: 5.5vh;
  color: #FFFFFF;
`;

export const DropUnit = styled.p`
  font-size: 20px;
  font-family: Montserrat-bold;
  color: #FFFFFF;
`;
