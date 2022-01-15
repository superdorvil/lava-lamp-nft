function GlowingGlass({glassColor}) {
  return `
  <!-- Glowing Glass -->
    <g filter="url(#filter0_f_953_137978)">
    <path d="M148.717 95L125.019 209.98C124.948 210.324 125.078 210.673 125.367 210.873C128.479 213.027 147.033 225 175 225C202.967 225 221.521 213.027 224.633 210.873C224.922 210.673 225.052 210.324 224.981 209.98L201.283 95C201.249 95.0666 201.205 95.1285 201.15 95.1836C199.818 96.5241 193.18 102.106 175 102.106C156.82 102.106 150.182 96.5241 148.85 95.1836C148.795 95.1285 148.751 95.0666 148.717 95Z" fill="${glassColor}" fill-opacity="0.6"/>
    </g>
    <defs>
    <filter id="filter0_f_953_137978" x="-4" y="-4" width="358" height="358" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_953_137978"/>
    </filter>
    </defs>
  `;
}

module.exports = {GlowingGlass};
