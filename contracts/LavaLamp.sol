// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract LavaLamp is Ownable, ERC721 {
  using Strings for uint256;
  string private currentBaseURI;
  string public provenance = "72a59313f86c9d8d956fef3fd61da0310de4fef2211c96f17989680f928d5ca0";

  uint256 private cost = 0.03 ether;
  uint256 private maxSupply = 7980;
  uint256 private maxMintAmount = 20;

  uint256 public burnCount = 0;
  uint256 public lampsMinted = 0;

  // string memory provenanceHash
  constructor() ERC721("LavaLamp", "LAVALAMP") {
    setBaseURI("ipfs://QmRbRi2ixepCr4f2XEgDpUUHtHuhAaCQ92VqNievCiNc39/"); // ("http://localhost:3000/token/"); // setBaseURI("http://www.superdorvil.tech/token/"); // ipfs://{}
    mint(10);
  }

  function setBaseURI(string memory baseURI) public onlyOwner {
    currentBaseURI = baseURI;
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return currentBaseURI;
  }

  function mint(uint256 mintAmount) public payable {
    require(mintAmount > 0);
    require(mintAmount <= maxMintAmount);
    require(lampsMinted + mintAmount <= maxSupply);
    uint256 price = cost * mintAmount;

    if (msg.sender != owner())
      require(msg.value >= price);

    for (uint256 i = 1; i <= mintAmount; i++) {
      _safeMint(msg.sender, lampsMinted);
      lampsMinted++;
    }
  }

  function withdraw() public payable onlyOwner {
    // (bool hs, ) = payable(0x0).call{value: address(this).balance * 5 / 100}("");
    (bool success, ) = payable(owner()).call{value: address(this).balance}("");
    require(success);
  }

  function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
    require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

    string memory curBaseURI = _baseURI();
    return bytes(curBaseURI).length > 0
      ? string(abi.encodePacked(curBaseURI, tokenId.toString(), ".json"))
      : "";
  }

  // I guess I could have inherited the burnable contract
  // But I would override it anyways
  // I'm curious if overriding functions increases gas fees
  // So I'm just throwing this in here and will look into gas fees later, most likely.
  function burn(uint256 tokenId) public virtual {
    //solhint-disable-next-line max-line-length
    require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721Burnable: caller is not owner nor approved");
    _burn(tokenId);
    burnCount++;
  }

  function totalSupply() external view returns (uint256) {
    return lampsMinted - burnCount;
  }

  function getTokensOwnedBy(address owner) external view returns (bool[] memory) {
    bool[] memory tokenIds = new bool[](maxSupply);

    for (uint256 i = 0; i < maxSupply; i++) {
      tokenIds[i] = false; // don't need this, defaults to bool

      if (_exists(i)) {
        if (ownerOf(i) == owner) {
          tokenIds[i] = true;
        }
      }
    }

    return tokenIds;
  }
}
