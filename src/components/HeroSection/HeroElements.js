import styled from 'styled-components';
import lavaBackground from '../../images/LavaBackground.png';

export const LavaBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #000000;
  background-image: url(${lavaBackground});
`;

export const TopLeftText = styled.p`
  margin: 0px;
  padding-left: 54px;
  padding-top: 54px;
  font-size: 48px;
  color: #ffffff;
  font-family: Bangers;
`;

export const Title = styled.p`
  margin: 0;
  margin-top: 80px;
  text-align: center;
  font-size: 150px;/*150 or 9*/
  color: #ffffff;
  font-family: Bangers;
`;

export const SubTitle = styled.p`
  margin: 0;
  margin-bottom: 30px;
  text-align: center;
  font-size: 42px;/*42 or 3*/
  color: #ffffff;
  font-family: Bangers;
`;

export const MintDetails = styled.p`
  text-align: center;
  font-size: 24px;
  color: #ffffff;
  font-family: Montserrat;
`;

export const MintContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
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
  color: #FFFFFF;
`;

export const BuyNow = styled.p`
  color: #FFFFFF;
  font-size: 40px;
  font-family: Montserrat;
  padding-left: 30px;
`;

export const EthPrice = styled.p`
  color: #FFFFFF;
  font-size: 20px;
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
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 30px;
  background-color: #000000;
  border-color: #2183F6;
  color: #FFFFFF;
  font-size: 50px;
  font-family: Montserrat;
  margin-right: 32px;
`;

/*
export const Divv2 = styled.button`
  border-radius: 80px;
  background: radial-gradient(#e66465, #9198e5);
  height: 300px;
  width: 300px;
  border:radial-gradient(rgba(250,0,0,0.5),transparent);
  border: 8px solid transparent;
  border-image: linear-gradient(45deg, #ff0, #f0f);
  border-image-slice: 1;
`;

const Divv = styled.button`
  background: radial-gradient(#e66465, #9198e5);
  height: 200px;
  width: 300px;
  align-self: center;
  display: flex;
  justify-content: center;
  border:radial-gradient(rgba(250,0,0,0.5),transparent);
  border-width: 15px;
  color: #FFFFFF;
`;
*/

export const LampText = styled.p`
  font-size: 24px;
  font-family: Montserrat-bold;
`;

export const LampCount = styled.p`
  font-family: Montserrat;
  font-size: 48px;
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
  justify-content: center;
  margin-top: 1.5vw;
  margin-bottom: 1.5vw;
`;

export const DropItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid ${props => props.color};
  height: 15vh;
  width: 15vh; /* these both vh intentially to keep is a square*/
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 30px;
  background-color: #000000;
  margin-right: 16px;
  margin-left: 16px;
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
