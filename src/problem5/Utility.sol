// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Utility {
    struct TokenAmountObject {
        address token;
        uint256 balance;
    }

    function getBalances(
        address _walletAddress,
        address[] memory _tokenContractAddresses
    ) public view returns (TokenAmountObject[] memory) {
        TokenAmountObject[] memory tokenAmounts = new TokenAmountObject[](_tokenContractAddresses.length);

        for (uint256 i = 0; i < _tokenContractAddresses.length; i++) {
            
            address tokenContractAddress = _tokenContractAddresses[i];
            uint256 balance = IERC20(tokenContractAddress).balanceOf(_walletAddress);

            tokenAmounts[i] = TokenAmountObject(tokenContractAddress, balance);
        }

        return tokenAmounts;
    }
}