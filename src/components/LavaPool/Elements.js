import styled from 'styled-components';
import lavaPool from '../../images/LavaPool.png';

export const LavaPoolBackground = styled.div`
  background-repeat: no-repeat;
  height: 39vw;
  background-size: cover;
  background-color: #000000;
  background-image: url(${lavaPool});
  margin-top: 4.8vw;
  margin-bottom: 6.25vw;
`;

export const Title = styled.p`
  padding-top: 6.5vw;
  padding-bottom: 1.5vw;
  display: flex;
  justify-content: center;
  font-family: Bangers;
  font-size: 5.725vw;
  color: #FFFFFF;
`;

export const SubTitle = styled.p`
  font-family: Montserrat-Bold;
  font-size: 1.875vw;
  color: #FFFFFF;
  background-color: #000000;
  padding-top: .95vw;
  padding-bottom: .95vw;
  padding-left: .85vw;
  padding-right: .85vw;
`;

export const Description = styled.p`
  margin-top: 1.25vw;
  margin-bottom: 1.5vw;
  text-align: center;
  font-family: Montserrat;
  font-size: 1.75vw;
  width: 57vw;
  color: #FFFFFF;
  line-height: 2.5vw;
`;

export const CenterItems = styled.div`
  display: flex;
  justify-content: center;
`;
