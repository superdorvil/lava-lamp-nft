const {rarities} = require('../../GenerateTraits');
const {DiamondFlames} = require('./flames/DiamondFlames');
const {EmeraldFlames} = require('./flames/EmeraldFlames');
const {GoldFlames} = require('./flames/GoldFlames');
const {OGFlames} = require('./flames/OGFlames');
const {RainbowFlames} = require('./flames/RainbowFlames');
const {RubyFlames} = require('./flames/RubyFlames');

function Flames({rarity}) {
  let flames = '';

  switch(rarity) {
    case rarities.og:
      flames = OGFlames();
      break;
    case rarities.gold:
      flames = GoldFlames();
      break;
    case rarities.diamond:
      flames = DiamondFlames();
      break;
    case rarities.ruby:
      flames = RubyFlames();
      break;
    case rarities.emerald:
      flames = EmeraldFlames();
      break;
    case rarities.rainbow:
      flames = RainbowFlames();
      break;
      default:
      // add error checking
  }

  return flames;
};

module.exports = {Flames};
