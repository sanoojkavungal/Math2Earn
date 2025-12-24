// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MathToken is ERC20, Ownable {
    event Minted(address indexed user, uint256 amount);

    constructor() ERC20("MathToken", "MATH") Ownable(msg.sender) {}

    
    function mint(uint256 amount) external {
        require(amount > 0, "Amount must be > 0");
        _mint(msg.sender, amount);
        emit Minted(msg.sender, amount);
    }
}
