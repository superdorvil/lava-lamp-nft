// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

// The Benefit of owning the contract means I can burn only when gas fees are low
// This cn also allow the community to decide to buy out peoples shares

contract LavaBurner is Ownable {
  //event LampErupted(address account, uint256 shares);

  address lavaDAO; // to send leftover money, probably after a vote, so it needs access to vote results somehow. 
  address lavaLamps; // to buy more lamps

  constructor(_lavaDAO, _lavaLamps) {
    lavaDAO = _lavaDAO;
    lavaLamps = _lavaLamps;
  }

  // Instead of burning, reduce to total supply and grab the would be minted data
  function purchaseFloorLavas(uint256 amount) public {
    // see how much eth we have
    // make sure we have enough for gas
    // Make sure see how many we can buy
    // purchase based off of the amount
  }

  function burnFloorLava() public onlyOwner {
    // call owned Lava burn function
  }

  function leftOverToLavaDAO() public onlyOwner {
    // If no more to burn, just send remaining balance to DAO
  }

    // The goal is simply that the gas fees may not make it worth sending leftover eth to PurchaseSplitter
  function leftOverBalanceToOwner() public onlyOwner {
    // if gas less than .03 eth send to owner. Can't burn anymore lamps
    // Call lavaDao is released?
  }
}
