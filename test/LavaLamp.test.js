// burncount
// totalSupply
// provenance
// mint
// withdraw
// tokenURI
// burn
// get tokens owned by
//const { assert, expect } = require("chai");
const {expectRevert} = require('@openzeppelin/test-helpers');

const tokensOwnedHelper = (tokenIds) => {
  const tokensOwned = [];
  tokenIds.forEach((owned, i) => {
    if (owned) {
      tokensOwned.push(i);
    }
  });

  return tokensOwned;
}

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
})
