import styled from 'styled-components';

 export const IconSVG = styled.svg`
   display: 'inline-block';
   verticalAlign: 'middle';
   width: ${props => props.width}px;
   height: ${props => props.height}px;
   border-radius: 100px;
   fill: #FFFFFF;
   &:hover {
     transition: all 0.1s ease-in-out;
     fill: #F0000040;
   }
 `;

 export const IconPath = styled.path``;
