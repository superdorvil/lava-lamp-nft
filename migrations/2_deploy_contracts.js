// Add provenance hash
const LavaLamp = artifacts.require("LavaLamp")

module.exports = function(deployer) {
  deployer.deploy(LavaLamp)
}
