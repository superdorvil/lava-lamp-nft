import styled from 'styled-components';
import lavaBackground from '../../images/LavaBackground.svg';

export const LavaBackground = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: #000000;
  background-image: url(${lavaBackground});
`;

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 3.75vw;
`;

export const TopLeftText = styled.p`
  margin: 0px;
  padding-left: 4.7vw;
  font-size: 3.75vw;
  color: #ffffff;
  font-family: Bangers;
  align-self: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding-right: 4.7vw;
`;

export const Title = styled.p`
  margin: 0;
  margin-top: 8.33vw;
  text-align: center;
  font-size: 9vw;
  color: #ffffff;
  font-family: Bangers;
`;

export const SubTitle = styled.p`
  text-align: center;
  font-size: 3vw;
  margin-bottom: 3.33vw;
  color: #ffffff;
  font-family: Bangers;
`;

export const MintDetails = styled.p`
  text-align: center;
  font-size: 1.25vw;
  color: #ffffff;
  font-family: Montserrat;
`;

export const DropContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1.25vw;
  margin-bottom: 1.25vw;
`;

export const SocialContainer = styled.div`
  padding-top: 3.33vw;
  padding-bottom: 6.75vw;
`;
