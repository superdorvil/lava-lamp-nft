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
  const metadata = {
    name: generateNameMetadata({attribute, base, glass, glassColor, rarity, swag, tokenId}),
    decription: generateDescriptionMetadata({attribute, background, base, glass, glassColor, overlay, rarity, swag, tokenId}),
    image: uri,
    attributes: [
      {
        "trait_type": "Attribute",
        "value": attributeMetadata[parseInt(attribute, 10)],
      },
      {
        "trait_type": "Background",
        "value": backgroundMetadata[parseInt(background, 10)],
      },
      {
        "trait_type": "Base",
        "value": baseMetadata[parseInt(base, 10)],
      },
      {
        "trait_type": "Glass",
        "value": glassMetadata[parseInt(glass, 10)],
      },
      {
        "trait_type": "Glass Color",
        "value": glassColorMetadata[parseInt(glassColor, 10)],
      },
      {
        "trait_type": "Lava Count",
        "value": lavaCount,
      },
      {
        "trait_type": "Lava Color 1",
        "value": lavaColorMetadata[parseInt(lava1, 10)],
      },
      {
        "trait_type": "Lava Color 2",
        "value": lavaColorMetadata[parseInt(lava2, 10)],
      },
      {
        "trait_type": "Lava Color 3",
        "value": lavaColorMetadata[parseInt(lava3, 10)],
      },
      {
        "trait_type": "Lava Color 4",
        "value": lavaColorMetadata[parseInt(lava4, 10)],
      },
      {
        "trait_type": "Overlay",
        "value": overlayMetadata[parseInt(overlay, 10)],
      },
      {
        "trait_type": "Rarity",
        "value": rarityMetadata[parseInt(rarity, 10)],
      },
      {
        "trait_type": "Swagger",
        "value": swag === swagger.active ? swagMetadata[parseInt(base, 10)] : 'none',
      },
    ]
  };

  return metadata;
};

module.exports = {
  generateMetadata,
};
