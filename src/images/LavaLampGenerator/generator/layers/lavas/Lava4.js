function Lava4({lava4}) {
  if (lava4 === '') {
    return '';
  }

  return `
  <!-- Lava 4 -->
    <!-- Color -->
    <path d="M225 210.659C220.5 214 200.704 225 175.402 225C147.201 225 128.492 213.024 125.354 210.869C125.163 210.738 125.042 210.543 125 210.328C128.968 198.996 144.393 175.959 164.496 181.99C174.451 184.976 181.421 192.474 187.975 199.525C198.127 210.446 208 213.5 225 210.659C224.675 211.045 225.345 210.27 225 210.659Z" fill="url(#paint0_radial_931_113863)"/>
<mask id="mask0_931_113863" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="124" y="180" width="101" height="45">
<path d="M223.866 211.799C218.236 215.343 200.575 225 175.272 225C147.071 225 128.362 213.003 125.225 210.845C125.034 210.714 124.912 210.519 124.87 210.303C128.839 198.951 144.263 175.875 164.366 181.916C174.321 184.908 181.291 192.418 187.845 199.481C197.997 210.421 207.154 220.288 224.87 210.635C224.545 211.021 224.21 211.409 223.866 211.799Z" fill="url(#paint1_radial_931_113863)"/>
</mask>
<g mask="url(#mask0_931_113863)">
<g filter="url(#filter0_f_931_113863)">
<mask id="mask1_931_113863" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="124" y="94" width="102" height="132">
<path d="M148.862 95.3198C148.949 94.896 149.322 94.5918 149.755 94.5918H200.246C200.679 94.5918 201.052 94.896 201.139 95.3198L224.993 211.414C225.075 211.811 224.888 212.211 224.527 212.393C220.624 214.365 198.376 225.073 175 225.383C151.578 225.694 129.288 214.434 125.45 212.396C125.1 212.21 124.924 211.818 125.004 211.429L148.862 95.3198Z" fill="#577096" fill-opacity="0.75"/>
</mask>
<g mask="url(#mask1_931_113863)">
<g filter="url(#filter1_f_931_113863)">
<path d="M155.407 125.557C156.47 105.273 134.471 86.4386 128.929 67.2543C133.388 65.4531 144.05 71.0455 152.675 76.3806C163.456 83.0494 162.879 109.38 164.625 126.04C166.022 139.368 148.453 223.657 144.015 241.737L131.716 241.093C140.242 214.936 154.587 141.211 155.407 125.557Z" fill="url(#paint2_linear_931_113863)" fill-opacity="0.6"/>
</g>
</g>
</g>
</g>
<defs>
<filter id="filter0_f_931_113863" x="122.591" y="92.3132" width="105.59" height="135.355" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.13932" result="effect1_foregroundBlur_931_113863"/>
</filter>
<filter id="filter1_f_931_113863" x="128.017" y="65.9987" width="37.5983" height="176.65" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.455729" result="effect1_foregroundBlur_931_113863"/>
</filter>
<radialGradient id="paint0_radial_931_113863" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(148.451 190.545) rotate(28.2255) scale(40.1081 37.0676)">
<stop offset="0.203125" style="stop-color: ${lava4.color1};"/>
<stop offset="0.890625" style="stop-color: ${lava4.color2};"/>
</radialGradient>
<radialGradient id="paint1_radial_931_113863" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(146.382 191.229) rotate(27.0849) scale(58.9221 42.3164)">
<stop offset="0.302083" stop-color="#FFB800"/>
<stop offset="1" stop-color="#FF7800"/>
</radialGradient>
<linearGradient id="paint2_linear_931_113863" x1="160.729" y1="221.194" x2="201.954" y2="178.256" gradientUnits="userSpaceOnUse">
<stop stop-color="#F2F2F2"/>
<stop offset="0.0001" stop-color="#F2F2F2"/>
<stop offset="0.0520833" stop-color="#F2F2F2" stop-opacity="0.948011"/>
<stop offset="1" stop-color="#F2F2F2" stop-opacity="0"/>
</linearGradient>
</defs>
  `;
}

module.exports = {Lava4};
