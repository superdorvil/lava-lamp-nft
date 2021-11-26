import {
  Lavalien,
  Halo,
  Wings
} from './layers/attributes';
import {
  Black,
  Blueberry,
  LightBlueberry,
  LightRaspberry,
  LightStrawberry,
  Raspberry,
  Sky,
  Purple,
  Stars,
  Strawberry,
} from './layers/backgrounds';
import {
  DiamondAlien,
  DiamondBong,
  DiamondNormal,
  DiamondPumpkin,
  DiamondRocket,
  EmeraldAlien,
  EmeraldBong,
  EmeraldNormal,
  EmeraldPumpkin,
  EmeraldRocket,
  GoldAlien,
  GoldBong,
  GoldNormal,
  GoldPumpkin,
  GoldRocket,
  OriginalAlien,
  OriginalBong,
  OriginalNormal,
  OriginalPumpkin,
  OriginalRocket,
  RubyAlien,
  RubyBong,
  RubyNormal,
  RubyPumpkin,
  RubyRocket,
} from './layers/bases';
import {Lavas} from './layers/lavas';
import {
  Bitcoin,
  Ethereum,
  LavaCeption,
  Leaves,
  Peace,
  Smoke,
  Swirls,
  YinYang
} from './layers/overlays';

const lavaColors = [
  {color1: '', color2: '', color: 'none'},
  {color1: '#F85449', color2: '#C53434', color: 'red'},
  {color1: '#71FF30', color2: '#25BC46', color: 'green'},
  {color1: '#FABE09', color2: '#FDF21B', color: 'yellow'},
  {color1: '#321A93', color2: '#3603FF', color: 'blue'},
  {color1: '#5000B6', color2: '#7E5EFF', color: 'purple'},
  {color1: '#21F6EA', color2: '#2183F6', color: 'light blue'},
  {color1: '#FFB800', color2: '#FF7800', color: 'orange'},
  {color1: '#FFFFFF', color2: '#D0C9C9', color: 'white'},
  {color1: '#FF00D6', color2: '#D700B4', color: 'pink'},
];

const glassColors = [
  '#FFFFFF',
  '#000000',
];

function generateRandomNumber({n}) {
  const rand = Math.floor(Math.random() * n);

  return rand;
};

function generateAttributeSVG({index}) {
  let attribute = '';

  switch(index) {
    case 0:
      attribute = '';
      break;
    case 1:
      attribute = Lavalien();
      break;
    case 2:
      attribute = Halo();
      break;
    case 3:
      attribute = Wings();
      break;
    default:
    // add error checking
  }

  return attribute;
}

function generateBackgroundSVG({index}) {
  let background = '';

  switch(index) {
    case 0:
      background = Black();
      break;
    case 1:
      background = Blueberry();
      break;
    case 2:
      background = LightBlueberry();
      break;
    case 3:
      background = LightRaspberry();
      break;
    case 4:
      background = LightStrawberry();
      break;
    case 5:
      background = Raspberry();
      break;
    case 6:
      background = Sky();
      break;
    case 7:
      background = Purple();
      break;
    case 8:
      background = Stars();
      break;
    case 9:
      background = Strawberry();
      break;
    default:
    // add error checking
  }

  return background;
}

function generateBaseSVG({index}) {
  let base = '';

  switch(index) {
    case 0:
      base = DiamondAlien();
      break;
    case 1:
      base = DiamondBong();
      break;
    case 2:
      base = DiamondNormal();
      break;
    case 3:
      base = DiamondPumpkin();
      break;
    case 4:
      base = DiamondRocket();
      break;
    case 5:
      base = EmeraldAlien();
      break;
    case 6:
      base = EmeraldBong();
      break;
    case 7:
      base = EmeraldNormal();
      break;
    case 8:
      base = EmeraldPumpkin();
      break;
    case 9:
      base = EmeraldRocket();
      break;
    case 10:
      base = GoldAlien();
      break;
    case 11:
      base = GoldBong();
      break;
    case 12:
      base = GoldNormal();
      break;
    case 13:
      base = GoldPumpkin();
      break;
    case 14:
      base = GoldRocket();
      break;
    case 15:
      base = OriginalAlien();
      break;
    case 16:
      base = OriginalBong();
      break;
    case 17:
      base = OriginalNormal();
      break;
    case 18:
      base = OriginalPumpkin();
      break;
    case 19:
      base = OriginalRocket();
      break;
    case 20:
      base = RubyAlien();
      break;
    case 21:
      base = RubyBong();
      break;
    case 22:
      base = RubyNormal();
      break;
    case 23:
      base = RubyPumpkin();
      break;
    case 24:
      base = RubyRocket();
      break;
    default:
    // add error checking
  }

  return base;
}

function generateLavasSVG({lava1, lava2, lava3, lava4, glass}) {
  return Lavas({
    lava1: lavaColors[lava1],
    lava2: lavaColors[lava2],
    lava3: lavaColors[lava3],
    lava4: lavaColors[lava4],
    glassColor: glassColors[glass],
  });
}

function generateOverlaySVG({index}) {
  let overlay = '';

  switch(index) {
    case 0:
      overlay = '';
      break;
    case 1:
      overlay = Bitcoin();
      break;
    case 2:
      overlay = Ethereum();
      break;
    case 3:
      overlay = LavaCeption();
      break;
    case 4:
      overlay = Leaves();
      break;
    case 5:
      overlay = Peace();
      break;
    case 6:
      overlay = Smoke();
      break;
    case 7:
      overlay = Swirls();
      break;
    case 8:
      overlay = YinYang();
      break;
    default:
    // add error checking
  }

  return overlay;
}

function generateLavaLamp({attribute, background, base, glass, lava1, lava2, lava3, lava4, overlay}) {
  const openTag = '<svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">';
  const closeTag = '</svg>';

  return `
    ${openTag}
    ${generateBackgroundSVG({index: background})}
    ${generateOverlaySVG({index: overlay})}
    ${generateAttributeSVG({index: attribute})}
    ${generateBaseSVG({index: base})}
    ${generateLavasSVG({lava1, lava2, lava3, lava4, glass})}
    ${closeTag}
  `;
}

function generateAssets() {
  const openTag = '<svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">';
  const closeTag = '</svg>';
  const assets = [];

  // attributes
  for (let i = 0; i < 4; i++) {
    assets.push(`
      ${openTag}
      ${generateAttributeSVG({index: i})}
      ${closeTag}
    `);
  }

  // backgrounds
  for (let i = 0; i < 10; i++) {
    assets.push(`
      ${openTag}
      ${generateBackgroundSVG({index: i})}
      ${closeTag}
    `);
  }

  // bases
  for (let i = 0; i < 25; i++) {
    assets.push(`
      ${openTag}
      ${generateBackgroundSVG({index: 0})}
      ${generateBaseSVG({index: i, lava1: 0, lava2: 1, lava3: 2, lava4: 3, glass: 1})}
      ${closeTag}
    `);
  }

  // overlays
  for (let i = 0; i < 9; i++) {
    assets.push(`
      ${openTag}
      ${generateBackgroundSVG({index: 0})}
      ${generateOverlaySVG({index: i})}
      ${closeTag}
    `);
  }

  return assets;
}

function generateRandomLavaLamp() {
  return generateLavaLamp({
    attribute: generateRandomNumber({n: 4}),
    base: generateRandomNumber({n: 25}),
    background: generateRandomNumber({n: 10}),
    glass: generateRandomNumber({n: 2}),
    lava1: generateRandomNumber({n: 10}),
    lava2: generateRandomNumber({n: 10}),
    lava3: generateRandomNumber({n: 10}),
    lava4: generateRandomNumber({n: 10}),
    overlay: generateRandomNumber({n: 9}),
  });
}

function generateNRandomLavaLamps({n}) {
  const lavaLamps = [];

  for (let i = 0; i < n; i++) {
    lavaLamps.push(generateRandomLavaLamp());
  }

  return lavaLamps;
}

function generate7979LavaLamps() {
  const lavaLamps = [];
  let lavaIndex;
  let lava1;
  let lava2;
  let lava3;
  let lava4;

  for (let i = 0; i < 7800; i++) {
    lavaIndex = i;
    lava1 = lavaIndex % 10;
    lavaIndex = (lavaIndex - lava1) / 10;
    lava2 = lavaIndex % 10;
    lavaIndex = (lavaIndex - lava2) / 10;
    lava3 = lavaIndex % 10;
    lavaIndex = (lavaIndex - lava3) / 10;
    lava4 = lavaIndex % 10;
    lavaIndex = (lavaIndex - lava4) / 10;

    lavaLamps.push(generateLavaLamp({
      attribute: generateRandomNumber({n: 4}),
      base: generateRandomNumber({n: 10}),
      background: generateRandomNumber({n: 10}),
      glass: generateRandomNumber({n: 2}),
      lava1,
      lava2,
      lava3,
      lava4,
      overlay: generateRandomNumber({n: 7}),
    }));
  }

  return lavaLamps;
}

export {
  generateLavaLamp,
  generateRandomLavaLamp,
  generateNRandomLavaLamps,
};
