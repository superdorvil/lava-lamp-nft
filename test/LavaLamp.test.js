const {idList} = require('./IDList')
const LavaLamp = artifacts.require("LavaLamp")
function generateRandomNumber() {
  const rand = Math.floor(Math.random() * 7980)

  return rand
};
function metaDataToID(meta) {
  return meta[5] + meta[6] + meta[7] + meta[8]
}
const test = true

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
      let tokenURI = await contract.tokenURI(1197)
      expect(tokenURI).to.equal("http://localhost:3000/token/1197")
      //expect(tokenURI).to.equal("http://www.lavaLampsETH.tech/token/1197")
      tokenURI = await contract.tokenURI(6783)
      expect(tokenURI).to.equal("http://localhost:3000/token/6783")
      //expect(tokenURI).to.equal("http://www.lavaLampsETH.tech/token/6783")
    })

    it("owner has correct metadata", async () => {
      let owner = await contract.ownerOf(1197)
      expect(owner).to.equal(lavaLampsETH)
      let meta = await contract.getTokenMetadata(1197)
      //console.log(meta)

      //assert.equal(meta[0], )= lavalamp.attribute;
      //assert.equal(meta[1], )= lavalamp.background;
      //assert.equal(meta[2], )= lavalamp.base;
      //assert.equal(meta[3], )= lavalamp.glass;
      assert.equal(meta[4], 4)//= lavalamp.lava_count;
      assert.equal(meta[5], 1)//= lavalamp.lava_1;
      assert.equal(meta[6], 1)//= lavalamp.lava_2;
      assert.equal(meta[7], 9)//= lavalamp.lava_3;
      assert.equal(meta[8], 7)//= lavalamp.lava_4;
      //assert.equal(meta[9], )= lavalamp.overlay;
      //assert.equal(meta[10], )= lavalamp.rarity;

      // FIXME:: check each lava colors
      // FIXME:: how to handle the randoms
      // FIXME:: Mint all of them and store an array and check ids, lit

      owner = await contract.ownerOf(6783)
      expect(owner).to.equal(lavaLampsETH)
      meta = await contract.getTokenMetadata(6783)

      //assert.equal(meta[0], )= lavalamp.attribute;
      //assert.equal(meta[1], )= lavalamp.background;
      //assert.equal(meta[2], )= lavalamp.base;
      //assert.equal(meta[3], )= lavalamp.glass;
      assert.equal(meta[4], 4)//= lavalamp.lava_count;
      assert.equal(meta[5], 6)//= lavalamp.lava_1;
      assert.equal(meta[6], 7)//= lavalamp.lava_2;
      assert.equal(meta[7], 8)//= lavalamp.lava_3;
      assert.equal(meta[8], 3)//= lavalamp.lava_4;
      //assert.equal(meta[9], )= lavalamp.overlay;
      //assert.equal(meta[10], )= lavalamp.rarity;

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
      receipt = await contract.claim(1, { from: minter1, value: price })
      //console.log('start')
      //console.log(receipt)
      transaction = await web3.eth.getTransaction(receipt.tx);
      //console.log(transaction)

      totalSupply = await contract.totalSupply()
      assert.equal(totalSupply, 3)

      let meta = await contract.getTokenMetadata(3990)
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

      const allTokens = await contract.getAllTokenMetadata()
      allTokens.forEach((meta, i) => {
        console.log(metaDataToID(meta))
      });
      //console.log(allTokens)
    })
  })

  describe('Getting specific tokens', async () => {
    it("gets supply", async () => {
      let totalSupply = await contract.totalSupply()
      console.log('total supply = ' + totalSupply)
      assert.equal(totalSupply, 3)
        //let owner = await contract.ownerOf(1197)
        // lavaLampsETH
        // minter1
      await contract.claim(10, { from: minter1, value: price * 10 })
      const allTokens = await contract.getAllTokenMetadata()
      allTokens.forEach((meta, i) => {
        console.log(metaDataToID(meta))
      });

      totalSupply = await contract.totalSupply()
      assert.equal(totalSupply, 13)

      if (test) {
        const rand0 = generateRandomNumber()
        const rand1 = generateRandomNumber()
        const rand2 = generateRandomNumber()
        const rand3 = generateRandomNumber()
        const rand4 = generateRandomNumber()
        const rand5 = generateRandomNumber()
        const rand6 = generateRandomNumber()
        const rand7 = generateRandomNumber()
        const rand8 = generateRandomNumber()
        const rand9 = generateRandomNumber()
        const rand10 = generateRandomNumber()
        const rand11 = generateRandomNumber()
        const rand12 = generateRandomNumber()
        const rand13 = generateRandomNumber()
        const rand14 = generateRandomNumber()

        const token0 = await contract.tokenByIndex(0)
        const token1 = await contract.tokenByIndex(1)
        const token2 = await contract.tokenByIndex(2)
        const randToken0 = await contract.tokenByIndex(rand0)
        const randToken1 = await contract.tokenByIndex(rand1)
        const randToken2 = await contract.tokenByIndex(rand2)
        const randToken3 = await contract.tokenByIndex(rand3)
        const randToken4 = await contract.tokenByIndex(rand4)
        const randToken5 = await contract.tokenByIndex(rand5)
        const randToken6 = await contract.tokenByIndex(rand6)
        const randToken7 = await contract.tokenByIndex(rand7)
        const randToken8 = await contract.tokenByIndex(rand8)
        const randToken9 = await contract.tokenByIndex(rand9)
        const randToken10 = await contract.tokenByIndex(rand10)
        const randToken11 = await contract.tokenByIndex(rand11)
        const randToken12 = await contract.tokenByIndex(rand12)
        const randToken13 = await contract.tokenByIndex(rand13)
        const randToken14 = await contract.tokenByIndex(rand14)
        const token7979 = await contract.tokenByIndex(7979)

        assert.equal(token0, idList[0])
        assert.equal(token1, idList[1])
        assert.equal(token2, idList[2])
        assert.equal(token2, idList[2])
        assert.equal(randToken0, idList[rand0])
        assert.equal(randToken1, idList[rand1])
        assert.equal(randToken2, idList[rand2])
        assert.equal(randToken3, idList[rand3])
        assert.equal(randToken4, idList[rand4])
        assert.equal(randToken5, idList[rand5])
        assert.equal(randToken6, idList[rand6])
        assert.equal(randToken7, idList[rand7])
        assert.equal(randToken8, idList[rand8])
        assert.equal(randToken9, idList[rand9])
        assert.equal(randToken10, idList[rand10])
        assert.equal(randToken11, idList[rand11])
        assert.equal(randToken12, idList[rand12])
        assert.equal(randToken13, idList[rand13])
        assert.equal(randToken14, idList[rand14])
        assert.equal(token7979, idList[7979])

        const lavaLampsETHToken0 = await contract.tokenOfOwnerByIndex(lavaLampsETH, 0)
        const lavaLampsETHToken1 = await contract.tokenOfOwnerByIndex(lavaLampsETH, 1)
        const lavaLampsETHToken2 = await contract.tokenOfOwnerByIndex(lavaLampsETH, 2)
        const minter1Token0 = await contract.tokenOfOwnerByIndex(minter1, 0)
        const minter1Token1 = await contract.tokenOfOwnerByIndex(minter1, 1)
        const minter1Token2 = await contract.tokenOfOwnerByIndex(minter1, 2)
        const minter1Token3 = await contract.tokenOfOwnerByIndex(minter1, 3)

        console.log('lavaLampsETH tokens')
        console.log(lavaLampsETHToken0)
        console.log(lavaLampsETHToken1)
        console.log(lavaLampsETHToken2)
        console.log('minter1 tokens')
        console.log(minter1Token0)
        console.log(minter1Token1)
        console.log(minter1Token2)
        console.log(minter1Token3)
      } else {
        console.log('Just a heads up, change test variable to  true')
        console.log('Turned it false, because calling await a bunch of times takes too long')
        console.log('false skips some test and thus makes it go faster')
      }
    })
  })
})
