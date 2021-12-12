// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

//FIXME: convert from ETH to BTC

contract LavaDAO is Ownable {
  //event BTCPurchased(address account, uint256 shares);
  // 31536000 seconds in a year for the renewal 60*60*24*365
  uint256 oneYear = 365 days; // onlyAfter

  constructor() {}

  // Purchase BTC
  function purchaseBTC() public onlyOwner {

  }

  // Can we link this to the ens voting system
  // Can only do transations while released
  // I don't think we have to automate this, because a fuck up is sending the eth to the community
  function releaseTimer() public onlyOwner {

  }

  // Renew contract
  function renewContract() public onlyOwner {

  }

  // Release BTC
  // Need to monitor claimed accounts
  // anyone can execute this after the release timer and vote
  function releaseBTC() external {

  }

  function unclaimedBTC() public onlyOwner {

  }

}
