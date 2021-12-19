function Lava1({lava1}) {
  if (lava1 === 'none') {
    return '';
  }

  return `
    <!-- Lava 1 -->
    <!-- Color -->
    <!-- filter -->
    <path d="M201.33 94.2312L205.4 114.032C203.808 113.761 202.153 113.448 200.459 113.128C186.293 110.453 169.479 107.277 165.223 123.731C163.365 130.915 166.057 135.213 168.676 139.394C171.205 143.431 173.665 147.359 171.9 153.669C169.751 161.35 158.067 166.325 148.671 162.995C138.746 159.477 139.443 144.904 145.148 137.85C150.853 130.795 151.677 120.031 150.853 112.871C150.454 109.41 148.742 106.935 146.502 105.251L148.841 93.8809C148.875 93.9478 148.92 94.0101 148.975 94.0656C150.853 95.9589 156.979 101.03 175.237 101.03C192.824 101.03 199.656 95.8196 201.33 94.2312Z" fill="url(#paint0_radial_931_113783)"/>
    <mask id="mask0_931_113783" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="141" y="93" width="65" height="72">
    <path d="M201.33 94.2302L205.4 114.031C203.808 113.76 202.153 113.447 200.459 113.127C186.293 110.452 169.479 107.276 165.223 123.73C163.365 130.914 166.057 135.212 168.676 139.393C171.205 143.43 173.665 147.358 171.9 153.668C169.751 161.349 158.067 166.324 148.671 162.994C138.746 159.476 139.443 144.903 145.148 137.849C150.853 130.794 151.677 120.03 150.853 112.87C150.454 109.409 148.742 106.934 146.502 105.25L148.841 93.8799C148.875 93.9469 148.92 94.0092 148.975 94.0646C150.313 95.4133 156.979 101.029 175.237 101.029C192.824 101.029 199.656 95.8187 201.33 94.2302Z" fill="url(#paint1_radial_931_113783)"/>
    </mask>
    <g mask="url(#mask0_931_113783)">
    <g filter="url(#filter0_f_931_113783)">
    <mask id="mask1_931_113783" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="125" y="94" width="101" height="132">
    <path d="M149.015 95.0639C149.102 94.6401 149.475 94.3359 149.907 94.3359H200.399C200.831 94.3359 201.205 94.6401 201.292 95.0639L225.146 211.159C225.227 211.555 225.041 211.955 224.68 212.137C220.777 214.109 198.528 224.817 175.153 225.128C151.731 225.438 129.441 214.178 125.603 212.141C125.253 211.954 125.077 211.562 125.157 211.173L149.015 95.0639Z" fill="#577096" fill-opacity="0.75"/>
    </mask>
    <g mask="url(#mask1_931_113783)">
    <g filter="url(#filter1_f_931_113783)">
    <path d="M207.362 76.1064C211.019 110.268 146.094 132.571 113.174 139.453L113.174 76.1064L207.362 76.1064Z" fill="url(#paint2_linear_931_113783)" fill-opacity="0.5"/>
    </g>
    <g filter="url(#filter2_f_931_113783)">
    <path d="M155.56 125.301C156.622 105.018 134.624 86.1828 129.082 66.9985C133.541 65.1973 144.203 70.7896 152.828 76.1247C163.609 82.7936 163.032 109.124 164.778 125.784C166.175 139.112 148.606 223.401 144.168 241.481L131.869 240.837C140.395 214.68 154.74 140.955 155.56 125.301Z" fill="url(#paint3_linear_931_113783)" fill-opacity="0.6"/>
    </g>
    </g>
    </g>
    </g>
    <defs>
    <filter id="filter0_f_931_113783" x="122.744" y="92.0573" width="104.986" height="135.355" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="1.13932" result="effect1_foregroundBlur_931_113783"/>
    </filter>
    <filter id="filter1_f_931_113783" x="112.262" y="75.195" width="96.1589" height="65.1696" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="0.455729" result="effect1_foregroundBlur_931_113783"/>
    </filter>
    <filter id="filter2_f_931_113783" x="128.17" y="65.7428" width="37.5978" height="176.65" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="0.455729" result="effect1_foregroundBlur_931_113783"/>
    </filter>
    <radialGradient id="paint0_radial_931_113783" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(156.087 109.102) rotate(53.0717) scale(37.8406 40.3077)">
    <stop offset="0.203125" style="stop-color: ${lava1.color1};"/>
    <stop offset="0.890625" style="stop-color: ${lava1.color2};"/>
    </radialGradient>
    <radialGradient id="paint1_radial_931_113783" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(156.087 109.101) rotate(53.0717) scale(37.8406 40.3077)">
    <stop offset="0.203125" stop-color="#71FF30"/>
    <stop offset="0.890625" stop-color="#25BC46"/>
    </radialGradient>
    <linearGradient id="paint2_linear_931_113783" x1="145.368" y1="123.01" x2="155.982" y2="72.2914" gradientUnits="userSpaceOnUse">
    <stop stop-color="white" stop-opacity="0"/>
    <stop offset="0.471361" stop-color="white"/>
    <stop offset="1" stop-color="white"/>
    </linearGradient>
    <linearGradient id="paint3_linear_931_113783" x1="160.882" y1="220.938" x2="202.107" y2="178" gradientUnits="userSpaceOnUse">
    <stop stop-color="#F2F2F2"/>
    <stop offset="0.0001" stop-color="#F2F2F2"/>
    <stop offset="0.0520833" stop-color="#F2F2F2" stop-opacity="0.948011"/>
    <stop offset="1" stop-color="#F2F2F2" stop-opacity="0"/>
    </linearGradient>
    </defs>
  `;
}

module.exports = {Lava1};
