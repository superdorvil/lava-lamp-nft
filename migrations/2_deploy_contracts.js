// Add provenance hash
const LavaLamp = artifacts.require("LavaLamp")
const provenance = "de7ef1ed5fc86f75c6cfb91ac058bd2a2319da98e7548872199f3d80e17e6f08";
const cid = "QmcYATwnfG4a3byaV7ajrgNBfj9GbTa6EvZmReBWg9WgCB";
const baseURI = "ipfs://" + cid + "/";

module.exports = function(deployer) {
  deployer.deploy(LavaLamp, provenance, baseURI)
}
