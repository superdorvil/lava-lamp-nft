function Glass({glassColor}) {
  const pathStart = '<path d="M148.647 94.3351L124.888 210.017C124.817 210.363 124.947 210.714 125.237 210.915C128.356 213.082 146.958 225.128 174.998 225.128C203.038 225.128 221.64 213.082 224.76 210.915C225.05 210.714 225.18 210.363 225.109 210.017L201.35 94.3351C201.316 94.4021 201.271 94.4644 201.216 94.5198C199.881 95.8685 193.226 101.484 174.998 101.484C156.771 101.484 150.116 95.8685 148.78 94.5198C148.725 94.4644 148.681 94.4021 148.647 94.3351Z" fill="'
  const pathEnd = '" fill-opacity="0.75"/>;';

  return pathStart + glassColor + pathEnd;
}

export default Glass;