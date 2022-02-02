// Add provenance hash
const LavaLamp = artifacts.require("LavaLamp")
const provenance = "ca3a73ded1617863b39f16cea9a80ff42ce76f87c9cec7ecb6d67447f2b5e2ab";
const cid = "QmeDPr9rD9CJftSKGr7P2XdZjfzvmoMuhsTPWERfJyRf9A";
const baseURI = "ipfs://" + cid + "/";

module.exports = function(deployer) {
  deployer.deploy(LavaLamp, provenance, baseURI)
}
