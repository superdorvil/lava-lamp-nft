function Lava2({lava2}) {
  if (lava2.color === 'none') {
    return '';
  }

  return `
    <!-- Color -->
    <path d="M177.734 130.914C177.734 127.951 179.774 122.048 187.933 122.136C196.091 122.224 198.203 128.025 198.239 130.914C198.312 133.035 197.089 137.629 191.621 139.033C184.786 140.789 177.734 136.839 177.734 130.914Z" fill="url(#paint0_radial_702_67018)"/>

    <defs>
      <!-- Color -->
      <radialGradient id="paint0_radial_702_67018" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(182.539 125.892) rotate(45.8803) scale(10.3998 11.5271)">
        <stop offset="0.203125" style="stop-color: ${lava2.color1};"/>
        <stop offset="0.890625" style="stop-color: ${lava2.color2};"/>
      </radialGradient>
    </defs>
  `;
}

export default Lava2;
