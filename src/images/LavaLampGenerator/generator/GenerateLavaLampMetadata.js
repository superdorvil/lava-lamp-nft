const {
  attributes,
  bases,
  rarities,
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
} = require('./GenerateTraits');

function generateNameMetadata({
  attribute,
  base,
  glass,
  glassColor,
  rarity,
  swag,
  tokenId
}) {
  const b = baseMetadata[parseInt(base, 10)];
  const g = glassMetadata[parseInt(glass, 10)];
  const gc = glassColorMetadata[parseInt(glassColor, 10)];
  const r = rarityMetadata[parseInt(rarity, 10)];
  const s = ' ';
  let holy = '';
  let buddy = '';
  let sw = '';

  if (swag === swagger.active) {
    sw = 'and ' + swagMetadata[base] + ' swagger';
  }

  if (parseInt(attribute, 10) === attributes.halo) {
    holy = 'Angelic ';
  }

  if (parseInt(attribute, 10) === attributes.lavalien || parseInt(attribute, 10) === attributes.kitty) {
    buddy = ' with a ' + attributeMetadata[parseInt(attribute,10)] + ' buddy';
  }

  //cause santas a wizard of course
  if (parseInt(base, 10) === bases.wizard && // wizard
      parseInt(rarity, 10) === rarities.ruby) { // ruby
        return gc + s + g + s + holy + 'Santa LavaLamp ' + tokenId + buddy + sw;
  }

  return gc + s + g + s + holy + r + s + b + ' LavaLamp ' + tokenId + buddy + sw;
};

function generateDescriptionMetadata({
  attribute,
  background,
  base,
  glass,
  glassColor,
  overlay,
  rarity,
  swag,
  tokenId
}) {
  const b = baseMetadata[parseInt(base, 10)];
  const bg = backgroundMetadata[parseInt(background, 10)];
  const g = glassMetadata[parseInt(glass, 10)];
  const gc = glassColorMetadata[parseInt(glassColor, 10)];
  const o = overlay === 0 ? '' : ' with a ' + overlayMetadata[parseInt(overlay, 10)] + ' overlay';
  const r = rarityMetadata[parseInt(rarity, 10)];
  const s = ' ';
  let holy = '';
  let buddy = '';
  let sw = '';

  if (swag === swagger.active) {
    sw = 'and ' + swagMetadata[base] + ' swagger';
  }

  if (parseInt(attribute, 10) === attributes.halo) {
    holy = 'Angelic ';
  }

  if (parseInt(attribute, 10) === attributes.lavalien || parseInt(attribute, 10) === attributes.kitty) {
    buddy = ' with a ' + attributeMetadata[parseInt(attribute,10)] + ' buddy';
  }

  //cause santas a wizard of course
  if (baseMetadata[parseInt(base, 10)] === baseMetadata[5] && // wizard
      rarityMetadata[parseInt(rarity, 10)] === rarityMetadata[3]) { // ruby
        return gc + s + g + s + holy + 'Santa LavaLamp ' + tokenId + buddy + ' with a ' + bg + s + 'background' + o;
  }

  // update me, lol
  return gc + s + g + s + holy + r + s + b + ' LavaLamp ' + tokenId + buddy + sw + ' with a ' + bg + s + 'background' + o;
};

const generateMetadata = ({
  attribute,
  background,
  base,
  glass,
  glassColor,
  lavaCount,
  lava1,
  lava2,
  lava3,
  lava4,
  overlay,
  rarity,
  swag,
  tokenId,
  uri
}) => {
  const traits = [];

  if (attributeMetadata[parseInt(attribute, 10)] !== '') {
    traits.push({
      "trait_type": "Attribute",
      "value": attributeMetadata[parseInt(attribute, 10)],
    });
  }
  traits.push({
    "trait_type": "Background",
    "value": backgroundMetadata[parseInt(background, 10)],
  });
  traits.push({
    "trait_type": "Base",
    "value": baseMetadata[parseInt(base, 10)],
  }),
  traits.push({
    "trait_type": "Glass",
    "value": glassMetadata[parseInt(glass, 10)],
  });
  traits.push({
    "trait_type": "Glass Color",
    "value": glassColorMetadata[parseInt(glassColor, 10)],
  });
  traits.push({
    "trait_type": "Lava Count",
    "value": lavaCount,
  });
  if (lavaColorMetadata[parseInt(lava1, 10)] !== '') {
    traits.push({
      "trait_type": "Lava Color 1",
      "value": lavaColorMetadata[parseInt(lava1, 10)],
    });
  }
  if (lavaColorMetadata[parseInt(lava2, 10)] !== '') {
    traits.push({
      "trait_type": "Lava Color 2",
      "value": lavaColorMetadata[parseInt(lava2, 10)],
    });
  }
  if (lavaColorMetadata[parseInt(lava3, 10)] !== '') {
    traits.push({
      "trait_type": "Lava Color 3",
      "value": lavaColorMetadata[parseInt(lava3, 10)],
    });
  }
  if (lavaColorMetadata[parseInt(lava4, 10)] !== '') {
    traits.push({
      "trait_type": "Lava Color 4",
      "value": lavaColorMetadata[parseInt(lava4, 10)],
    });
  }
  if (overlayMetadata[parseInt(overlay, 10)] !== '') {
    traits.push({
      "trait_type": "Overlay",
      "value": overlayMetadata[parseInt(overlay, 10)],
    });
  }
  traits.push({
    "trait_type": "Base Color",
    "value": rarityMetadata[parseInt(rarity, 10)],
  });
  if (swag === swagger.active) {
    traits.push({
      "trait_type": "Swag",
      "value": swagMetadata[parseInt(base, 10)],
    });
  }
  if (tokenId === 420) {
    traits.push({
      "trait_type": "Attribute",
      "value": attributeMetadata[parseInt(attributes.lavalien, 10)],
    });
  }

  const metadata = {
    name: 'Lava Lamp ' + tokenId,//generateNameMetadata({attribute, base, glass, glassColor, rarity, swag, tokenId}),
    description: 'Move quickly, the floor is lava.',//generateDescriptionMetadata({attribute, background, base, glass, glassColor, overlay, rarity, swag, tokenId}),
    image: uri,
    attributes: traits,
  };

  return metadata;
};

module.exports = {
  generateMetadata,
};
