import styled from 'styled-components';
import lavaPool from '../../images/LavaPool.svg';

export const LavaPoolBackground = styled.div`
  background-repeat: no-repeat;
  height: 39vw;
  background-size: cover;
  background-color: #000000;
  background-image: url(${lavaPool});
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const Title = styled.p`
  padding-top: 6.5vw;
  padding-bottom: 1.3vw;
  display: flex;
  justify-content: center;
  font-family: Bangers;
  font-size: 6vw;
  color: #FFFFFF;
`;

export const SubTitle = styled.p`
  margin-bottom: 1vw;
  font-family: Montserrat-Bold;
  font-size: 2.6vw;
  color: #FFFFFF;
  background-color: #000000;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
`;

export const Description = styled.p`
  text-align: center;
  font-family: Montserrat;
  font-size: 2.6vw;
  width: 85vw;
  color: #FFFFFF;
`;

export const CenterItems = styled.div`
  display: flex;
  justify-content: center;
`;
