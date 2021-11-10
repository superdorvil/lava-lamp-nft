import React from 'react';
import { IconSVG, IconPath } from './IconElements';

function SocialIcon ({ icon, iconColor }) {
  return(
    <IconSVG viewBox="0 0 1024 1024">
      <IconPath d={icon} iconColor={iconColor} />
    </IconSVG>
  );
};

// size=60
// width={size} height={size}

export default SocialIcon;
