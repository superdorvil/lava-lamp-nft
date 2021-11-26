function Lava4({lava4}) {
  if (lava4.color === 'none') {
    return '';
  }

  return `
    <!-- Color -->
    <path d="M223.109 211.89C217.522 215.445 199.996 225.13 174.887 225.13C146.901 225.13 128.335 213.098 125.221 210.933C125.032 210.801 124.911 210.606 124.87 210.39C128.808 199.004 144.115 175.86 164.064 181.919C173.943 184.919 180.859 192.452 187.364 199.536C197.438 210.508 206.525 220.404 224.106 210.722C223.783 211.11 223.451 211.499 223.109 211.89Z" fill="url(#paint0_radial_702_67020)"/>

    <!-- Filter -->
    <mask id="mask0_702_67020" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="124" y="180" width="101" height="46">
      <path d="M223.109 211.89C217.522 215.445 199.996 225.13 174.887 225.13C146.901 225.13 128.335 213.098 125.221 210.933C125.032 210.802 124.911 210.606 124.87 210.39C128.808 199.004 144.115 175.86 164.064 181.919C173.943 184.92 180.859 192.452 187.364 199.536C197.438 210.508 206.525 220.405 224.106 210.722C223.783 211.11 223.451 211.499 223.109 211.89Z" fill="url(#paint1_radial_702_67020)"/>
    </mask>
    <g mask="url(#mask0_702_67020)">
      <g filter="url(#filter0_f_702_67020)">
        <mask id="mask1_702_67020" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="124" y="94" width="102" height="132">
          <path d="M148.862 95.0639C148.949 94.6401 149.322 94.3359 149.754 94.3359H200.246C200.678 94.3359 201.051 94.6401 201.138 95.0639L224.993 211.159C225.074 211.555 224.888 211.955 224.527 212.137C220.624 214.109 198.375 224.817 175 225.128C151.578 225.438 129.287 214.178 125.45 212.141C125.099 211.954 124.924 211.562 125.004 211.173L148.862 95.0639Z" fill="#577096" fill-opacity="0.75"/>
        </mask>
        <g mask="url(#mask1_702_67020)">
          <g filter="url(#filter1_f_702_67020)">
            <path d="M155.407 125.301C156.469 105.018 134.471 86.183 128.929 66.9987C133.388 65.1975 144.05 70.7899 152.675 76.125C163.456 82.7938 162.879 109.124 164.625 125.784C166.022 139.112 148.453 223.401 144.015 241.482L131.716 240.837C140.242 214.68 154.587 140.955 155.407 125.301Z" fill="url(#paint2_linear_702_67020)" fill-opacity="0.6"/>
          </g>
        </g>
      </g>
    </g>

    <defs>
      <!-- Color -->
      <radialGradient id="paint0_radial_702_67020" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(148.118 190.514) rotate(28.5454) scale(39.8814 37.1287)">
        <stop offset="0.203125" style="stop-color: ${lava4.color1};"/>
        <stop offset="0.890625" style="stop-color: ${lava4.color2};"/>
      </radialGradient>

      <!-- Filter -->
      <filter id="filter0_f_702_67020" x="122.591" y="92.0573" width="104.818" height="135.355" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="1.13932" result="effect1_foregroundBlur_702_67020"/>
      </filter>
      <filter id="filter1_f_702_67020" x="128.017" y="65.7428" width="37.5979" height="176.65" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.455729" result="effect1_foregroundBlur_702_67020"/>
      </filter>
      <radialGradient id="paint1_radial_702_67020" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(146.218 191.259) rotate(27.3324) scale(58.602 42.3474)">
        <stop offset="0.302083" stop-color="#FFB800"/>
        <stop offset="1" stop-color="#FF7800"/>
      </radialGradient>
      <linearGradient id="paint2_linear_702_67020" x1="160.729" y1="220.939" x2="201.954" y2="178" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F2F2F2"/>
        <stop offset="0.0001" stop-color="#F2F2F2"/>
        <stop offset="0.0520833" stop-color="#F2F2F2" stop-opacity="0.948011"/>
        <stop offset="1" stop-color="#F2F2F2" stop-opacity="0"/>
      </linearGradient>
    </defs>
  `;
}


module.exports = {Lava4};
