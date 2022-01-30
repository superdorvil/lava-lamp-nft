const {expectRevert} = require('@openzeppelin/test-helpers');
const {idList} = require('./IDList')
const tokensOwnedHelper = (tokenIds) => {
  const tokensOwned = [];
  tokenIds.forEach((owned, i) => {
    if (owned) {
      tokensOwned.push(i);
    }
  });

  return tokensOwned;
}
function generateRandomNumber() {
  const rand = Math.floor(Math.random() * 7980)

  return rand
};

const test = true;

const getWei = (weiBalance) => {
    let ethBalance = web3.utils.fromWei(weiBalance, 'ether');
    console.log(ethBalance);
}

const LavaLamp = artifacts.require("LavaLamp")

const mint7979Test = true

require("chai")
  .use(require("chai-as-promised"))
  .should()

contract('LavaLamp', (accounts) => {
  let price = web3.utils.toBN(web3.utils.toWei('30', 'finney'))
  let [ lavaLampsETH, minter1, minter2 ] = accounts;
  minter1 = lavaLampsETH;
  let address;

  before(async () => {
    contract = await LavaLamp.new() // deployed
    contract2 = await LavaLamp.new() // deployed
    address = contract.address
    await contract.mint(10, { from: lavaLampsETH })
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

  describe('Minting', async () => {
    let ownerBalanceBefore
    let buyerBalanceBefore
    let reciept
    let transaction

    before(async ()=> {
      //console.log('getting balances')
      ownerBalanceBefore = await web3.eth.getBalance(lavaLampsETH);
      //console.log(ownerBalanceBefore)
      ownerBalanceBefore = web3.utils.toBN(ownerBalanceBefore);
      //console.log(ownerBalanceBefore)
      buyerBalanceBefore = await web3.eth.getBalance(minter1);
      //console.log(buyerBalanceBefore)
      buyerBalanceBefore = web3.utils.toBN(buyerBalanceBefore);
      //console.log(buyerBalanceBefore)
      //console.log('received balances')
    })

    it("creates a token", async () => {
    //  receipt = await contract.mint(1, { from: minter1, value: price });
      //console.log('start')
      //console.log(receipt)
    //  transaction = await web3.eth.getTransaction(receipt.tx);
      //console.log(transaction)
    })
  })

  describe('Tokens Owned By', async () => {
    it("creates a token", async () => {
      const ownersTokens = await contract.getTokensOwnedBy(lavaLampsETH);
      console.log(tokensOwnedHelper(ownersTokens));
    })
  })

  describe('Burning Lamps',async () => {
    it("burns lamp", async () => {
      let tSupply = await contract.totalSupply();
      assert.equal(tSupply, 10);
      console.log ('t supply 10 = ' + tSupply.toString());
      let burnCount = await contract.burnCount();
      assert.equal(burnCount, 0);
      console.log('burn count 0 = ' + burnCount.toString());
      await contract.burn(0);
      burnCount = await contract.burnCount();
      console.log('burn 1 = ' + burnCount.toString());
      assert.equal(burnCount, 1);
      tSupply = await contract.totalSupply();
      assert.equal(tSupply, 9);
      console.log ('t supply 9 = ' + tSupply.toString());
      let lampsMinted = await contract.lampsMinted();
      assert.equal(lampsMinted, 10);
      console.log('lamps minted 10 = ' + lampsMinted);
      let ownersTokens = await contract.getTokensOwnedBy(lavaLampsETH);
      console.log(tokensOwnedHelper(ownersTokens));
      await contract.burn(5);
      burnCount = await contract.burnCount();
      console.log('burn 2 = ' + burnCount.toString());
      assert.equal(burnCount, 2);
      tSupply = await contract.totalSupply();
      assert.equal(tSupply, 8);
      console.log ('t supply 8 = ' + tSupply.toString());
      let minter1Mint = await contract.mint(1, { from: minter1, value: price });
      tSupply = await contract.totalSupply();
      console.log ('t supply 9 = ' + tSupply.toString());
      assert.equal(tSupply, 9);
      ownersTokens = await contract.getTokensOwnedBy(lavaLampsETH);
      console.log(tokensOwnedHelper(ownersTokens));
      ownersTokens = await contract.getTokensOwnedBy(minter1);
      console.log(tokensOwnedHelper(ownersTokens));
      await contract.mint(10, { from: minter1, value: price * 10 });
      tSupply = await contract.totalSupply();
      console.log ('t supply 19 = ' + tSupply.toString());
      assert.equal(tSupply, 19);
    })
  })


  describe('Mint all Lamps', async () => {
    it("fails to mint 21 lamps, maxMintAmount = 20", async () => {
      let mintAmount = 21;
      await expectRevert(
        contract2.mint(mintAmount, { from: minter1, value: price * mintAmount }),
        'mint amount cannot be greater than 20'
      )
      mintAmount = 0;
      await expectRevert(
        contract2.mint(mintAmount, { from: minter1, value: price * mintAmount }),
        'mint amount cannot be 0'
      )
    })

    /*it("Mint 7979", async () => {
      let m1Balance = await web3.eth.getBalance(minter1);
      console.log('m1balance = ' + getWei(m1Balance));

      let tSupply = await contract2.totalSupply();
      assert.equal(tSupply, 0);
      console.log ('t supply 0 = ' + tSupply.toString());

      mintAmount = 20;
      console.log('price * mintamount = ' + price*mintAmount);

      await contract2.mint(mintAmount, { from: minter1, value: price * mintAmount })
      tSupply = await contract2.totalSupply();
      assert.equal(tSupply, 20);
      console.log ('t supply 20 = ' + tSupply.toString());
      let newTSupply = 20;

      newTSupply = newTSupply + 20;
      await contract2.mint(mintAmount, { from: minter1, value: price * mintAmount })
      tSupply = await contract2.totalSupply();
      assert.equal(tSupply, newTSupply);
      console.log('t supply ' + newTSupply + ' = ' + newTSupply.toString());

      //it("fails to mint 7979 lamps, maxMintAmount = 20", async () => {
      //  await contract2.mint(21, { from: minter1, value: price * 10 });
    })*/
  })

  /*
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
  */
})
