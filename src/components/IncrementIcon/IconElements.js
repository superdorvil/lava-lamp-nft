import styled from 'styled-components';

 export const IconSVG = styled.svg`
   display: 'inline-block';
   verticalAlign: 'middle';
   width: 32px;
   height: 32px;
   @media screen and (max-width: 480px) {

   }
 `;

 export const IconPath = styled.path`
    fill: ${props => props.iconColor};
 `;
