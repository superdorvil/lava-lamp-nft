import React from 'react';
import { IconSVG, IconPath } from './Elements';

function Icon ({ icon, iconColor, width, height, highlight }) {
  return(
    <IconSVG viewBox="0 0 1024 1024" width={width} height={height} highlight={highlight}>
      <IconPath d={icon} iconColor={iconColor} highlight={highlight} />
    </IconSVG>
  );
};

export default Icon;
