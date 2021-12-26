import styled from 'styled-components';
import lavaBackground from '../../images/LavaBackground.svg';
import lavaBackgroundMobile from '../../images/LavaBackgroundMobile.svg';
import lavaBackgroundMobile2 from '../../images/LavaBackgroundMobile2.svg';

export const LavaBackground = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: #000000;
  background-image: url(${lavaBackground});
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
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

export const DropContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1.5vw;
  margin-bottom: 1.5vw;
`;

export const SocialContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
`;
