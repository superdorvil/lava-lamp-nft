const LavaLamp = artifacts.require("LavaLamp")
const LavaBurner = artifacts.require("LavaBurner")
const LavaDAO = artifacts.require("LavaDAO")
const PurchaseSplitter = artifacts.require("PurchaseSplitter")
const RoyaltySplitter = artifacts.require("RoyaltySplitter")

const superdorvil = "0xCF634b6643E2453565c87Bc5456DD5a885ee00bc"
const zach = "0xc0B9f74D92e33fDb535529037749edE65F438637"
const kate = "0xD1EDEe4ACC142c44d720A4bb65fEFa2E1F88B4f3"
const nick = "0x3e4D8EFD688C327B96546Ed055740F52E7fF5898"

const purchaseAddrs = [superdorvil, zach, kate, nick] // add dao
const royaltyAddrs = [superdorvil, zach, kate, nick] // add dao, burner
const purchaseShares = [12.5, 12.5, 12.5, 12.5, 50]
const royaltyShares = [10, 10, 10, 10, 40, 20]

module.exports = function(deployer) {
  deployer.deploy(LavaDAO).then(async () => {
    const lavaDAOInstance = await LavaDAO.deployed()

    purchaseAddrs.push(lavaDAOInstance.address)
    royaltyAddrs.push(lavaDAOInstance.address)

    await deployer.deploy(PurchaseSplitter, purchaseAddrs, purchaseShares).then(async () => {
      const purchaseSplitterInstance = await PurchaseSplitter.deployed()

      deployer.deploy(LavaLamp, purchaseSplitterInstance.address).then(async () => {
        const lavaLampInstance = await LavaLamp.deployed()

        await deployer.deploy(LavaBurner, lavaDAOInstance, lavaLampInstance).then(async () => {
          const lavaBurnerInstance = await LavaBurner.deployed()

          royaltyAddrs.push(lavaBurnerInstance.address)
          deployer.deploy(RoyaltySplitter, purchaseAddrs, purchaseShares)
        })
      })
    })
  })
}
