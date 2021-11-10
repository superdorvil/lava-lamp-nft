import styled from 'styled-components';

 export const IconSVG = styled.svg`
   display: 'inline-block';
   verticalAlign: 'middle';
   width: 60px;
   height: 60px;
   @media screen and (max-width: 600px) {
     width: 48px;
     height: 48px;
   }
   @media screen and (max-width: 480px) {

   }
 `;

 export const IconPath = styled.path`
    fill: ${props => props.iconColor};
 `;
