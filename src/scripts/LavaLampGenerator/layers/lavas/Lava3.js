function Lava3({lava3}) {
  if (lava3.color === 'none') {
    return '';
  }

  return `
    <!-- Color -->
    <path d="M214.381 157.604L219.2 181.084C217.285 183.349 214.448 185.339 210.334 186.382C197.471 189.642 184.2 182.306 184.2 171.303C184.2 165.801 188.039 154.839 203.392 155.002C208.021 155.051 211.616 156.065 214.381 157.604Z" fill="url(#paint0_radial_765_91922)"/>

    <defs>
      <!-- Color -->
      <radialGradient id="paint0_radial_765_91922" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(192.4 161.977) rotate(48.2936) scale(18.5718 20.4588)">
        <stop offset="0.203125" style="stop-color: ${lava3.color1};"/>
        <stop offset="0.890625" style="stop-color: ${lava3.color2};"/>
      </radialGradient>
    </defs>
  `;
}

export default Lava3;
