const {
  Halo,
  LavaKitty,
  Lavalien,
} = require('./layers/attributes');
const {
  AllGoldEverything,
  Ash,
  Aurora,
  BubbleGum,
  CottonCandy,
  Magma,
  Peach,
  Plum,
  Royal,
  Sapphire,
  Sky,
  Star,
} = require('./layers/backgrounds');
const {
  DiamondAlien,
  DiamondBong,
  DiamondStandard,
  DiamondPumpkin,
  DiamondRocket,
  DiamondWizard,
  DiamondWitch,
  DiamondCat,
  EmeraldAlien,
  EmeraldBong,
  EmeraldStandard,
  EmeraldPumpkin,
  EmeraldRocket,
  EmeraldWizard,
  EmeraldWitch,
  EmeraldCat,
  GoldAlien,
  GoldBong,
  GoldStandard,
  GoldPumpkin,
  GoldRocket,
  GoldWizard,
  GoldWitch,
  GoldCat,
  OriginalAlien,
  OriginalBong,
  OriginalStandard,
  OriginalPumpkin,
  OriginalRocket,
  OriginalWizard,
  OriginalWitch,
  OriginalCat,
  RubyAlien,
  RubyBong,
  RubyStandard,
  RubyPumpkin,
  RubyRocket,
  RubyWizard,
  RubyWitch,
  RubyCat,
  RainbowAlien,
  RainbowBong,
  RainbowStandard,
  RainbowPumpkin,
  RainbowRocket,
  RainbowWizard,
  RainbowWitch,
  RainbowCat,
} = require('./layers/bases');
const {
  GlowingGlass,
  NormalGlass,
} = require('./layers/glass');
const {Lavas} = require('./layers/lavas');
const {
  Bitcoin,
  Ethereum,
  LavaCeption,
  Peace,
  Smoke,
  Swirl,
  Weed,
  Words,
  YinYang,
} = require('./layers/overlays');
const {
  Flames,
  Glasses,
  GoldenBubbles,
  GoldChain,
  Grillz,
  JpegBelt,
  JpegHat,
  StudEarring
} = require('./layers/swag');
const {
  attributes,
  backgrounds,
  bases,
  glasses,
  glassColors,
  lavaColors,
  rarities,
  overlays,
  swagger,
} = require('./GenerateTraits');
const {
  generateRandomNumber,
} = require('../utils');

const openTag = '<svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">';
const closeTag = '</svg>';

function generateAttributeSVG({index}) {
  let attribute = '';

  switch(index) {
    case attributes.none:
      attribute = '';
      break;
    case attributes.halo:
      attribute = Halo();
      break;
    case attributes.lavaKitty:
      attribute = LavaKitty();
      break;
    case attributes.lavalien:
      attribute = Lavalien();
      break;
    default:
    // add error checking
  }

  return attribute;
}

function generateBackgroundSVG({index}) {
  let background = '';

  switch(index) {
    case backgrounds.allGoldEverything:
      background = AllGoldEverything();
      break;
    case backgrounds.ash:
      background = Ash();
      break;
    case backgrounds.aurora:
      background = Aurora();
      break;
    case backgrounds.bubbleGum:
      background = BubbleGum();
      break;
    case backgrounds.cottonCandy:
      background = CottonCandy();
      break;
    case backgrounds.magma:
      background = Magma();
      break;
    case backgrounds.peach:
      background = Peach();
      break;
    case backgrounds.plum:
      background = Plum();
      break;
    case backgrounds.royal:
      background = Royal();
      break;
    case backgrounds.sapphire:
      background = Sapphire();
      break;
    case backgrounds.sky:
      background = Sky();
      break;
    case backgrounds.star:
      background = Star();
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
      case bases.cat:
        base = OriginalCat();
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
      case bases.cat:
        base = GoldCat();
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
      case bases.cat:
        base = DiamondCat();
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
      case bases.cat:
        base = RubyCat();
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
      case bases.cat:
        base = EmeraldCat();
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
      case bases.cat:
        base = RainbowCat();
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
    case glasses.glowing:
      glass = GlowingGlass({glassColor: glassColors[glassColor]});
      break;
    default:
    // add error checking
  }

  return glass;
}

function generateLavasSVG({lava1, lava2, lava3, lava4}) {
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
    case overlays.peace:
      overlay = Peace();
      break;
    case overlays.smoke:
      overlay = Smoke();
      break;
    case overlays.swirl:
      overlay = Swirl();
      break;
    case overlays.weed:
      overlay = Weed();
      break;
    case overlays.words:
      overlay = Words();
      break;
    case overlays.yinYang:
      overlay = YinYang();
      break;
    default:
    // add error checking
  }

  return overlay;
}

function generateSwagSVG({index, base, rarity}) {
  let swag = '';

  if (index === swagger.active) {
    switch(base) {
      case bases.standard:
        swag = JpegHat();
        break;
      case bases.alien:
        swag = Glasses();
        break;
      case bases.rocket:
        swag = Flames({rarity});
        break;
      case bases.bong:
        swag = GoldenBubbles();
        break;
      case bases.pumpkin:
        swag = Grillz();
        break;
      case bases.wizard:
        swag = GoldChain();
        break;
      case bases.witch:
        swag = JpegBelt();
        break;
      case bases.cat:
        swag = StudEarring();
        break;
        default:
        // add error checking
    }
  }

  return swag;
}

function generateLavaLamp({
  tokenId,
  attribute,
  background,
  base,
  glass,
  glassColor,
  lava1,
  lava2,
  lava3,
  lava4,
  overlay,
  swag,
  rarity
}) {
  if (tokenId === 420) {
    return `
      ${openTag}
      ${generateBackgroundSVG({index: background})}
      ${generateOverlaySVG({index: overlay})}
      ${generateGlassSVG({index: glass, glassColor})}
      ${generateLavasSVG({lava1, lava2, lava3, lava4})}
      ${generateBaseSVG({index: base, rarity})}
      ${generateAttributeSVG({index: attribute})}
      ${generateAttributeSVG({index: attributes.lavalien})}
      ${generateSwagSVG({index: swag, base, rarity})}
      ${closeTag}
    `;
  }

  return `
    ${openTag}
    ${generateBackgroundSVG({index: background})}
    ${generateOverlaySVG({index: overlay})}
    ${generateGlassSVG({index: glass, glassColor})}
    ${generateLavasSVG({lava1, lava2, lava3, lava4})}
    ${generateBaseSVG({index: base, rarity})}
    ${generateAttributeSVG({index: attribute})}
    ${generateSwagSVG({index: swag, base, rarity})}
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
        ${generateGlassSVG({index: 0, glassColor: 0})}
        ${generateBaseSVG({index: j, rarity: i})}
        ${closeTag}
      `);
    }
  }
//    ${generateLavasSVG({lava1: 1, lava2: 1, lava3: 1, lava4: 1})}

//  console.log('swag')
  // swag
  for (let i = 0; i < 8; i++) {
    if (i === bases.rocket) {
      for (j = 0; j < 6; j++) {
        assets.push(`
          ${openTag}
          ${generateBackgroundSVG({index: 1})}
          ${generateSwagSVG({index: swagger.active, base: i, rarity: j})}
          ${closeTag}
        `);
      }
    } else {
      assets.push(`
        ${openTag}
        ${generateBackgroundSVG({index: 1})}
        ${generateSwagSVG({index: swagger.active, base: i})}
        ${closeTag}
      `);
    }
  }

  //  console.log('overlays')
  // overlays
  for (let i = 0; i < 10; i++) {
    assets.push(`
      ${openTag}
      ${generateBackgroundSVG({index: 0})}
      ${generateOverlaySVG({index: i})}
      ${closeTag}
    `);
  }

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
  for (let i = 0; i < 12; i++) {
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

  return assets;
}

function generateRandomLavaLamp() {
  return generateLavaLamp({
    attribute: generateRandomNumber({n: 4}),
    background: generateRandomNumber({n: 12}),
    base: generateRandomNumber({n: 8}),
    glass: generateRandomNumber({n: 2}),
    glassColor: generateRandomNumber({n: 8}),
    lava1: generateRandomNumber({n: 10}),
    lava2: generateRandomNumber({n: 10}),
    lava3: generateRandomNumber({n: 10}),
    lava4: generateRandomNumber({n: 10}),
    overlay: generateRandomNumber({n: 9}),
    rarity: generateRandomNumber({n: 6}),
    swag: generateRandomNumber({n: 2}),
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

    lavaLamps.push(
      generateLavaLamp({
        attribute: generateRandomNumber({n: 4}),
        background: generateRandomNumber({n: 12}),
        base: generateRandomNumber({n: 8}),
        glass: generateRandomNumber({n: 2}),
        glassColor: generateRandomNumber({n: 8}),
        lava1,
        lava2,
        lava3,
        lava4,
        overlay: generateRandomNumber({n: 9}),
        rarity: generateRandomNumber({n: 6}),
        swag: generateRandomNumber({n: 2}),
      })
    );
  }

  return lavaLamps;
}

module.exports = {
  generateAssets,
  generate7979LavaLamps,
  generateLavaLamp,
  generateRandomLavaLamp,
  generateNRandomLavaLamps,
};
