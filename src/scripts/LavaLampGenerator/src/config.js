const layersOrder = [
    { name: 'background', number: 9 },
    { name: 'bases', number: 5 },
    { name: 'lava 1', number: 9 },
    { name: 'lava 2', number: 9 },
    { name: 'lava 3', number: 9 },
    { name: 'lava 4', number: 9 },
  //  { name: 'stickers', number: 3 },
];

const format = {
    width: 230,
    height: 230
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 5;

module.exports = { layersOrder, format, rarity, defaultEdition };
