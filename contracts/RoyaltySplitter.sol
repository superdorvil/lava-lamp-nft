// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/finance/PaymentSplitter.sol";

contract RoyaltySplitter is PaymentSplitter {
  constructor (address[] memory _royalties, uint256[] memory _shares) PaymentSplitter(_royalties, _shares) payable {}
}
