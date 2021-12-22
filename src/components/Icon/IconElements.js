import styled from 'styled-components';

 export const IconSVG = styled.svg`
   display: 'inline-block';
   verticalAlign: 'middle';
   width: ${props => props.width}px;
   height: ${props => props.height}px;
 `;

 export const IconPath = styled.path`
    fill: ${props => props.iconColor};
 `;
