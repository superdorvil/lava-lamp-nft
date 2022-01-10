require('dotenv').config()
const express = require('express');
const path = require('path');
const Web3 = require('web3');
const {
  generateLavaLamp,
  generateMetadata,
} = require('./src/images/LavaLampGenerator/');

const app = express();

const port = process.env.PORT || 3000;
const baseUri = process.env.BASE_URI || 'http://localhost:3000';
const contractAddress = process.env.CONTRACT_ADDRESS;
const network = process.env.NETWORK || 'rinkeby'; // rink or main probably
// This is either ganache or rinkeby
//const web3 = new Web3(new Web3.providers.HttpProvider(`https://${network}.infura.io/v3/${infuraToken}`));
// ETH_CLIENT_URL="http://localhost:7545"
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.ETH_CLIENT_URL));
const LavaLamp = require("./src/abis/LavaLamp.json");
const contract = new web3.eth.Contract(LavaLamp.abi, contractAddress);

//const NodeCache = require( "node-cache" );
//const cache = new NodeCache({
//    stdTTL: 600,
//    checkperiod: 0,
//    useClones: false,
//});

app.use(express.static(path.join(__dirname, 'build'))); // use build for development

app.get('/token/:tokenId', async (req, res) => {
  const tokenId = req.params.tokenId;

  res.setHeader('Content-Type', 'application/json');

  //const value = cache.get(tokenId);
  //if (value !== undefined){
  //    res.json(value)
  //    return
  //}

  try {
    const metadata = await contract.methods.getTokenMetadata(tokenId).call();

    const attribute = metadata[0];
    const background = metadata[1];
    const base = metadata[2];
    const glass = metadata[3];
    const glassColor = metadata[4];
    const lavaCount = metadata[5];
    const lava1 = metadata[6];
    const lava2 = metadata[7];
    const lava3 = metadata[8];
    const lava4 = metadata[9];
    const overlay = metadata[10];
    const rarity = metadata[11];
    const swag = metadata[12];

    const uri = `${baseUri}/token/lavalamp/${tokenId}/${attribute}/${background}/${base}/${glass}/${glassColor}/${lavaCount}/${lava1}/${lava2}/${lava3}/${lava4}/${overlay}/${rarity}/${swag}`;

    const  metadataJson = generateMetadata({
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
      tokenId,
      rarity,
      swag,
      uri,
    });

    //cache.set(tokenId, result);
    //res.setHeader('Content-Type', 'application/json');
    res.json(metadataJson);
  }
  catch(error) {
      console.log(error);
      res.sendStatus(404);
  }
});

app.get('/token/lavalamp/:tokenId/:attribute/:background/:base/:glass/:glassColor/:lavaCount/:lava1/:lava2/:lava3/:lava4/:overlay/:rarity/:swag', async (req, res) => {
  const tokenId = parseInt(req.params.tokenId, 10);
  const attribute = parseInt(req.params.attribute, 10);
  const background = parseInt(req.params.background, 10);
  const base = parseInt(req.params.base, 10);
  const glass = parseInt(req.params.glass, 10);
  const glassColor = parseInt(req.params.glassColor, 10);
  const lavaCount = parseInt(req.params.lavaCount, 10);
  const lava1 = parseInt(req.params.lava1, 10);
  const lava2 = parseInt(req.params.lava2, 10);
  const lava3 = parseInt(req.params.lava3, 10);
  const lava4 = parseInt(req.params.lava4, 10);
  const overlay = parseInt(req.params.overlay, 10);
  const rarity = parseInt(req.params.rarity, 10);
  const swag = parseInt(req.params.rarity, 10);

  try {
    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(generateLavaLamp({
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
      rarity,
      swag,
    }));
  }
  catch {
    res.sendStatus(404)
  }
});

app.get('/opensea', async (req, res) => {
  if (baseUri === 'http://www.superdorvil.tech') {
    res.redirect(`https://testnets.opensea.io/assets/${contractAddress}/0`);
  } else {
    res.redirect('https://opensea.io');
  }
});

app.listen(port, () => {
  console.log(`App launched on ${port}`);
});
