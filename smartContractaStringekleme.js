const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');

// Infura API key
const INFURA_API_KEY = '1a8d93a97135483a9ca99abf0ef73117';

// MetaMask mnemonic phrase (12 words)
const MNEMONIC = 'rib convince tonight enhance hobby remove prefer dynamic expect harsh smoke curve';

// Contract ABI
const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newString",
				"type": "string"
			}
		],
		"name": "addString",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getStringAtIndex",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getStringCount",
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
];

// Contract address
const contractAddress = '0x3a2dD5bcE331b261429BA25897F53190a6b9dc18';

// Network to connect to (e.g., 'mainnet', 'ropsten', 'rinkeby')
const network = 'sepolia';

// Create a Web3Provider instance
const provider = new HDWalletProvider(
    MNEMONIC,
    //`https://${INFURA_API_KEY}@sepolia.infura.io/v3/`
    `https://sepolia.infura.io/v3/1a8d93a97135483a9ca99abf0ef73117`
    
);

// Create a Web3 instance from the provider
const web3 = new Web3(provider);

// Create a contract instance
const contract = new web3.eth.Contract(abi, contractAddress);

async function addString() {
    const account = await web3.eth.getAccounts().then(accounts => accounts[0]);

    // Call the addString function
    await contract.methods.addString('yyyy').send({ from: account });

    console.log('String added successfully!');
}

addString();
