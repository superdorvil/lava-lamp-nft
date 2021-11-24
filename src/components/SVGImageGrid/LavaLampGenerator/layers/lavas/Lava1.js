function Lava1({lava1}) {
  if (lava1.color === 'none') {
    return '';
  }

  return `
    <!-- Color -->
    <path d="M201.049 94.2304L205.113 114.031C203.523 113.76 201.871 113.447 200.18 113.127C186.038 110.452 169.252 107.276 165.003 123.73C163.148 130.914 165.836 135.212 168.45 139.394C170.975 143.43 173.431 147.358 171.668 153.669C169.523 161.35 157.859 166.325 148.479 162.994C138.57 159.476 139.266 144.903 144.961 137.849C150.656 130.794 151.48 120.031 150.656 112.87C150.259 109.409 148.549 106.935 146.313 105.251L148.649 93.8801C148.683 93.9471 148.727 94.0094 148.782 94.0649C150.117 95.4136 156.772 101.03 175 101.03C192.557 101.03 199.378 95.8189 201.049 94.2304Z" fill="url(#paint0_radial_702_67017)"/>

    <!-- Filter -->
    <mask id="mask0_702_67017" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="140" y="93" width="66" height="72">
      <path d="M201.049 94.2304L205.113 114.031C203.523 113.76 201.871 113.447 200.18 113.127C186.038 110.452 169.252 107.276 165.003 123.73C163.148 130.914 165.836 135.212 168.45 139.394C170.975 143.43 173.431 147.358 171.668 153.669C169.523 161.35 157.859 166.325 148.479 162.994C138.57 159.476 139.266 144.903 144.961 137.849C150.656 130.794 151.48 120.031 150.656 112.87C150.259 109.409 148.549 106.935 146.313 105.251L148.649 93.8801C148.683 93.9471 148.727 94.0094 148.782 94.0649C150.117 95.4136 156.772 101.03 175 101.03C192.557 101.03 199.378 95.8189 201.049 94.2304Z" fill="url(#paint1_radial_702_67017)"/>
    </mask>
    <g mask="url(#mask0_702_67017)">
      <g filter="url(#filter0_f_702_67017)">
        <mask id="mask1_702_67017" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="124" y="94" width="102" height="132">
          <path d="M148.862 95.0637C148.949 94.6399 149.322 94.3357 149.754 94.3357H200.246C200.678 94.3357 201.051 94.6399 201.138 95.0637L224.993 211.158C225.074 211.554 224.888 211.954 224.527 212.137C220.624 214.108 198.375 224.817 175 225.127C151.578 225.438 129.287 214.178 125.45 212.14C125.099 211.954 124.924 211.562 125.004 211.173L148.862 95.0637Z" fill="#577096" fill-opacity="0.75"/>
        </mask>
        <g mask="url(#mask1_702_67017)">
          <g filter="url(#filter1_f_702_67017)">
            <path d="M207.208 76.1064C210.866 110.268 145.941 132.571 113.021 139.453L113.021 76.1064L207.208 76.1064Z" fill="url(#paint2_linear_702_67017)" fill-opacity="0.5"/>
          </g>
          <g filter="url(#filter2_f_702_67017)">
            <path d="M155.407 125.301C156.469 105.018 134.471 86.1828 128.929 66.9985C133.388 65.1973 144.05 70.7896 152.675 76.1247C163.456 82.7936 162.879 109.124 164.625 125.784C166.022 139.112 148.453 223.401 144.015 241.481L131.716 240.837C140.242 214.68 154.587 140.955 155.407 125.301Z" fill="url(#paint3_linear_702_67017)" fill-opacity="0.6"/>
          </g>
        </g>
      </g>
    </g>

    <defs>
      <!-- Color -->
      <radialGradient id="paint0_radial_702_67017" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(155.882 109.102) rotate(53.1177) scale(37.8177 40.2646)">
        <stop offset="0.203125" style="stop-color: ${lava1.color1};"/>
        <stop offset="0.890625" style="stop-color: ${lava1.color2};"/>
      </radialGradient>

      <!-- Filter -->
      <filter id="filter0_f_702_67017" x="122.591" y="92.057" width="104.818" height="135.355" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="1.13932" result="effect1_foregroundBlur_702_67017"/>
      </filter>
      <filter id="filter1_f_702_67017" x="112.109" y="75.195" width="96.1589" height="65.1694" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.455729" result="effect1_foregroundBlur_702_67017"/>
      </filter>
      <filter id="filter2_f_702_67017" x="128.017" y="65.7426" width="37.5979" height="176.65" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.455729" result="effect1_foregroundBlur_702_67017"/>
      </filter>
      <radialGradient id="paint1_radial_702_67017" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(155.882 109.102) rotate(53.1177) scale(37.8177 40.2646)">
        <stop offset="0.203125" stop-color="#71FF30"/>
        <stop offset="0.890625" stop-color="#25BC46"/>
      </radialGradient>
      <linearGradient id="paint2_linear_702_67017" x1="145.215" y1="123.01" x2="155.829" y2="72.2914" gradientUnits="userSpaceOnUse">
        <stop stop-color="white" stop-opacity="0"/>
        <stop offset="0.471361" stop-color="white"/>
        <stop offset="1" stop-color="white"/>
      </linearGradient>
      <linearGradient id="paint3_linear_702_67017" x1="160.729" y1="220.938" x2="201.954" y2="178" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F2F2F2"/>
        <stop offset="0.0001" stop-color="#F2F2F2"/>
        <stop offset="0.0520833" stop-color="#F2F2F2" stop-opacity="0.948011"/>
        <stop offset="1" stop-color="#F2F2F2" stop-opacity="0"/>
      </linearGradient>
    </defs>
  `;
}

export default Lava1;
