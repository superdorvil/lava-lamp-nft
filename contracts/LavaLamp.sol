// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract LavaLamp is Ownable, ERC721 {
    using Strings for uint256;
    string public provenance = "de7ef1ed5fc86f75c6cfb91ac058bd2a2319da98e7548872199f3d80e17e6f08";
    string private currentBaseURI;

    uint256 private cost = 0.03 ether;
    uint256 private maxSupply = 7980;
    uint256 private maxMintAmount = 20;
    address private lavaLampsEth = 0x4024b17b6fD2AC7a83bfE0c71970D23eE335BC40;

    uint256 public totalSupply = 0;

    constructor() ERC721("LavaLamp", "LAVALAMP") {
        setBaseURI("ipfs://QmcYATwnfG4a3byaV7ajrgNBfj9GbTa6EvZmReBWg9WgCB/");
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        currentBaseURI = baseURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return currentBaseURI;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory curBaseURI = _baseURI();

        return bytes(curBaseURI).length > 0
            ? string(abi.encodePacked(curBaseURI, tokenId.toString(), '.json'))
            : "";
    }

    function mint(uint256 mintAmount) public payable {
        require(mintAmount > 0, 'mint amount cannot be 0');
        require(mintAmount <= maxMintAmount, 'mint amount cannot be greater than 20');
        require(totalSupply + mintAmount <= maxSupply, 'minting will go over total supply of 7980 lamps');
        uint256 price = cost * mintAmount;

        if (msg.sender != owner())
            require(msg.value >= price);

        for (uint256 i = 1; i <= mintAmount; i++) {
            _safeMint(msg.sender, totalSupply);
            totalSupply++;
        }

        (bool success, ) = payable(lavaLampsEth).call{value: address(this).balance}("");
        require(success);
    }
}
