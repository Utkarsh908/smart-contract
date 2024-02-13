document.addEventListener('DOMContentLoaded', async () => {
    // Connect to the Ethereum network
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    } else {
        alert('Please install MetaMask to use this application');
        return;
    }

    // Load the contract
    const contractAddress = 'CONTRACT_ADDRESS'; // Replace with the deployed contract address
    const abi = []; // Replace with the ABI of your contract
    const contract = new web3.eth.Contract(abi, contractAddress);

    // Display the current value
    const currentValueElement = document.getElementById('currentValue');
    const currentValue = await contract.methods.get().call();
    currentValueElement.innerText = `Current Value: ${currentValue}`;
});

async function setValue() {
    const newValue = document.getElementById('newValue').value;
    const accounts = await web3.eth.getAccounts();
    const contractAddress = '0x80F2B033EbD0cb58Fc93149326AEC453b8645bDF'; // Replace with the deployed contract address
    const abi = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newValue",
                    "type": "uint256"
                }
            ],
            "name": "DataStored",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "x",
                    "type": "uint256"
                }
            ],
            "name": "set",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "get",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "storedData",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]; // Replace with the ABI of your contract
    const contract = new web3.eth.Contract(abi, contractAddress);

    await contract.methods.set(newValue).send({ from: accounts[0] });

    // Update the displayed value
    const currentValueElement = document.getElementById('currentValue');
    const currentValue = await contract.methods.get().call();
    currentValueElement.innerText = `Current Value: ${currentValue}`;
}

async function getStoredValue() {
    const contractAddress = 'CONTRACT_ADDRESS'; // Replace with the deployed contract address
    const abi = []; // Replace with the ABI of your contract
    const contract = new web3.eth.Contract(abi, contractAddress);

    const currentValueElement = document.getElementById('currentValue');
    const currentValue = await contract.methods.get().call();
    currentValueElement.innerText = `Current Value: ${currentValue}`;
}

async function transferOwnership() {
    const newOwner = prompt("Enter the address of the new owner:");
    const accounts = await web3.eth.getAccounts();
    const contractAddress = 'CONTRACT_ADDRESS'; // Replace with the deployed contract address
    const abi = []; // Replace with the ABI of your contract
    const contract = new web3.eth.Contract(abi, contractAddress);

    await contract.methods.transferOwnership(newOwner).send({ from: accounts[0] });
    alert("Ownership transferred successfully");
}
