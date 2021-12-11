const LavaLamp = artifacts.require("LavaLamp")

module.exports = function(deployer) {
  deployer.deploy(LavaLamp, "0xD1EDEe4ACC142c44d720A4bb65fEFa2E1F88B4f3")
}
