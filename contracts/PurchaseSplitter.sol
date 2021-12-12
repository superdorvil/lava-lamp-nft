// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/finance/PaymentSplitter.sol";

contract PurchaseSplitter is PaymentSplitter {
  constructor (address[] memory _purchases, uint256[] memory _shares) PaymentSplitter(_purchases, _shares) payable {}
}
