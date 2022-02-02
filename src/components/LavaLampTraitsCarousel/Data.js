import alienLamp from '../../../src/images/LavaLampTraitsAlien.png';
import kittyLamp from '../../../src/images/LavaLampTraitsKitty.png';
import rocketLamp from '../../../src/images/LavaLampTraitsRocket.png';

const Data = [
  {
    title: 'SWAGGER',
    subtitle: 'EVERY BASE CAN HAVE SWAG',
    ender: 'SEEMS RARE...',
    description: 'You have a 5% chance of swag! This is a special trait.  Of the 8 base types, they each have their own special attribute.  A rocket can have gold flames.  A bong can have gold bubbles. A pumkpin will have Grillz.',
    img: rocketLamp,
    baseData: '18%',
    baseUnits: 'ROCKET BASE',
    rarityData: '20%',
    rarityUnits: 'RUBY',
    overlayData: '5%',
    overlayUnits: 'BITCOINS',
    backgroundData: '2%',
    backgroundUnits: 'ALL GOLD EVERYTHING',
    attributeData: '5%',
    attributeUnits: 'SWAGGER',
  },
  {
    title: 'YOUR TRAITS',
    subtitle: 'EVERY LAVA LAMP IS UNIQUE',
    ender: 'WITH VARYING LEVELS OF RARITY',
    description: 'Generated from 8 base types with 6 colors for each, 10 backgrounds with 8 fun overlay patterns, 8 glass colors, 4 additional attributes and of course, every lamp has a unique lava color tied to it’s serial number!',
    img: alienLamp,
    baseData: '8%',
    baseUnits: 'ALIEN BASE',
    rarityData: '8%',
    rarityUnits: 'DIAMOND',
    overlayData: '10%',
    overlayUnits: 'SWIRL',
    backgroundData: '11%',
    backgroundUnits: 'ROYAL',
    attributeData: '5%',
    attributeUnits: 'LAVALIEN',
  },
  {
    title: 'SERIAL NUMBERS',
    subtitle: '4 LAVA BUBBLES CORRESPOND TO THE SERIAL NUMBER',
    ender: '100% LEGIT',
    description: 'Your 4 lava bubbles are tied to your serial number! Each digit represents a different color creating a set of lava that’s unique to you!',
    img: kittyLamp,
    baseData: '5%',
    baseUnits: 'CAT BASE',
    rarityData: '15%',
    rarityUnits: 'RAINBOW',
    overlayData: '6%',
    overlayUnits: 'WEED',
    backgroundData: '7%',
    backgroundUnits: 'BUBBLEGUM',
    attributeData: '9%',
    attributeUnits: 'LAVAKITTY',
  }
];

export default Data;
