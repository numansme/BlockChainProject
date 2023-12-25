// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StringCollection {
    // String Collection Definition
    string[] hashCollection;

    // Insert new string
    function addString(string memory newString) public {
        hashCollection.push(newString);
    }

    // Bring Colletion Count
    function getStringCount() public view returns (uint256) {
        return hashCollection.length;
    }

    // Bring string in a specific index
    function getStringAtIndex(uint256 index) public view returns (string memory) {
        require(index < hashCollection.length, "Index out of bounds");
        return hashCollection[index];
    }
}
