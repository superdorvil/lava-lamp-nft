function Lava4({lava4}) {
  if (lava4.color === 'none') {
    return '';
  }

  return `
    <!-- Color -->
    <path d="M225 209.659C220.5 213 200.704 224 175.402 224C147.201 224 128.492 212.024 125.354 209.869C125.163 209.738 125.042 209.543 125 209.328C128.968 197.996 144.393 174.959 164.496 180.99C174.451 183.976 181.421 191.474 187.975 198.525C198.127 209.446 208 212.5 225 209.659C224.675 210.045 225.345 209.27 225 209.659Z" fill="url(#paint0_radial_765_91939)"/>

    <!-- Filter -->
    <mask id="mask0_765_91939" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="124" y="179" width="101" height="45">
      <path d="M223.865 210.799C218.235 214.343 200.574 224 175.272 224C147.071 224 128.362 212.003 125.224 209.845C125.033 209.714 124.911 209.519 124.87 209.303C128.838 197.951 144.263 174.875 164.365 180.916C174.321 183.908 181.29 191.418 187.845 198.481C197.997 209.421 207.153 219.288 224.87 209.635C224.545 210.021 224.21 210.409 223.865 210.799Z" fill="url(#paint1_radial_765_91939)"/>
    </mask>
    <g mask="url(#mask0_765_91939)">
      <g filter="url(#filter0_f_765_91939)">
        <mask id="mask1_765_91939" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="124" y="93" width="102" height="132">
          <path d="M148.861 94.3198C148.948 93.896 149.322 93.5918 149.754 93.5918H200.245C200.678 93.5918 201.051 93.896 201.138 94.3198L224.993 210.414C225.074 210.811 224.887 211.211 224.527 211.393C220.623 213.365 198.375 224.073 175 224.383C151.578 224.694 129.287 213.434 125.45 211.396C125.099 211.21 124.924 210.818 125.004 210.429L148.861 94.3198Z" fill="#577096" fill-opacity="0.75"/>
        </mask>
        <g mask="url(#mask1_765_91939)">
          <g filter="url(#filter1_f_765_91939)">
            <path d="M155.407 124.557C156.469 104.274 134.471 85.4391 128.928 66.2548C133.387 64.4536 144.05 70.046 152.675 75.3811C163.455 82.0499 162.878 108.38 164.625 125.04C166.022 138.368 148.453 222.657 144.014 240.738L131.716 240.094C140.242 213.936 154.587 140.211 155.407 124.557Z" fill="url(#paint2_linear_765_91939)" fill-opacity="0.6"/>
          </g>
        </g>
      </g>
    </g>

    <defs>
      <!-- Color -->
      <radialGradient id="paint0_radial_765_91939" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(148.451 189.545) rotate(28.2255) scale(40.1081 37.0676)">
        <stop offset="0.203125" style="stop-color: ${lava4.color1};"/>
        <stop offset="0.890625" style="stop-color: ${lava4.color2};"/>
      </radialGradient>

      <!-- Filter -->
      <filter id="filter0_f_765_91939" x="122.591" y="91.3132" width="105.59" height="135.355" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="1.13932" result="effect1_foregroundBlur_765_91939"/>
      </filter>
      <filter id="filter1_f_765_91939" x="128.017" y="64.9987" width="37.5983" height="176.651" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.455729" result="effect1_foregroundBlur_765_91939"/>
      </filter>
      <radialGradient id="paint1_radial_765_91939" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(146.382 190.229) rotate(27.0849) scale(58.9221 42.3164)">
        <stop offset="0.302083" stop-color="#FFB800"/>
        <stop offset="1" stop-color="#FF7800"/>
      </radialGradient>
      <linearGradient id="paint2_linear_765_91939" x1="160.729" y1="220.195" x2="201.954" y2="177.257" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F2F2F2"/>
        <stop offset="0.0001" stop-color="#F2F2F2"/>
        <stop offset="0.0520833" stop-color="#F2F2F2" stop-opacity="0.948011"/>
        <stop offset="1" stop-color="#F2F2F2" stop-opacity="0"/>
      </linearGradient>
    </defs>
  `;
}

module.exports = {Lava4};
