// This file is unused intentionally
require('dotenv').config()
const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;
const baseUri = process.env.BASE_URI || "http://localhost:3000";
const contractAddress = process.env.CONTRACT_ADDRESS || "0x2035Ad61e93F6389CadA67B6C16B60Ec4665aDFA";
const network = process.env.NETWORK || "rinkeby";

const Web3 = require('web3');
const LavaLamp = require("./src/abis/LavaLamp.json");
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.ETH_CLIENT_URL));

const contract = new web3.eth.Contract(LavaLamp.abi, contractAddress);

const {
  generateLavaLamp,
  generateMetaData,
  generateRandomLavaLamp
} = require('./src/scripts/LavaLampGenerator');

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
    const metadata = await contract.methods.get(tokenId).call();

    const lavaCount = metadata[0];
    const lava1 = metadata[1];
    const lava2 = metadata[2];
    const lava3 = metadata[3];
    const lava4 = metadata[4];
    const base = metadata[5];
    const background = metadata[6];
    const sticker = metadata[7];
    const uri = `${baseUri}/token/lavalamp/${tokenId}/${lavaCount}/${lava1}/${lava2}/${lava3}/${lava4}/${base}/${background}/${sticker}`;

    const  metadataJson = generateMetaData(tokenId, lavaCount, lava1, lava2, lava3, lava4, base, background, sticker, uri);

    //cache.set(tokenId, result);
    res.json(metadataJson);
  }
  catch(error) {
      console.log(error);
      res.sendStatus(404);
  }
});

app.get('/token/lavalamp/:tokenId/:lavaCount/:lava1/:lava2/:lava3/:lava4/:base/:background/:sticker', async (req, res) => {
  const tokenId = req.params.tokenId;
  const lavaCount = req.params.lavaCount;
  const lava1 = req.params.lava1;
  const lava2 = req.params.lava2;
  const lava3 = req.params.lava3;
  const lava4 = req.params.lava4;
  const base = req.params.base;
  const background = req.params.background;
  const sticker = req.params.sticker;

  try {
    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(generateLavaLampSvg(background, base, lava1, lava2, lava3, lava4));
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

app.get('/svg', async (req, res) => {
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(generateRandomLavaLamp());
});

app.listen(port, () => {
  console.log(`App launched on ${port}`);
});
