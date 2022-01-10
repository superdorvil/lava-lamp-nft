const attributes = {
  none: 0,
  halo: 1,
  lavalien: 3,
  lavaKitty: 2,
};

const backgrounds = {
  allGoldEverything: 0,
  ash: 1,
  bubbleGum: 2,
  cottonCandy: 3,
  magma: 4,
  peach: 5,
  plum: 6,
  royal: 7,
  sapphire: 8,
  sky: 9,
  star: 10,
};

const bases = {
  standard: 0,
  alien: 1,
  rocket: 2,
  bong: 3,
  pumpkin: 4,
  wizard: 5,
  witch: 6,
  cat: 7,
};

const glasses = {
  normal: 0,
  glowing: 1,
};

const glassColorIndexes = {
  pearl: 0,
  carbon: 1,
  amber: 2,
  tiger: 3,
  blossom: 4,
  purpleHaze: 5,
  cerulean: 6,
  molten: 7,
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
  peace: 4,
  smoke: 5,
  swirl: 6,
  weed: 7,
  words: 8,
  yinYang: 9,
};

const swagger = {
  inactive: 0,
  active: 1,
};

const glassColors = [
  '#FFFFFF', // pearl white
  '#000000', // carbon black
  '#FFFA8D', // amber yellow
  '#F59B13', // tiger orange
  '#FF67EC', // blossom pink
  '#A15BFA', // purplehaze purple
  '#2D34E6', // cerulean blue
  '#F41B1B', // molten red
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
  'Halo',
  'Lavalien',
  'Lava Kitty',
];

const backgroundMetadata = [
  'All Gold Everything',
  'Ash',
  'Bubble Gum',
  'Cotton Candy',
  'Magma',
  'Peach',
  'Plum',
  'Royal',
  'Sapphire',
  'Sky',
  'Star'
];

const baseMetadata = [
  'Standard',
  'Alien',
  'Rocket',
  'Bong',
  'Pumpkin',
  'Wizard',
  'Witch',
  'Cat',
];

const glassMetadata = [
  'Glass',
  'Glowing Glass',
];

const glassColorMetadata = [
  'Pearl',
  'Carbon',
  'Amber',
  'Tiger',
  'Blossom',
  'Purple Haze',
  'Cerulean',
  'Molten',
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
  'Peace',
  'Smoke',
  'Swirl',
  'Weed',
  'Words',
  'Yin-Yang'
];

const swagMetadata = [
  'JPEG Hat',
  'Flames',
  'Glasses',
  'Gold Bubbles',
  'Gold Chain',
  'Grillz',
  'JPEG Belt',
  'Stud Earring',
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
  swagger,
  attributeMetadata,
  backgroundMetadata,
  baseMetadata,
  glassMetadata,
  glassColorMetadata,
  lavaColorMetadata,
  rarityMetadata,
  overlayMetadata,
  swagMetadata,
};
