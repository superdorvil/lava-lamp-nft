const fs = require('fs');
const {
  BuyMoreLavaLamps,
} = require('./layers/buyMoreLavaLamps');
const {
  Lavalien,
  Halo,
  Kitty,
} = require('./layers/attributes');
const {
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
} = require('./layers/backgrounds');
const {
  DiamondAlien,
  DiamondBong,
  DiamondStandard,
  DiamondPumpkin,
  DiamondRocket,
  DiamondWizard,
  DiamondWitch,
  DiamondKitty,
  EmeraldAlien,
  EmeraldBong,
  EmeraldStandard,
  EmeraldPumpkin,
  EmeraldRocket,
  EmeraldWizard,
  EmeraldWitch,
  EmeraldKitty,
  GoldAlien,
  GoldBong,
  GoldStandard,
  GoldPumpkin,
  GoldRocket,
  GoldWizard,
  GoldWitch,
  GoldKitty,
  OriginalAlien,
  OriginalBong,
  OriginalStandard,
  OriginalPumpkin,
  OriginalRocket,
  OriginalWizard,
  OriginalWitch,
  OriginalKitty,
  RubyAlien,
  RubyBong,
  RubyStandard,
  RubyPumpkin,
  RubyRocket,
  RubyWizard,
  RubyWitch,
  RubyKitty,
  RainbowAlien,
  RainbowBong,
  RainbowStandard,
  RainbowPumpkin,
  RainbowRocket,
  RainbowWizard,
  RainbowWitch,
  RainbowKitty,
} = require('./layers/bases');
const {
  HolographicGlass,
  NormalGlass,
} = require('./layers/glass');
const {Lavas} = require('./layers/lavas');
const {
  Bitcoin,
  Ethereum,
  LavaCeption,
  Leaves,
  Peace,
  Smoke,
  Swirls,
  YinYang
} = require('./layers/overlays');
const {
  attributes,
  backgrounds,
  bases,
  glasses,
  glassColors,
  lavaColors,
  rarities,
  overlays,
} = require('./Traits');

const myArgs = process.argv.slice(2);
const assetDir = __dirname + '/generatedLamps/assets/';
const lamps7979 = __dirname + '/generatedLamps/lamps7979/';
const blackLamps7979 = __dirname + '/generatedLamps/blackLamps7979/';
const nLamps = __dirname + '/generatedLamps/nLamps/';
let blackLavaActive = false;

const openTag = '<svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">';
const closeTag = '</svg>';

function generateRandomNumber({n}) {
  const rand = Math.floor(Math.random() * n);

  return rand;
};

function generateAttributeSVG({index}) {
  let attribute = '';

  switch(index) {
    case attributes.none:
      attribute = '';
      break;
    case attributes.lavalien:
      attribute = Lavalien();
      break;
    case attributes.halo:
      attribute = Halo();
      break;
    case attributes.kitty:
      attribute = Kitty();
      break;
    default:
    // add error checking
  }

  return attribute;
}

function generateBackgroundSVG({index}) {
  let background = '';

  switch(index) {
    case backgrounds.black:
      background = Black();
      break;
    case backgrounds.blueberry:
      background = Blueberry();
      break;
    case backgrounds.lightBlueberry:
      background = LightBlueberry();
      break;
    case backgrounds.lightRaspberry:
      background = LightRaspberry();
      break;
    case backgrounds.lightStrawberry:
      background = LightStrawberry();
      break;
    case backgrounds.raspberry:
      background = Raspberry();
      break;
    case backgrounds.sky:
      background = Sky();
      break;
    case backgrounds.purple:
      background = Purple();
      break;
    case backgrounds.stars:
      background = Stars();
      break;
    case backgrounds.strawberry:
      background = Strawberry();
      break;
    default:
    // add error checking
  }

  return background;
}

function generateBaseSVG({index, rarity}) {
  let base = '';

  if (rarity === rarities.og) {
    switch(index) {
      case bases.standard:
        base = OriginalStandard();
        break;
      case bases.alien:
        base = OriginalAlien();
        break;
      case bases.rocket:
        base = OriginalRocket();
        break;
      case bases.bong:
        base = OriginalBong();
        break;
      case bases.pumpkin:
        base = OriginalPumpkin();
        break;
      case bases.wizard:
        base = OriginalWizard();
        break;
      case bases.witch:
        base = OriginalWitch();
        break;
      case bases.kitty:
        base = OriginalKitty();
        break;
        default:
        // add error checking
    }
  } else if (rarity === rarities.gold) {
    switch(index) {
      case bases.standard:
        base = GoldStandard();
        break;
      case bases.alien:
        base = GoldAlien();
        break;
      case bases.rocket:
        base = GoldRocket();
        break;
      case bases.bong:
        base = GoldBong();
        break;
      case bases.pumpkin:
        base = GoldPumpkin();
        break;
      case bases.wizard:
        base = GoldWizard();
        break;
      case bases.witch:
        base = GoldWitch();
        break;
      case bases.kitty:
        base = GoldKitty();
        break;
        default:
        // add error checking
    }
  } else if (rarity === rarities.diamond) {
    switch(index) {
      case bases.standard:
        base = DiamondStandard();
        break;
      case bases.alien:
        base = DiamondAlien();
        break;
      case bases.rocket:
        base = DiamondRocket();
        break;
      case bases.bong:
        base = DiamondBong();
        break;
      case bases.pumpkin:
        base = DiamondPumpkin();
        break;
      case bases.wizard:
        base = DiamondWizard();
        break;
      case bases.witch:
        base = DiamondWitch();
        break;
      case bases.kitty:
        base = DiamondKitty();
        break;
        default:
        // add error checking
    }
  } else if (rarity === rarities.ruby) {
    switch(index) {
      case bases.standard:
        base = RubyStandard();
        break;
      case bases.alien:
        base = RubyAlien();
        break;
      case bases.rocket:
        base = RubyRocket();
        break;
      case bases.bong:
        base = RubyBong();
        break;
      case bases.pumpkin:
        base = RubyPumpkin();
        break;
      case bases.wizard:
        base = RubyWizard();
        break;
      case bases.witch:
        base = RubyWitch();
        break;
      case bases.kitty:
        base = RubyKitty();
        break;
        default:
        // add error checking
    }
  } else if (rarity === rarities.emerald) {
    switch(index) {
      case bases.standard:
        base = EmeraldStandard();
        break;
      case bases.alien:
        base = EmeraldAlien();
        break;
      case bases.rocket:
        base = EmeraldRocket();
        break;
      case bases.bong:
        base = EmeraldBong();
        break;
      case bases.pumpkin:
        base = EmeraldPumpkin();
        break;
      case bases.wizard:
        base = EmeraldWizard();
        break;
      case bases.witch:
        base = EmeraldWitch();
        break;
      case bases.kitty:
        base = EmeraldKitty();
        break;
        default:
        // add error checking
    }
  } else if (rarity === rarities.rainbow) {
    switch(index) {
      case bases.standard:
        base = RainbowStandard();
        break;
      case bases.alien:
        base = RainbowAlien();
        break;
      case bases.rocket:
        base = RainbowRocket();
        break;
      case bases.bong:
        base = RainbowBong();
        break;
      case bases.pumpkin:
        base = RainbowPumpkin();
        break;
      case bases.wizard:
        base = RainbowWizard();
        break;
      case bases.witch:
        base = RainbowWitch();
        break;
      case bases.kitty:
        base = RainbowKitty();
        break;
        default:
        // add error checking
    }
  }

  return base;
}

function generateGlassSVG({index, glassColor}) {
  let glass = '';

  switch (index) {
    case glasses.normal:
      glass = NormalGlass({glassColor: glassColors[glassColor]});
      break;
    case glasses.holographic:
      glass = HolographicGlass({glassColor: glassColors[glassColor]});
      break;
    default:
    // add error checking
  }

  return glass;
}

function generateLavasSVG({lava1, lava2, lava3, lava4}) {
  if (blackLavaActive) {
    const black = {color1: 'none', color2: 'none'}
    let l1 = lava1 === 0 ? black : lavaColors[lava1];
    let l2 = lava2 === 0 ? black : lavaColors[lava2];
    let l3 = lava3 === 0 ? black : lavaColors[lava3];
    let l4 = lava4 === 0 ? black : lavaColors[lava4];

    return Lavas({
      lava1: l1,
      lava2: l2,
      lava3: l3,
      lava4: l4,
    });
  }

  return Lavas({
    lava1: lavaColors[lava1],
    lava2: lavaColors[lava2],
    lava3: lavaColors[lava3],
    lava4: lavaColors[lava4],
  });
}

function generateOverlaySVG({index}) {
  let overlay = '';

  switch(index) {
    case overlays.none:
      overlay = '';
      break;
    case overlays.bitcoin:
      overlay = Bitcoin();
      break;
    case overlays.ethereum:
      overlay = Ethereum();
      break;
    case overlays.lavaCeption:
      overlay = LavaCeption();
      break;
    case overlays.leaves:
      overlay = Leaves();
      break;
    case overlays.peace:
      overlay = Peace();
      break;
    case overlays.smoke:
      overlay = Smoke();
      break;
    case overlays.swirls:
      overlay = Swirls();
      break;
    case overlays.yinYang:
      overlay = YinYang();
      break;
    default:
    // add error checking
  }

  return overlay;
}

function generateLavaLamp({attribute, background, base, glass, glassColor, lava1, lava2, lava3, lava4, overlay, rarity}) {
  return `
    ${openTag}
    ${generateBackgroundSVG({index: background})}
    ${generateOverlaySVG({index: overlay})}
    ${generateAttributeSVG({index: attribute})}
    ${generateGlassSVG({index: glass, glassColor})}
    ${generateLavasSVG({lava1, lava2, lava3, lava4})}
    ${generateBaseSVG({index: base, rarity})}
    ${closeTag}
  `;
}

function generateAssets() {
  const assets = [];

//  console.log('bases with glass')
  // bases with glass
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 8; j++) {
      assets.push(`
        ${openTag}
        ${generateBackgroundSVG({index: 0})}
        ${generateGlassSVG({index: 1, glassColor: 0})}
        ${generateBaseSVG({index: j, rarity: i})}
        ${closeTag}
      `);
    }
  }
//    ${generateLavasSVG({lava1: 1, lava2: 1, lava3: 1, lava4: 1})}

//  console.log('attributes');
  // attributes
  for (let i = 0; i < 4; i++) {
    assets.push(`
      ${openTag}
      ${generateBackgroundSVG({index: 0})}
      ${generateAttributeSVG({index: i})}
      ${closeTag}
    `);
  }

//  console.log('backgrounds');
  // backgrounds
  for (let i = 0; i < 10; i++) {
    assets.push(`
      ${openTag}
      ${generateBackgroundSVG({index: i})}
      ${closeTag}
    `);
  }

//  console.log('bases')
  // bases
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 8; j++) {
      assets.push(`
        ${openTag}
        ${generateBackgroundSVG({index: 0})}
        ${generateBaseSVG({index: j, rarity: i})}
        ${closeTag}
      `);
    }
  }

  //  console.log('glasses')
  // glasses
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 8; j++) {
      assets.push(`
        ${openTag}
        ${generateBackgroundSVG({index: 0})}
        ${generateGlassSVG({index: i, glassColor: j})}
        ${closeTag}
      `);
    }
  }

//  console.log('lavas')
  // lavas
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 8; j++) {
      assets.push(`
        ${openTag}
        ${generateBackgroundSVG({index: 0})}
        ${generateLavasSVG({lava1: i === 0 ? j : 0, lava2: i === 1 ? j : 0, lava3: i === 2 ? j : 0, lava4: i === 3 ? j : 0})}
        ${closeTag}
      `);
    }
  }

//  console.log('lavas with glass')
  // lavas with glass
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 8; j++) {
      assets.push(`
        ${openTag}
        ${generateBackgroundSVG({index: 0})}
        ${generateGlassSVG({index: 0, glassColor: 0})}
        ${generateLavasSVG({lava1: i === 0 ? j : 0, lava2: i === 1 ? j : 0, lava3: i === 2 ? j : 0, lava4: i === 3 ? j : 0})}
        ${closeTag}
      `);
    }
  }

//  console.log('overlays')
  // overlays
  for (let i = 0; i < 9; i++) {
    assets.push(`
      ${openTag}
      ${generateBackgroundSVG({index: 0})}
      ${generateOverlaySVG({index: i})}
      ${closeTag}
    `);
  }

  saveNLavaLamps({lavaLamps: assets, dir: assetDir})

  return assets;
}

function generateRandomLavaLamp() {
  return generateLavaLamp({
    attribute: generateRandomNumber({n: 4}),
    background: generateRandomNumber({n: 10}),
    base: generateRandomNumber({n: 8}),
    glass: generateRandomNumber({n: 2}),
    glassColor: generateRandomNumber({n: 8}),
    lava1: generateRandomNumber({n: 10}),
    lava2: generateRandomNumber({n: 10}),
    lava3: generateRandomNumber({n: 10}),
    lava4: generateRandomNumber({n: 10}),
    overlay: generateRandomNumber({n: 9}),
    rarity: generateRandomNumber({n: 6}),
  });
}

function generateNRandomLavaLamps({n,save}) {
  const lavaLamps = [];

  for (let i = 0; i < n; i++) {
    lavaLamps.push(generateRandomLavaLamp());
  }

  if (save) {
    saveNLavaLamps({lavaLamps, dir: nLamps})
  }

  return lavaLamps;
}

function generate7979LavaLamps({save}) {
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

    lavaLamps.push(
      generateLavaLamp({
        attribute: generateRandomNumber({n: 4}),
        background: generateRandomNumber({n: 10}),
        base: generateRandomNumber({n: 8}),
        glass: generateRandomNumber({n: 2}),
        glassColor: generateRandomNumber({n: 8}),
        lava1,
        lava2,
        lava3,
        lava4,
        overlay: generateRandomNumber({n: 9}),
        rarity: generateRandomNumber({n: 6}),
      })
    );
  }

  if (save) {
    if (blackLavaActive) {
      saveNLavaLamps({lavaLamps, dir: blackLamps7979});
    } else {
      saveNLavaLamps({lavaLamps, dir: lamps7979});
    }
  }

  return lavaLamps;
}

function saveLavaLamp({lavaLamp, id, dir}) {
  const filePath = dir + 'lamp_' + id + '.svg';

  // writeFile function with filename, content and callback function
  fs.writeFile(filePath, lavaLamp, function (err) {
    if (err) throw err;
  });
}

function saveNLavaLamps({lavaLamps, dir}) {
  // Check if files exist
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }

  // save all lamps
  lavaLamps.forEach((lavaLamp, id) => {
    saveLavaLamp({lavaLamp, id, dir});
  });
}

if (myArgs[0] === 'generate some random bullshit') {
  generateAssets();
  //generateNRandomLavaLamps({n: 10, save: true});
  generate7979LavaLamps({save: true});
}

module.exports = {
  generateLavaLamp,
  generateRandomLavaLamp,
  generateNRandomLavaLamps,
  BuyMoreLavaLamps,
};
