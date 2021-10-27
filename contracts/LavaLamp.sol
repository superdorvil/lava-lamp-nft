// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract LavaLamp is Ownable, ERC721 {

  using Counters for Counters.Counter;
  using Strings for uint256;

  Counters.Counter private _tokenIds;
  mapping(uint256 => string) private _tokenURIs;

  uint256 public cost = 0.05 ether;
  // uint256 public maxSupply = 7979;
  // uint256 public maxMintAmount = 20;
  // bool public paused = false;
  // bool public revealed = false;
  // string public notRevealedUri;

  constructor() ERC721("LavaLamp", "LAVALAMP") {}

  // probably make an owner only one of these so I can for loop and mint the first twenty
  function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
      require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
      _tokenURIs[tokenId] = _tokenURI;
  }

  function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
    require(_exists(tokenId));
    string memory _tokenURI = _tokenURIs[tokenId];
    return _tokenURI;
  }

  function mint(string memory uri) public payable returns (uint256) {
      uint256 tokenId = _tokenIds.current();
      if (msg.sender != owner()) {
        require(msg.value == 0.01 ether, "claiming a lava lamp costs .01 eth");
      }
      _safeMint(msg.sender, tokenId);
      _setTokenURI(tokenId, uri);
      _tokenIds.increment();

      payable(owner()).transfer(0.01 ether);

      return tokenId;
  }

  function getMintableTokenID() public view returns (uint256) {
    uint256 tokenId = _tokenIds.current();
    return tokenId;
  }
}

/*
struct RenderToken {
  uint256 id;
  string uri;
}

function getAllTokens() public view returns (RenderToken[] memory) {
  uint256 lastestId = _tokenIds.current();
  uint256 counter = 0;
  RenderToken[] memory res = new RenderToken[](lastestId);
  for (uint256 i = 0; i < lastestId; i++) {
    if (_exists(counter)) {
      string memory uri = tokenURI(counter);
      res[counter] = RenderToken(counter, uri);
    }
    counter++;
  }
  return res;
}
*/
