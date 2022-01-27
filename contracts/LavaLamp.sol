// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// truffle migrate --reset --network rinkeby
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
        // "http://localhost:3000/token/"
        // setBaseURI("http://www.websitename.com/token/");
        // ipfs://{cid}/
        setBaseURI("ipfs://QmdtKdvzaRfxd2QpgpnXScihqXh74LFBGG1oeLdMbSS1Kh/");
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        currentBaseURI = baseURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return currentBaseURI;
    }

    function mint(uint256 mintAmount) public payable {
        require(mintAmount > 0, 'mint amount cannot be 0');
        require(mintAmount <= maxMintAmount, 'mint amount cannot be greater than 20');
        require(lampsMinted + mintAmount <= maxSupply, 'minting will go over total supply of 7980 lamps');
        uint256 price = cost * mintAmount;

        if (msg.sender != owner())
            require(msg.value >= price);

        for (uint256 i = 1; i <= mintAmount; i++) {
            _safeMint(msg.sender, lampsMinted);
            lampsMinted++;
        }

        // (bool hs, ) = payable(0x0).call{value: address(this).balance * 5 / 100}("");
      //  (bool success, ) = payable(owner()).call{value: address(this).balance}("");
      //  require(success);
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
