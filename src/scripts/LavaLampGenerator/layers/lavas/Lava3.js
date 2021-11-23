function Lava3({lava3}) {
  if (lava3.color === 'none') {
    return '';
  }

  return `
    <!-- Color -->
    <path d="M214.052 156.619L218.831 179.91C216.932 182.156 214.118 184.13 210.037 185.164C197.278 188.398 184.115 181.122 184.115 170.207C184.115 164.75 187.922 153.876 203.151 154.038C207.743 154.087 211.309 155.092 214.052 156.619Z" fill="url(#paint0_radial_702_67019)"/>

    <defs>
      <!-- Color -->
      <radialGradient id="paint0_radial_702_67019" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(192.248 160.957) rotate(48.2936) scale(18.4215 20.2932)">
        <stop offset="0.203125" style="stop-color: ${lava3.color1};"/>
        <stop offset="0.890625" style="stop-color: ${lava3.color2};"/>
      </radialGradient>
    </defs>
  `;
}

export default Lava3;
