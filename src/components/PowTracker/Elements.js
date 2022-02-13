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
  padding-top: 8vw;
  display: flex;
  justify-content: center;
  font-family: Bangers;
  font-size: 7vw;
  color: #FFFFFF;
  padding-bottom: 2.25vw;
`;

export const CenterItems = styled.div`
  display: flex;
  justify-content: center;
`;
