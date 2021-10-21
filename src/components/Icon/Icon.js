import React from 'react';
import { IconSVG, IconPath } from './IconElements';

function Icon ({ icon, size=60, iconColor }) {
  return(
    <IconSVG width={size} height={size} viewBox="0 0 1024 1024">
      <IconPath d={icon} iconColor='#FFFFFF' />
    </IconSVG>
  );
};

export default Icon;
