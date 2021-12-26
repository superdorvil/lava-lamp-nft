import React from 'react';
import { IconSVG, IconPath } from './Elements';

function Icon ({ icon, iconColor, width, height }) {
  return(
    <IconSVG viewBox="0 0 1024 1024" width={width} height={height}>
      <IconPath d={icon} iconColor={iconColor} />
    </IconSVG>
  );
};

export default Icon;
