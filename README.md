# Simple Storage DApp

This is a simple decentralized application (DApp) built on Ethereum that demonstrates basic interaction with a smart contract for storing and retrieving data.

## Overview

The project consists of a smart contract written in Solidity and a basic frontend interface built with HTML, JavaScript, and Web3.js. The smart contract allows users to set and retrieve a single unsigned integer value, as well as transfer ownership of the contract.

## Smart Contract

The smart contract (`SimpleStorage.sol`) contains the following functions:

- `set(uint256 x)`: Sets the value of the stored data to the provided integer `x`. Only the owner of the contract can call this function.
- `get()`: Returns the current value of the stored data.
- `transferOwnership(address newOwner)`: Transfers ownership of the contract to the specified address. Only the current owner can call this function.

## Frontend

The frontend (`index.html` and `app.js`) provides a user-friendly interface for interacting with the smart contract. Users can:

- Set a new value for the stored data by entering a number and clicking the "Set Value" button.
- Retrieve the current value of the stored data by clicking the "Get Value" button.
- Transfer ownership of the contract to a new address by clicking the "Transfer Ownership" button.

## Deployment

To deploy the smart contract and run the frontend locally, follow these steps:

1. Install MetaMask extension in your browser and connect it to the Ethereum network.
2. Deploy the `SimpleStorage.sol` contract to an Ethereum network of your choice using tools like Remix or Truffle.
3. Replace `'CONTRACT_ADDRESS'` and `abi` placeholders in `index.html` and `app.js` with the deployed contract address and ABI, respectively.
4. Open `index.html` in a web browser.

## Dependencies

- Web3.js: JavaScript library for interacting with the Ethereum blockchain.
- MetaMask: Browser extension for managing Ethereum accounts and transactions.

## License

This project is licensed under the [MIT License](LICENSE).
