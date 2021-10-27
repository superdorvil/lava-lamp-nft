// This file is unused intentionally
require('dotenv').config()
//const react = require('react');
//const ReactDOMServer = require('react-dom/server');
const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;
const baseUri = process.env.BASE_URI || "http://localhost:3000";
const contractAddress = process.env.CONTRACT_ADDRESS || "0xc757Ebcf8Da8dD2a6750E3a9b32734bA4B068730";
const network = process.env.NETWORK || "rinkeby";

//const App = require('./src/App');

const Web3 = require('web3');
const LavaLamp = require("./src/abis/LavaLamp.json");
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.ETH_CLIENT_URL));

const contract = new web3.eth.Contract(LavaLamp.abi, contractAddress);

const { generateLavaLamp } = require('./src/scripts/LavaLampGenerator');

//const NodeCache = require( "node-cache" );
//const cache = new NodeCache({
//    stdTTL: 600,
//    checkperiod: 0,
//    useClones: false,
//});

//app.get('/', function(req, res) {
//  res.sendFile(path.join(__dirname, build, 'index.html'));
//});

app.use(express.static(path.join(__dirname, 'build')));

/*app.use('^/$', (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if(err) {
      console.log(err);
      return res.status(500).send("Some error happend");
    }

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString()}</div>`
      )
    );
  });
});*/

app.get('/token/:tokenId', async (req, res) => {
  const tokenId = req.params.tokenId;

  // what the faq is this??? to fak or to faq, that is the question
  //res.setHeader('Content-Type', 'application/json');

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

    let metadataJson = {
      name: 'Lamp Name, Probably the base and SerialNumber',
      decription: 'LavaLamps are lit!!!',
      image: `${baseUri}/token/lavalamp/${tokenId}/${lavaCount}/${lava1}/${lava2}/${lava3}/${lava4}/${base}/${background}/${sticker}`,
      attributes: [
        {
          "trait_type": "Lava Count",
          "value": lavaCount,
        },
        {
          "trait_type": "Color 1",
          "value": lava1,
        },
        {
          "trait_type": "Color 2",
          "value": lava2,
        },
        {
          "trait_type": "Color 3",
          "value": lava3,
        },
        {
          "trait_type": "Color 4",
          "value": lava4,
        },
        {
          "trait_type": "Base",
          "value": base,
        },
        {
          "trait_type": "Background",
          "value": background,
        },
        {
          "trait_type": "Sticker",
          "value": "Should we actually do stickers? It would look weird on the alien lamp, maybe on the normal base only???, i like that",
        },
      ]
    };

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

  let lamp;
  let img;

  try {
    (async () => {
      lamp = await generateLavaLamp(background, base, lava1, lava2, lava3, lava4);

      img = Buffer.from(lamp, 'base64');
      res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': img.length
      });
      res.end(img);
    })();

    //res.setHeader('Content-Type', 'image/svg+xml');
  }
  catch {
    res.sendStatus(404)
  }
});

//app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => {
  console.log(`App launched on ${port}`);
});
