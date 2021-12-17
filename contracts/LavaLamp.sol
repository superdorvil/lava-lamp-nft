// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";

// FIXME:: Should I add the ability to pause the contract???
// FIXME:: Update contract to the most recent ERC shit

contract LavaLamp is Ownable, ERC721, IERC721Enumerable {
    struct Metadata {
        uint8 attribute; // (none, lavalien, halo, kitty)
        uint8 background; // 10 - (black, blueberry, light blueberry, light raspberry, light strawberry, raspberry, sky, purple, stars, strawberry)
        uint8 base; // 8 - (standard, alien, rocket, bong, pumpkin, wizard, witch, kitty)
        uint8 glass; // glowing or normal
        uint8 glassColor; // 2 (white, black, yellow, orange, pink, purple, blue, red)

        // 10 (None, red, green, yellow, blue, purple, light blue, orange, white, pink)
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

    uint256 maxSupply = 7980;
    uint256 cost = 0.03 ether;
    uint256 maxMintAmount = 20;
    uint256 lampCount = 0;
    uint256 currentLampSet = 0;
    uint256 lampsMinted = 0;

    constructor() ERC721("LavaLamp", "LAVALAMP") {
        setBaseURI("http://localhost:3000/token/"); // setBaseURI("http://www.superdorvil.tech/token/");
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        _currentBaseURI = baseURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _currentBaseURI;
    }

    function mint () internal {
        Metadata memory metadata;
        uint256 tokenId = getId();
        uint256 lava_index = tokenId;
        uint256 r;

        uint8 lava_count = 0;
        uint8 lava_1;
        uint8 lava_2;
        uint8 lava_3;
        uint8 lava_4;

        lava_4 = uint8(lava_index % 10);
        lava_index = (lava_index - lava_4) / 10;
        lava_3 = uint8(lava_index % 10);
        lava_index = (lava_index - lava_3) / 10;
        lava_2 = uint8(lava_index % 10);
        lava_index = (lava_index - lava_2) / 10;
        lava_1 = uint8(lava_index % 10);
        lava_index = (lava_index - lava_1) / 10;

        if (lava_4 > 0)
            lava_count++;
        if (lava_3 > 0)
            lava_count++;
        if (lava_2 > 0)
            lava_count++;
        if (lava_1 > 0)
            lava_count++;

        metadata.lava_count = lava_count;
        metadata.lava_1 = lava_1;
        metadata.lava_2 = lava_2;
        metadata.lava_3 = lava_3;
        metadata.lava_4 = lava_4;

        r = pseudoRNG(tokenId, r) % 1000000;
        metadata.attribute = generateAttribute(r);
        r = pseudoRNG(tokenId, r) % 1000000;
        metadata.background = generateBackground(r);
        r = pseudoRNG(tokenId, r) % 1000000;
        metadata.base = generateBase(r);
        r = pseudoRNG(tokenId, r) % 1000000;
        metadata.glass = generateGlass(r);
        r = pseudoRNG(tokenId, r) % 1000000;
        metadata.glassColor = generateGlassColor(r);
        r = pseudoRNG(tokenId, r) % 1000000;
        metadata.overlay = generateOverlay(r);
        r = pseudoRNG(tokenId, r) % 1000000;
        metadata.rarity = generateRarity(r);

        id_to_lavalamp[tokenId] = metadata;

        _safeMint(msg.sender, tokenId);

        incrementId();
        lampsMinted++;
    }

    function claim(uint256 mintAmount) external payable {
        require(mintAmount > 0);
        require(mintAmount <= maxMintAmount);
        require(lampsMinted + mintAmount <= maxSupply);
        uint256 price = cost * mintAmount;

        if (msg.sender != owner())
            require(msg.value >= price);

        for (uint256 i = 1; i <= mintAmount; i++)
            mint();

        // payable(owner()).transfer(price ether);
        (bool success, ) = payable(owner()).call{value: price}("");
        // (bool success, ) = payable(purchases).call.value(price)("");
        //(bool success, ) = payable(purchases).call{value: price}("");
        require(success, "Transfer failed.");
    }

    function generateAttribute(uint256 r) internal pure returns(uint8) {
        uint8 attribute;

        if (r < 250000)
            attribute = 0;
        else if (r < 500000)
            attribute = 1;
        else if (r < 750000)
            attribute = 2;
        else
            attribute = 3;

        return attribute;
    }

    function generateBackground(uint256 r) internal pure returns(uint8) {
        uint8 background;

        if (r < 100000)
            background = 0;
        else if (r < 200000)
            background = 1;
        else if (r < 300000)
            background = 2;
        else if (r < 400000)
            background = 3;
        else if (r < 500000)
            background = 4;
        else if (r < 600000)
            background = 5;
        else if (r < 700000)
            background = 6;
        else if (r < 800000)
            background = 7;
        else if (r < 900000)
            background = 8;
        else
            background = 9;

        return background;
    }

    function generateBase(uint256 r) internal pure returns(uint8) {
        uint8 base;

        if (r < 125000)
            base = 0;
        else if (r < 250000)
            base = 1;
        else if (r < 375000)
            base = 2;
        else if (r < 500000)
            base = 3;
        else if (r < 625000)
            base = 4;
        else if (r < 750000)
            base = 5;
        else if (r < 875000)
            base = 6;
        else
            base = 7;

        return base;
    }

    function generateGlass(uint256 r) internal pure returns(uint8) {
      uint8 glass;

      if (r < 500000)
          glass = 0;
      else
          glass = 1;

      return glass;
    }

    function generateGlassColor(uint256 r) internal pure returns(uint8) {
      uint8 glassColor;

      if (r < 125000)
          glassColor = 0;
      else if (r < 250000)
          glassColor = 1;
      else if (r < 375000)
          glassColor = 2;
      else if (r < 500000)
          glassColor = 3;
      else if (r < 625000)
          glassColor = 4;
      else if (r < 750000)
          glassColor = 5;
      else if (r < 875000)
          glassColor = 6;
      else
          glassColor = 7;

      return glassColor;
    }

    function generateOverlay(uint256 r) internal pure returns(uint8) {
        uint8 overlay;

        if (r < 111111)
            overlay = 0;
        else if (r < 222222)
            overlay = 1;
        else if (r < 333333)
            overlay = 2;
        else if (r < 444444)
            overlay = 3;
        else if (r < 555555)
            overlay = 4;
        else if (r < 666666)
            overlay = 5;
        else if (r < 777777)
            overlay = 6;
        else if (r < 888888)
            overlay = 7;
        else
            overlay = 8;

        return overlay;
    }

    function generateRarity(uint256 r) internal pure returns(uint8) {
        uint8 rarity;

        if (r < 166666)
            rarity = 0;
        else if (r < 333332)
            rarity = 1;
        else if (r < 499998)
            rarity = 2;
        else if (r < 666664)
            rarity = 3;
        else if (r < 833330)
            rarity = 4;
        else
            rarity = 5;

        return rarity;
    }

    function getId() internal view returns(uint256) {
        uint256 lampSetSize = 399;
        uint256 randomLampBlock = randomizeLampBlock(currentLampSet);
        uint256 id = randomLampBlock * lampSetSize + lampCount;

        return id;
    }

    function incrementId() internal {
        uint256 numOfLampBlocks = 19;

        if (currentLampSet < numOfLampBlocks) {
            currentLampSet = currentLampSet + 1;
        } else {
            currentLampSet = 0;
            lampCount = lampCount + 1;
        }
    }

    function randomizeLampBlock(uint256 lampBlock) internal pure returns(uint256) {
        uint256 randomLampBlock = 0;

        if (lampBlock == 0)
            randomLampBlock = 3;
        else if (lampBlock == 1)
            randomLampBlock = 17;
        else if (lampBlock == 2)
            randomLampBlock = 10;
        else if (lampBlock == 3)
            randomLampBlock = 13;
        else if (lampBlock == 4)
            randomLampBlock = 18;
        else if (lampBlock == 5)
            randomLampBlock = 0;
        else if (lampBlock == 6)
            randomLampBlock = 4;
        else if (lampBlock == 7)
            randomLampBlock = 1;
        else if (lampBlock == 8)
            randomLampBlock = 6;
        else if (lampBlock == 9)
            randomLampBlock = 19;
        else if (lampBlock == 10)
            randomLampBlock = 8;
        else if (lampBlock == 11)
            randomLampBlock = 12;
        else if (lampBlock == 12)
            randomLampBlock = 2;
        else if (lampBlock == 13)
            randomLampBlock = 14;
        else if (lampBlock == 14)
            randomLampBlock = 11;
        else if (lampBlock == 15)
            randomLampBlock = 7;
        else if (lampBlock == 16)
            randomLampBlock = 15;
        else if (lampBlock == 17)
            randomLampBlock = 9;
        else if (lampBlock == 18)
            randomLampBlock = 5;
        else if (lampBlock == 19)
            randomLampBlock = 16;

        return randomLampBlock;
    }

    function getTokenMetadata(uint256 tokenId) external view returns(uint8[] memory) {
        require(_exists(tokenId), "token not minted");
        Metadata memory lavalamp = id_to_lavalamp[tokenId];
        uint8[] memory meta = new uint8[](12);

        meta[0] = lavalamp.attribute;
        meta[1] = lavalamp.background;
        meta[2] = lavalamp.base;
        meta[3] = lavalamp.glass;
        meta[4] = lavalamp.glassColor;
        meta[5] = lavalamp.lava_count;
        meta[6] = lavalamp.lava_1;
        meta[7] = lavalamp.lava_2;
        meta[8] = lavalamp.lava_3;
        meta[9] = lavalamp.lava_4;
        meta[10] = lavalamp.overlay;
        meta[11] = lavalamp.rarity;

        return meta;
    }

    function getAllTokenMetadata() external view returns (Metadata[] memory) {
        uint256 count = 0;
        Metadata[] memory meta = new Metadata[](lampsMinted);

        for (uint256 i = 0; i < maxSupply; i++) {
            if (_exists(i)) {
                Metadata memory m = id_to_lavalamp[i];
                meta[count] = m;
                count++;
            }
        }

        return meta;
    }

    // ownerOf(uint256 tokenId)
    function getTokensOwnedByMetadata(address owner) external view returns (Metadata[] memory) {
        uint256 ownerSupply = 0;
        uint256 count = 0;

        for (uint256 i = 0; i < maxSupply; i++) {
            if (_exists(i)) {
                if (ownerOf(i) == owner) {
                    ownerSupply++;
                }
            }
        }

        Metadata[] memory meta = new Metadata[](ownerSupply);

        for (uint256 i = 0; i < maxSupply; i++) {
            if (_exists(i)) {
                if (ownerOf(i) == owner) {
                    Metadata memory m = id_to_lavalamp[i];
                    meta[count] = m;
                    count++;
                }
            }
        }

        return meta;
    }

    // psuedo_rng is the previous rng value, this is just top make sure we get something different everytime and don't use the same psuedo for the, base, sticker, and background
    function pseudoRNG(uint256 tokenId, uint256 prev_rng) internal view returns (uint256) {
        return uint256(keccak256(abi.encode(block.timestamp, block.difficulty, tokenId, prev_rng)));
    }

    function tokenByIndexHelper(uint256 index) internal pure returns (uint256) {
        uint256 lCount = 0;
        uint256 curLampSet = 0;
        uint256 numOfLampBlocks = 19;
        uint256 lampSetSize = 399;
        uint256 id = 0;

        // must start at 1, the zeroth index is the first item
        for (uint256 i = 0; i < index + 1; i++) {
            uint256 randomLampBlock = randomizeLampBlock(curLampSet);
            id = randomLampBlock * lampSetSize + lCount;

            if (curLampSet < numOfLampBlocks) {
                curLampSet = curLampSet + 1;
            } else {
                curLampSet = 0;
                lCount = lCount + 1;
            }
        }

        return id;
    }

    function totalSupply() external view returns (uint256) {
        return lampsMinted;
    }

    function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256 tokenId) {
        uint256 count = 0;
        for (uint256 i = 0; i < maxSupply; i++) {
          if (_exists(i)) {
              if (ownerOf(i) == owner) {
                  count++;
                  if (index == count) {
                    return i;
                  }
              }
          }
        }

        return 0; //FIXME:: Maybe Return 9999999 for error
    }

    function tokenByIndex(uint256 index) external pure returns (uint256) {
        return tokenByIndexHelper(index);
    }
}
