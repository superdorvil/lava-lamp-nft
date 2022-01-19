import React from 'react';
import { IconSVG, IconPath } from './Elements';

function Icon ({ icon, iconColor, width, height, highlight, hoverColor }) {
  return(
    <IconSVG
      viewBox="0 0 1024 1024"
      iconColor={iconColor}
      hoverColor={hoverColor}
      width={width}
      height={height}
      highlight={highlight}>
      <IconPath d={icon} highlight={highlight} />
    </IconSVG>
  );
};

export default Icon;
