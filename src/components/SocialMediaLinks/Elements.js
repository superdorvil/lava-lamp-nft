import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LinkContainer = styled.a`
  margin-right: ${props => props.pad}vw;
  margin-left: ${props => props.pad}vw;
`;
