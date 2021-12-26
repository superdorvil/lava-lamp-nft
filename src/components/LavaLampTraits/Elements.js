import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6vw;
  padding-bottom: 6vw;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.p`
  padding-bottom: 1vw;
  display: flex;
  justify-content: center;
  font-family: Bangers;
  font-size: 7vw;
  color: #FFFFFF;
`;

export const SubTitle = styled.p`
  display: flex;
  justify-content: center;
  font-family: Bangers;
  font-size: 2.25vw;
  color: #FFFFFF;
`;

export const Description = styled.p`
  padding-top: 2vw;
  padding-bottom: 2vw;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: Montserrat-bold;
  font-size: 1.25vw;
  line-height: 1.75vw;
  width: 31vw;
  color: #FFFFFF;
`;

export const TraitContainer = styled.div`
  width: 32vw;
  height: 32vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LavaLampContainer = styled.p`
  padding-right: 6.4vw;
`;

export const TraitDataBlocks = styled.div`
  display: flex;
  flex-direction: row;
`;
