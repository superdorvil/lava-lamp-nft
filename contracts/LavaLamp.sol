// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract LavaLamp is Ownable, ERC721 {
    using Strings for uint256;
    string private currentBaseURI;
    string public provenance;

    uint256 private cost = 0.03 ether;
    uint256 private maxSupply = 7980;
    uint256 private maxMintAmount = 20;
    address private lavaLampsEth = 0x4024b17b6fD2AC7a83bfE0c71970D23eE335BC40;

    uint256 public burnCount = 0;
    uint256 public lampsMinted = 0;

    // used to semi-randomize the id's that are minted
    uint256 lampCount = 0;
    uint256 currentLampSet = 0;

    constructor(string memory _provenance) ERC721("LavaLamp", "LAVALAMP") {
        // "http://localhost:3000/token/"
        // setBaseURI("http://www.websitename.com/token/");
        // ipfs://{cid}/
        provenance = _provenance;
        setBaseURI("http://www.superdorvil.tech/token/");
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        currentBaseURI = baseURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return currentBaseURI;
    }

    function mint(uint256 mintAmount) public payable {
        require(mintAmount > 0, 'mint amount cannot be 0');
        //require(mintAmount <= maxMintAmount, 'mint amount cannot be greater than 20');
        require(lampsMinted + mintAmount <= maxSupply, 'minting will go over total supply of 7980 lamps');
        uint256 price = cost * mintAmount;

        if (msg.sender != owner())
            require(msg.value >= price);

        for (uint256 i = 1; i <= mintAmount; i++) {
            uint256 tokenId = getId();
            _safeMint(msg.sender, tokenId);
            incrementId();
            lampsMinted++;
        }

        (bool success, ) = payable(lavaLampsEth).call{value: address(this).balance}("");
        require(success);
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

    // Block has nothing to do with blockchain
    // I just make groups of numbers and shuffle the order of ids minted
    // If someone mints 20 lamps, they dont get 1-20
    // Its not technically random, an actual random solution would be expensive
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

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory curBaseURI = _baseURI();
        return bytes(curBaseURI).length > 0
            ? string(abi.encodePacked(curBaseURI, tokenId.toString(), ".json"))
            : "";
    }

    // allows the user to burn their lamps and there is a count of burned lamps
    function burn(uint256 tokenId) public {
        //solhint-disable-next-line max-line-length
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721Burnable: caller is not owner nor approved");
        _burn(tokenId);
        burnCount++;
    }

    function totalSupply() external view returns (uint256) {
        return lampsMinted - burnCount;
    }

    // returns a boolean array of all all possible lamps
    // every index that is true is a tokenID that is owned by the account
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
