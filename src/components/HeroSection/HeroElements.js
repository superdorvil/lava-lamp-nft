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
