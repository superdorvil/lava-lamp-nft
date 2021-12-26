import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LinkContainer = styled.a`
  margin-right: 16px;
  margin-left: 16px;
  @media screen and (max-width: 600px) {
    margin-right: 12px;
    margin-left: 12px;
  }
  @media screen and (max-width: 480px) {
    margin-right: 8px;
    margin-left: 8px;
  }
`;
