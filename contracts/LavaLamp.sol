// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract LavaLamp is Ownable, ERC721 {
  struct Metadata {
    uint8 attribute;
    uint8 background; // 10 - (black, blueberry, light blueberry, light raspberry, light strawberry, raspberry, sky, purple, stars, strawberry)
    uint8 base; // 6 - (standard, alien, rocket, bong, pumpkin, wizard)
    uint8 glass; // 2 (white or black) - (carbon)

    // 109 (None, red, green, yellow, blue, purple, light blue, orange, white, pink)
    uint8 lava_count;
    uint8 lava_1;
    uint8 lava_2;
    uint8 lava_3;
    uint8 lava_4;

    uint8 overlay; // 9 (none, bitcoin, ethereum, lavaception leaves, peace, smoke, swirls, yinyang)
    uint8 rarity; // 6 (og, gold, diamond, ruby, emerald, rainbow)
  }
  mapping(uint256 => Metadata) id_to_lavalamp;

  string private _currentBaseURI;

  uint256 maxLamps = 7980;
  uint256 lampCount = 0;
  uint256 currentLampSet = 0;
  uint256 numOfLampBlocks = 19;
  uint256 lampSetSize = 399;

  constructor() ERC721("LavaLamp", "LAVALAMP") {
    setBaseURI("http://www.superdorvil.tech/token/");

    for (int i = 0; i < 20; i++){
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
    uint256 tokenId = getId();
    uint256 lava_index = tokenId;
    uint256 r;

    uint8 attribute;
    uint8 background;
    uint8 base;
    uint8 glass;
    uint8 lava_count = 0;
    uint8 lava_1;
    uint8 lava_2;
    uint8 lava_3;
    uint8 lava_4;
    uint8 overlay;
    uint8 rarity;

    lava_1 = uint8(lava_index % 10);
    lava_index = (lava_index - lava_1) / 10;
    lava_2 = uint8(lava_index % 10);
    lava_index = (lava_index - lava_2) / 10;
    lava_3 = uint8(lava_index % 10);
    lava_index = (lava_index - lava_3) / 10;
    lava_4 = uint8(lava_index % 10);
    lava_index = (lava_index - lava_4) / 10;

    if (lava_1 > 0) {
      lava_count++;
    }
    if (lava_2 > 0) {
      lava_count++;
    }
    if (lava_3 > 0) {
      lava_count++;
    }
    if (lava_4 > 0) {
      lava_count++;
    }

    // attribute
    r = pseudoRNG(tokenId, r) % 1000000;
    if (r < 250000) {
      attribute = 0;
    } else if (r < 500000) {
      attribute = 1;
    } else if (r < 750000) {
      attribute = 2;
    } else {
      attribute = 3;
    }

    // background
    r = pseudoRNG(tokenId, r) % 1000000;
    if (r < 100000) {
      background = 0;
    } else if (r < 200000) {
      background = 1;
    } else if (r < 300000) {
      background = 2;
    } else if (r < 400000) {
      background = 3;
    } else if (r < 500000) {
      background = 4;
    } else if (r < 600000) {
      background = 5;
    } else if (r < 700000) {
      background = 6;
    } else if (r < 800000) {
      background = 7;
    } else if (r < 900000) {
      background = 8;
    } else {
      background = 9;
    }

    // bases
    r = pseudoRNG(tokenId, r) % 1000000;
    if (r < 166666) {
      base = 0;
    } else if (r < 333332) {
      base = 1;
    } else if (r < 499998) {
      base = 2;
    } else if (r < 666664) {
      base = 3;
    } else if (r < 833330) {
      base = 4;
    } else {
      base = 5;
    }

    // glass
    r = pseudoRNG(tokenId, r) % 1000000;
    if (r < 500000) {
        glass = 0;
    } else {
        glass = 1;
    }

    // overlay
    r = pseudoRNG(tokenId, r) % 1000000;
    if (r < 111111) {
      overlay = 0;
    } else if (r < 222222) {
      overlay = 1;
    } else if (r < 333333) {
      overlay = 2;
    } else if (r < 444444) {
      overlay = 3;
    } else if (r < 555555) {
      overlay = 4;
    } else if (r < 666666) {
      overlay = 5;
    } else if (r < 777777) {
      overlay = 6;
    } else if (r < 888888) {
      overlay = 7;
    } else {
      overlay = 8;
    }

    // rarity
    r = pseudoRNG(tokenId, r) % 1000000;
    if (r < 166666) {
      base = 0;
    } else if (r < 333332) {
      base = 1;
    } else if (r < 499998) {
      base = 2;
    } else if (r < 666664) {
      base = 3;
    } else if (r < 833330) {
      base = 4;
    } else {
      base = 5;
    }

    id_to_lavalamp[tokenId] =
      Metadata(
        attribute,
        background,
        base,
        glass,
        lava_count,
        lava_1,
        lava_2,
        lava_3,
        lava_4,
        overlay,
        rarity
      );

    _safeMint(msg.sender, tokenId);

    incrementId();
  }

  function claim() external payable {
    require(msg.value == 0.03 ether, "claiming a lava lamp costs 30 finney");

    mint();

    payable(owner()).transfer(0.03 ether);
  }

  function getId() internal view returns(uint256) {
    uint256 j = currentLampSet;
    uint256 randomLampBlock = randomizeLampBlock(j);
    uint256 id = randomLampBlock * lampSetSize + lampCount;

    return id;
  }

  function incrementId() internal {
    if (currentLampSet < numOfLampBlocks) {
      currentLampSet = currentLampSet + 1;
    } else {
      currentLampSet = 0;
      lampCount = lampCount + 1;
    }
  }

  function randomizeLampBlock(uint256 lampBlock) internal pure returns(uint256) {
    uint256 randomLampBlock = 0;

    if (lampBlock == 0) {
      randomLampBlock = 3;
    } else if (lampBlock == 1) {
      randomLampBlock = 17;
    } else if (lampBlock == 2) {
      randomLampBlock = 10;
    } else if (lampBlock == 3) {
      randomLampBlock = 13;
    } else if (lampBlock == 4) {
      randomLampBlock = 18;
    } else if (lampBlock == 5) {
      randomLampBlock = 0;
    } else if (lampBlock == 6) {
      randomLampBlock = 4;
    } else if (lampBlock == 7) {
      randomLampBlock = 1;
    } else if (lampBlock == 8) {
      randomLampBlock = 6;
    } else if (lampBlock == 9) {
      randomLampBlock = 19;
    } else if (lampBlock == 10) {
      randomLampBlock = 8;
    } else if (lampBlock == 11) {
      randomLampBlock = 12;
    } else if (lampBlock == 12) {
      randomLampBlock = 2;
    } else if (lampBlock == 13) {
      randomLampBlock = 14;
    } else if (lampBlock == 14) {
      randomLampBlock = 11;
    } else if (lampBlock == 15) {
      randomLampBlock = 7;
    } else if (lampBlock == 16) {
      randomLampBlock = 15;
    } else if (lampBlock == 17) {
      randomLampBlock = 9;
    } else if (lampBlock == 18) {
      randomLampBlock = 5;
    } else if (lampBlock == 19) {
      randomLampBlock = 16;
    }

    return randomLampBlock;
  }

  function get(uint256 tokenId) external view returns(uint8[] memory) {
    require(_exists(tokenId), "token not minted");
    Metadata memory lavalamp = id_to_lavalamp[tokenId];
    uint8[] memory meta = new uint8[](11);

    meta[0] = lavalamp.attribute;
    meta[1] = lavalamp.background;
    meta[2] = lavalamp.base;
    meta[3] = lavalamp.glass;
    meta[4] = lavalamp.lava_count;
    meta[5] = lavalamp.lava_1;
    meta[6] = lavalamp.lava_2;
    meta[7] = lavalamp.lava_3;
    meta[8] = lavalamp.lava_4;
    meta[9] = lavalamp.overlay;
    meta[10] = lavalamp.rarity;

    return meta;
  }

  /*function getAllTokens() public view returns (Metadata[] memory) {
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
  }*/

  // psuedo_rng is the previous rng value, this is just top make sure we get something different everytime and don't use the same psuedo for the, base, sticker, and background
  function pseudoRNG(uint256 tokenId, uint256 prev_rng) internal view returns (uint256) {
      return uint256(keccak256(abi.encode(block.timestamp, block.difficulty, tokenId, prev_rng)));
  }
}
