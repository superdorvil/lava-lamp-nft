import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 2.75vw;
  padding-bottom: 6.25vw;
  background-color: #221F1F;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const DataBlockContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex: 1;
`;

export const Title = styled.p`
  padding-bottom: 3vw;
  display: flex;
  justify-content: center;
  font-family: Bangers;
  font-size: 5.7vw;
  color: #FFFFFF;
`;

export const AttributeImage = styled.img`
  height: 10vw;
  width: 10vw;
  position: absolute;
  right: 0;
`;
