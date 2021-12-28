const attributes = {
  none: 0,
  lavalien: 1,
  halo: 2,
  kitty: 3,
};

const backgrounds = {
  black: 0,
  blueberry: 1,
  lightBlueberry: 2,
  lightRaspberry: 3,
  lightStrawberry: 4,
  raspberry: 5,
  sky: 6,
  purple: 7,
  stars: 8,
  strawberry: 9,
};

const bases = {
  standard: 0,
  alien: 1,
  rocket: 2,
  bong: 3,
  pumpkin: 4,
  wizard: 5,
  witch: 6,
  kitty: 7,
};

const glasses = {
  normal: 0,
  holographic: 1,
};

const glassColorIndexes = {
  white: 0,
  black: 1,
  yellow: 2,
  orange: 3,
  pink: 4,
  purple: 5,
  blue: 6,
  red: 7,
};

const lavaColorIndexes = {
  none: 0,
  red: 1,
  green: 2,
  yellow: 3,
  blue: 4,
  purple: 5,
  lightBlue: 6,
  orange: 7,
  white: 8,
  pink: 9,
};

const rarities = {
  og: 0,
  gold: 1,
  diamond: 2,
  ruby: 3,
  emerald: 4,
  rainbow: 5
};

const overlays = {
  none: 0,
  bitcoin: 1,
  ethereum: 2,
  lavaCeption: 3,
  leaves: 4,
  peace: 5,
  smoke: 6,
  swirls: 7,
  yinYang: 8,
};

const glassColors = [
  '#FFFFFF', // white
  '#000000', // carbon / black
  '#FFFA8D', // yellow
  '#F59B13', // orange
  '#FF67EC', // pink
  '#A15BFA', // purple
  '#2D34E6', // blue / ocean
  '#F41B1B', // crimson / red
];

const lavaColors = [
  'none',
  {color1: '#F85449', color2: '#C53434'},
  {color1: '#71FF30', color2: '#25BC46'},
  {color1: '#FABE09', color2: '#FDF21B'},
  {color1: '#321A93', color2: '#3603FF'},
  {color1: '#5000B6', color2: '#7E5EFF'},
  {color1: '#21F6EA', color2: '#2183F6'},
  {color1: '#FFB800', color2: '#FF7800'},
  {color1: '#FFFFFF', color2: '#D0C9C9'},
  {color1: '#FF00D6', color2: '#D700B4'},
];

const attributeMetadata = [
  '',
  'Lavalien',
  'Halo',
  'Kitty',
];

const backgroundMetadata = [
  'Black',
  'Blueberry',
  'Light Blueberry',
  'Light Raspberry',
  'Light Strawberry',
  'Raspberry',
  'Sky',
  'Purple',
  'Stars',
  'Strawberry',
];

const baseMetadata = [
  'Standard',
  'Alien',
  'Rocket',
  'Bong',
  'Pumpkin',
  'Wizard',
  'Witch',
  'Kitty',
];

const glassMetadata = [
  'Glass',
  'Halographic Glass',
];

const glassColorMetadata = [
  'White', // snowy, pearly, bnlank,
  'Black', // carbon, onyx, ebony,
  'Yellow', // golden, saffron, amber,
  'Orange', // tangerine, apricot, coral, peach
  'Pink', // blossom, rosy, coral,reseate
  'Purple', // violet, lilac, lavender, royal,
  'Blue', // ocean, cerulean, aqua, azure, sky,
  'Red', // crimson, ruby, rosy, fiery, flame, blaze, cherry
];

const lavaColorMetadata = [
  'none', // carbon, onyx, ebony,
  'Red', // crimson, ruby, rosy, fiery, flame, blaze, cherry
  'Green', // leafy, emerald,
  'Yellow', // golden, saffron, amber,
  'Blue', // ocean, cerulean, aqua, azure, sky,
  'Purple', // violet, lilac, lavender, royal,
  'Light Blue',
  'Orange', // tangerine, apricot, coral, peach
  'White', // snowy, pearly, blank,
  'Pink', // blossom, rosy, coral,reseate
];

const rarityMetadata = [
  'OG',
  'Gold',
  'Diamond',
  'Ruby',
  'Emerald',
  'Rainbow',
];

const overlayMetadata = [
  'None',
  'Bitcoin',
  'Ethereum',
  'LavaCeption',
  '420 Leaves',
  'Peace',
  'Smoke',
  'Swirls',
  'Yin-Yang',
];

module.exports = {
  attributes,
  backgrounds,
  bases,
  glasses,
  glassColors,
  glassColorIndexes,
  lavaColors,
  lavaColorIndexes,
  rarities,
  overlays,
  attributeMetadata,
  backgroundMetadata,
  baseMetadata,
  glassMetadata,
  glassColorMetadata,
  lavaColorMetadata,
  rarityMetadata,
  overlayMetadata,
};
