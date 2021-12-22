function Lava2({lava2}) {
  if (lava2 === 'none') {
    return '';
  }

  return `
  <!-- Lava 2 -->
    <!-- Color -->
<path d="M178.202 131.059C178.202 128.163 180.222 122.394 188.299 122.479C196.377 122.565 198.468 128.235 198.504 131.059C198.576 133.132 197.365 137.622 191.952 138.995C185.184 140.711 178.202 136.85 178.202 131.059Z" fill="url(#paint0_radial_931_113845)"/>
<defs>
<radialGradient id="paint0_radial_931_113845" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(182.959 126.151) rotate(45.5119) scale(10.2292 11.3416)">
<stop offset="0.203125" style="stop-color: ${lava2.color1};"/>
<stop offset="0.890625" style="stop-color: ${lava2.color2};"/>
</radialGradient>
</defs>
  `;
}

module.exports = {Lava2};
