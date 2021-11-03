// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract LavaLamp is Ownable, ERC721 {

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  struct Metadata {
    uint8 lava_count;

    // 0 - 9 (None, blue, Green, light blue, orange, pink, purple, red, White, yerllow)

    uint8 color_1;
    uint8 color_2;
    uint8 color_3;
    uint8 color_4;

    uint8 base; // 5 - (alien, rocket, more)
    uint8 background; // 9 - (space, more)
    uint8 sticker; // 5 - (star, lightning bolt, heart, diamond, planet)
  }

  mapping(uint256 => Metadata) id_to_lavalamp;

  string private _currentBaseURI;

  constructor() ERC721("LavaLamp", "LAVALAMP") {
    setBaseURI("www.superdorvil.tech/token/"); //https://peaceful-plains-52194.herokuapp.com
    for (uint256 i = 0; i < 7979; i += 1) {
      mint();
    }
  }

  function setBaseURI(string memory baseURI) public onlyOwner {
    _currentBaseURI = baseURI;
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return _currentBaseURI;
  }

  function mint () internal {
    uint256 tokenId = _tokenIds.current();
    uint256 r;
    uint256 lava_index = tokenId;
    uint8 lava_count = 0;
    uint8 color_1;
    uint8 color_2;
    uint8 color_3;
    uint8 color_4;
    uint8 base;
    uint8 background;
    uint8 sticker;

    color_1 = uint8(lava_index % 10);
    lava_index = (lava_index - color_1) / 10;
    color_2 = uint8(lava_index % 10);
    lava_index = (lava_index - color_2) / 10;
    color_3 = uint8(lava_index % 10);
    lava_index = (lava_index - color_3) / 10;
    color_4 = uint8(lava_index % 10);
    lava_index = (lava_index - color_4) / 10;

    if (color_1 > 0) {
      lava_count++;
    }
    if (color_2 > 0) {
      lava_count++;
    }
    if (color_3 > 0) {
      lava_count++;
    }
    if (color_4 > 0) {
      lava_count++;
    }

    // bases
    r = pseudoRNG(color_1, color_2, color_3, color_4, 0) % 1000000;
    if (r < 200000) {
        base = 0;
    } else if (r < 400000) {
        base = 1;
    } else if (r < 600000) {
        base = 2;
    } else if (r < 800000) {
        base = 3;
    } else {
        base = 4;
    }

    // background
    r = pseudoRNG(color_1, color_2, color_3, color_4, r) % 1000000;
    if (r < 111111) {
        background = 0;
    } else if (r < 222222) {
        background = 1;
    } else if (r < 333333) {
        background = 2;
    } else if (r < 444444) {
        background = 3;
    } else if (r < 555555) {
        background = 4;
    } else if (r < 666666) {
        background = 5;
    } else if (r < 777777) {
        background = 6;
    } else if (r < 888888) {
        background = 7;
    } else {
        background = 8;
    }

    // sticker
    r = pseudoRNG(color_1, color_2, color_3, color_4, r) % 1000000;
    if (r < 20000) {
        sticker = 9;
    } else if (r < 50000) {
        sticker = 8;
    } else if (r < 100000) {
        sticker = 7;
    } else if (r < 170000) {
        sticker = 6;
    } else if (r < 260000) {
        sticker = 5;
    } else if (r < 370000) {
        sticker = 4;
    } else if (r < 500000) {
        sticker = 3;
    } else if (r < 650000) {
        sticker = 2;
    } else if (r < 820000) {
        sticker = 1;
    } else {
        sticker = 0;
    }

    id_to_lavalamp[tokenId] = Metadata(lava_count, color_1, color_2, color_3, color_4, base, background, sticker);

    _safeMint(msg.sender, tokenId);

    _tokenIds.increment();
  }

  function claim() external payable {
    require(msg.value == 0.03 ether, "claiming a lava lamp costs 30 finney");

    mint();

    payable(owner()).transfer(0.03 ether);
  }

  function get(uint256 tokenId) external view returns(uint8[] memory) {
    require(_exists(tokenId), "token not minted");
    Metadata memory lavalamp = id_to_lavalamp[tokenId];
    uint8[] memory meta = new uint8[](8);

    meta[0] = lavalamp.lava_count;

    meta[1] = lavalamp.color_1;
    meta[2] = lavalamp.color_2;
    meta[3] = lavalamp.color_3;
    meta[4] = lavalamp.color_4;

    meta[5] = lavalamp.base;
    meta[6] = lavalamp.background;
    meta[7] = lavalamp.sticker;

    return meta;
  }

  function getAllTokens() public view returns (Metadata[] memory) {
    uint256 lastestId = _tokenIds.current();
    uint256 counter = 0;

    Metadata[] memory meta = new Metadata[](lastestId);

    for (uint256 i = 0; i < lastestId; i++) {
      if (_exists(counter)) {
        Metadata memory m = id_to_lavalamp[counter];
        meta[counter] = m;
      }

      counter++;
    }

    return meta;
  }

  // psuedo_rng is the previous rng value, this is just top make sure we get something different everytime and don't use the same psuedo for the, base, sticker, and background
  function pseudoRNG(uint8 color_1, uint8 color_2, uint8 color_3, uint8 color_4, uint256 prev_rng) internal view returns (uint256) {
      return uint256(keccak256(abi.encode(block.timestamp, block.difficulty, color_1, color_2, color_3, color_4, prev_rng)));
  }
}
