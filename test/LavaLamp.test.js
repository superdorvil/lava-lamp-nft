// burncount
// totalSupply
// provenance
// mint
// withdraw
// tokenURI
// burn
// get tokens owned by

const LavaLamp = artifacts.require("LavaLamp")

require("chai")
  .use(require("chai-as-promised"))
  .should()

contract('LavaLamp', (accounts) => {
  const [ lavaLampsETH, minter1, minter2 ] = accounts;
  let address;

  before(async () => {
    contract = await LavaLamp.new() // deployed
    address = contract.address
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it("has a name", async () => {
      const name = await contract.name()
      assert.equal(name, 'LavaLamp')
    })

    it("has a symbol", async () => {
      const symbol = await contract.symbol()
      assert.equal(symbol, 'LAVALAMP')
    })

    it("has correct tokenURI", async () => {
      let tokenURI = await contract.tokenURI(0)
      expect(tokenURI).to.equal("ipfs://QmRbRi2ixepCr4f2XEgDpUUHtHuhAaCQ92VqNievCiNc39/0.json")
      tokenURI = await contract.tokenURI(1)
      expect(tokenURI).to.equal("ipfs://QmRbRi2ixepCr4f2XEgDpUUHtHuhAaCQ92VqNievCiNc39/1.json")
      tokenURI = await contract.tokenURI(2)
      expect(tokenURI).to.equal("ipfs://QmRbRi2ixepCr4f2XEgDpUUHtHuhAaCQ92VqNievCiNc39/2.json")
    })
  })

  let price = web3.utils.toBN(web3.utils.toWei('30', 'finney'))

  describe('Minting', async () => {
    let ownerBalanceBefore
    let buyerBalanceBefore
    let reciept
    let transaction

    before(async ()=> {
      //console.log('getting balances')
      ownerBalanceBefore = await web3.eth.getBalance(lavaLampsETH);
      //console.log(ownerBalanceBefore)
      ownerBalanceBefore = web3.utils.toBN(ownerBalanceBefore)
      //console.log(ownerBalanceBefore)
      buyerBalanceBefore = await web3.eth.getBalance(minter1);
      //console.log(buyerBalanceBefore)
      buyerBalanceBefore = web3.utils.toBN(buyerBalanceBefore)
      //console.log(buyerBalanceBefore)
      //console.log('received balances')
    })

    it("creates a token", async () => {
      receipt = await contract.mint(1, { from: minter1, value: price })
      //console.log('start')
      //console.log(receipt)
      transaction = await web3.eth.getTransaction(receipt.tx);
      //console.log(transaction)
    })
  })

  describe('Tokens Owned By', async () => {
    it("creates a token", async () => {
      const ownersTokens = await contract.getTokensOwnedBy(lavaLampsETH);
      console.log(ownersTokens);
    })
  })
})
