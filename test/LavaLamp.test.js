const LavaLamp = artifacts.require("LavaLamp")

require("chai")
  .use(require("chai-as-promised"))
  .should()

contract('LavaLamp', (accounts) => {
  let contract

  before(async () => {
    contract = await LavaLamp.new() // deployed
  })
console.log(contract);
  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = contract.address
      //console.log(address)
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
      let tokenURI = await contract.tokenURI(1197)
      console.log(tokenURI);
      expect(tokenURI).to.equal("http://localhost:3000/token/1197")//expect(tokenURI).to.equal("http://www.superdorvil.tech/token/1197")
      tokenURI = await contract.tokenURI(6783)
      console.log(tokenURI);
      expect(tokenURI).to.equal("http://localhost:3000/token/6783")//expect(tokenURI).to.equal("http://www.superdorvil.tech/token/6783")
    })

    it("owner has correct metadata", async () => {
      let owner = await contract.ownerOf(1197)
      expect(owner).to.equal(accounts[0])
      let meta = await contract.get(1197)
      // console.log(meta)

      /*
      assert.equal(meta[0], 1)
      assert.equal(meta[1], 1)
      assert.equal(meta[2], 1)
      assert.equal(meta[3], 1)
      */

      // FIXME:: check each lava colors
      // FIXME:: how to handle the randoms
      // FIXME:: Mint all of them and store an array and check ids, lit

      owner = await contract.ownerOf(6783)
      expect(owner).to.equal(accounts[0])
      meta = await contract.get(6783)

      //console.log(meta)
      /*assert.equal(meta[0], 2)
      assert.equal(meta[1], 2)
      assert.equal(meta[2], 2)
      assert.equal(meta[3], 2)*/

      //totalSupply = await contract.totalSupply()
      //assert.equal(totalSupply, 6)
    })
  })

// BN stands for big number
// Not sure why we need it, learning now

  // wei is the smallet unit of ether there is and you should always make calculations in wei
  // convert for display reasons only
  // There are more conversion, see website below
  // https://web3js.readthedocs.io/en/v1.2.11/web3-utils.html#towei
  let price = web3.utils.toBN(web3.utils.toWei('30', 'finney'))

  describe('Minting', async () => {
    let ownerBalanceBefore
    let buyerBalanceBefore
    let reciept
    let transaction

    before(async ()=> {
      //console.log('getting balances')
      ownerBalanceBefore = await web3.eth.getBalance(accounts[0]);
      //console.log(ownerBalanceBefore)
      ownerBalanceBefore = web3.utils.toBN(ownerBalanceBefore)
      //console.log(ownerBalanceBefore)
      buyerBalanceBefore = await web3.eth.getBalance(accounts[1]);
      //console.log(buyerBalanceBefore)
      buyerBalanceBefore = web3.utils.toBN(buyerBalanceBefore)
      //console.log(buyerBalanceBefore)
      //console.log('received balances')
    })

    it("creates a token", async () => {
      receipt = await contract.claim(1, { from: accounts[1], value: price })
      //console.log('start')
      //console.log(receipt)
      transaction = await web3.eth.getTransaction(receipt.tx);
      //console.log(transaction)

      //totalSupply = await contract.totalSupply()
      //assert.equal(totalSupply, 7)

      let meta = await contract.get(3990)
      //console.log(meta)

      //assert.equal(meta[0], )= lavalamp.attribute;
      //assert.equal(meta[1], )= lavalamp.background;
      //assert.equal(meta[2], )= lavalamp.base;
      //assert.equal(meta[3], )= lavalamp.glass;
      assert.equal(meta[4], 3)//= lavalamp.lava_count;
      assert.equal(meta[5], 3)//= lavalamp.lava_1;
      assert.equal(meta[6], 9)//= lavalamp.lava_2;
      assert.equal(meta[7], 9)//= lavalamp.lava_3;
      assert.equal(meta[8], 0)//= lavalamp.lava_4;
      //assert.equal(meta[9], )= lavalamp.overlay;
      //assert.equal(meta[10], )= lavalamp.rarity;
    })
  })
})
