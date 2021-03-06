import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${props => props.dark ? '#00000040' : '#FFFFFF40'};
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  font-family: Montserrat-Bold;
  font-size: 1.25vw;
  color: #FFFFFF;
  padding: 1.25vw;
  border-width: 0;
  border-radius: .25vw;
  margin-right: 0.625vw;
  margin-left: 0.625vw;
  cursor: pointer;
  &:hover {
    transition: all 0.1s ease-in-out;
    background-color: ${props => props.dark ? '#FFFFFF40' : '#F0000040'};
  }
`;
