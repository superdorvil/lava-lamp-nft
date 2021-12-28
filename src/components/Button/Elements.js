import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${props => props.dark ? '#00000040' : '#FFFFFF40'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-size: 1.5vw;
  color: #FFFFFF;
  padding: 1.25vw;
  border-radius: 2px;
  border-width: 0px;
  margin-right: 0.6vw;
  margin-left: 0.6vw;
  &:hover {
    transition: all 0.1s ease-in-out;
    background-color: ${props => props.dark ? '#FFFFFF40' : '#F0000040'};
  }
`;
