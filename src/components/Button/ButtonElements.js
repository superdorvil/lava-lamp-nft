import styled from 'styled-components';

export const Container = styled.form`
  align-self: center;
  display: flex;
  justify-content: center;
`;

export const Description = styled.input`
  border-width: 3px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 12px;
  background-color: #000000;
  border-color: ${props => props.color};
  color: #FFFFFF;
  font-size: 15px;
  font-family: Montserrat;
`;
