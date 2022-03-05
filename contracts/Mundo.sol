// SPDX-License_Identifier : MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Mundo is ERC20 {
    constructor(uint256 initialSupply) ERC20("Mundo", "MND") {
        _mint(msg.sender, initialSupply);
    }
}