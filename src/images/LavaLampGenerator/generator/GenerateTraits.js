const {
  generateRandomNumber,
  shuffleArray,
} = require('../utils');

const attributes = {
  none: 0,
  halo: 1,
  lavaKitty: 2,
  lavalien: 3,
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
  '',
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
  'Lava Kitty',
  'Lavalien',
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
  '', // carbon, onyx, ebony,
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
  '',
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
  'JPEG Trucker Hat',
  'Shadez',
  'Flamez',
  'Gold Bubblez',
  'Grillz',
  'Gold Chain',
  'JPEG Buckle',
  'Bling',
];

function generateAttribute() {
  const random = generateRandomNumber({n: 100});
  let attribute = 0;

  if (random <  16)
      attribute = attributes.halo;
  else if (random <  21)
      attribute = attributes.lavalien;
  else if (random <  30)
      attribute = attributes.lavaKitty;
  else
      attribute = attributes.none;

  return attribute;
}

function generateBackground() {
  const random = generateRandomNumber({n: 100});
  let background = 0;

  if (random <  2)
      background = backgrounds.allGoldEverything;
  else if (random <  15)
      background = backgrounds.ash;
  else if (random <  22)
      background = backgrounds.bubbleGum;
  else if (random <  32)
      background = backgrounds.cottonCandy;
  else if (random <  44)
      background = backgrounds.magma;
  else if (random <  56)
      background = backgrounds.peach;
  else if (random <  62)
      background = backgrounds.plum;
  else if (random <  77)
      background = backgrounds.sapphire;
  else if (random <  85)
      background = backgrounds.sky;
  else if (random <  89)
      background = backgrounds.star;
  else
      background = backgrounds.royal;

  return background;
}

function generateBase() {
  const random = generateRandomNumber({n: 100});
  let base = 0;

  if (random <  23)
      base = bases.standard;
  else if (random <  31)
      base = bases.alien;
  else if (random <  49)
      base = bases.rocket;
  else if (random <  56)
      base = bases.bong;
  else if (random <  71)
      base = bases.pumpkin;
  else if (random <  83)
      base = bases.wizard;
  else if (random <  95)
      base = bases.witch;
  else
      base = bases.cat;

  return base;
}

function generateGlass() {
  const random = generateRandomNumber({n: 100});
  let glass = 0;

  if (random <  80)
      glass = glasses.normal;
  else
      glass = glasses.glowing;

  return glass;
}

function generateGlassColor() {
  const random = generateRandomNumber({n: 100});
  let glassColor = 0;

  if (random < 20)
      glassColor = glassColorIndexes.pearl;
  else if (random < 24)
      glassColor = glassColorIndexes.carbon;
  else if (random < 36)
      glassColor = glassColorIndexes.amber;
  else if (random < 51)
      glassColor = glassColorIndexes.tiger;
  else if (random < 60)
      glassColor = glassColorIndexes.blossom;
  else if (random < 66)
      glassColor = glassColorIndexes.purpleHaze;
  else if (random < 82)
      glassColor = glassColorIndexes.cerulean;
  else
      glassColor = glassColorIndexes.molten;

  return glassColor;
}

function generateOverlay() {
  const random = generateRandomNumber({n: 100});
  let overlay = 0;

  if (random <  15)
      overlay = overlays.smoke;
  else if (random <  25)
      overlay = overlays.swirl;
  else if (random <  35)
      overlay = overlays.lavaCeption;
  else if (random <  47)
      overlay = overlays.yinYang;
  else if (random <  58)
      overlay = overlays.peace;
  else if (random <  63)
      overlay = overlays.bitcoin;
  else if (random <  66)
      overlay = overlays.ethereum;
  else if (random <  72)
      overlay = overlays.weed;
  else if (random <  80)
      overlay = overlays.words;
  else
      overlay = overlays.none;

  return overlay;
}

function generateRarity() {
  const random = generateRandomNumber({n: 100});
  let rarity = 0;

  if (random <  30)
      rarity = rarities.og;
  else if (random <  34)
      rarity = rarities.gold;
  else if (random <  42)
      rarity = rarities.diamond;
  else if (random <  65)
      rarity = rarities.emerald;
  else if (random <  85)
      rarity = rarities.ruby;
  else
      rarity = rarities.rainbow;

  return rarity;
}



function generateSwag() {
  const random = generateRandomNumber({n: 100});
  let swag = '';

  if (random <  95)
      swag = swagger.inactive;
  else
      swag = swagger.active;

  return swag;
}

function idToLavaData(id) {
  let lavaIndex = id;
  let lavaCount = 0;
  let lava1 = 0;
  let lava2 = 0;
  let lava3 = 0;
  let lava4 = 0;

  lava4 = lavaIndex % 10;
  lavaIndex = (lavaIndex - lava4) / 10;
  lava3 = lavaIndex % 10;
  lavaIndex = (lavaIndex - lava3) / 10;
  lava2 = lavaIndex % 10;
  lavaIndex = (lavaIndex - lava2) / 10;
  lava1 = lavaIndex % 10;
  lavaIndex = (lavaIndex - lava1) / 10;

  if (lava4 > 0)
    lavaCount++;
  if (lava3 > 0)
    lavaCount++;
  if (lava2 > 0)
    lavaCount++;
  if (lava1 > 0)
    lavaCount++;

  if (id === 420) {
    return({
      tokenId: id,
      lavaCount,
      lava1,
      lava2,
      lava3,
      lava4,
      attribute: attributes.halo,
      background: backgrounds.allGoldEverything,
      base: bases.bong,
      glass: glasses.glowing,
      glassColor: glassColors.carbon,
      overlay: overlays.weed,
      rarity: rarities.gold,
      swag: swagger.active,
    });
  }

  return({
    tokenId: id,
    lavaCount,
    lava1,
    lava2,
    lava3,
    lava4,
    attribute: generateAttribute(),
    background: generateBackground(),
    base: generateBase(),
    glass: generateGlass(),
    glassColor: generateGlassColor(),
    overlay: generateOverlay(),
    rarity: generateRarity(),
    swag: generateSwag(),
  });
}

function generateTraits() {
  const ids = [];
  const traits = [];

  for (let i = 0; i < 7980; i++) {
    traits.push(idToLavaData(i));
  }

  return traits;
}

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
  generateTraits,
};
