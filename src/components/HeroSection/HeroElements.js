import styled from 'styled-components';
import lavaBackground from '../../images/LavaBackground.png';

export const LavaBackground = styled.div`
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #000000;
  background-image: url(${lavaBackground});
`;

export const TopLeftText = styled.p`
  margin: 0px;
  padding-left: 90px;
  padding-top: 72px;
  font-size: 64px;
  color: #ffffff;
  font-family: Bangers;
`;

export const Title = styled.p`
  margin: 0;
  margin-top: 50px;
  text-align: center;
  font-size: 150px;
  color: #ffffff;
  font-family: Bangers;
`;

export const SubTitle = styled.p`
  margin: 0;
  margin-bottom: 76px;
  text-align: center;
  font-size: 58px;
  color: #ffffff;
  font-family: Bangers;
`;

export const MintDetails = styled.p`
  text-align: center;
  font-size: 22px;
  color: #ffffff;
  font-family: Montserrat;
`;

export const MintButton = styled.button`
  display: flex;
  align-self: center;
  justify-content: center;
  border-width: 7px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 30px;
  background-color: #000000;
  border-color: #FF0000;
  color: #FFFFFF;
  font-size: 50px;
  font-family: Montserrat;
`;

export const MintContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BuyButton = styled.button`
  align-self: center;
  display: flex;
  justify-content: center;
  border-width: 5px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 30px;
  background-color: #000000;
  border-color: #FF0000;
  color: #FFFFFF;
  font-size: 50px;
  font-family: Montserrat;
`;

export const BuyNow = styled.p`
  color: #FFFFFF;
  font-size: 50px;
  font-family: Montserrat;
  padding-left: 30px;
`;

export const EthPrice = styled.p`
  color: #FFFFFF;
  font-size: 25px;
  font-family: Montserrat-Bold;
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
`;

export const LinkButtonWrapper = styled.div`
  padding-right: 16px;
  padding-left: 16px;
`;

export const LampIncrementerContainer = styled.button`
  align-self: center;
  display: flex;
  justify-content: center;
  border: 5px solid red;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 30px;
  background-color: #000000;
  border-color: #2183F6;
  color: #FFFFFF;
  font-size: 50px;
  font-family: Montserrat;
  margin-right: 32px;
`;

export const LampText = styled.p`
  font-size: 20px;
  font-family: Montserrat-bold;
`;

export const LampCount = styled.p`
  font-family: Montserrat;
  font-size: 40px;
`;

export const LampCountContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  padding-left: ${props => props.left ? 16 : 32}px;
  padding-right: ${props => props.right ? 16 : 32}px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const DropContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DropItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid ${props => props.color};
  width: 125px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 30px;
  background-color: #000000;
  margin-right: 16px;
  margin-left: 16px;
`;

export const DropTime = styled.p`
  font-family: Montserrat;
  font-size: 40px;
  color: #FFFFFF;
`;

export const DropUnit = styled.p`
  font-size: 20px;
  font-family: Montserrat-bold;
  color: #FFFFFF;
`;
