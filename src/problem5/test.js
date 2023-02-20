const { ethers } = require("ethers");

const ADDR = "0x7731238D0ebC1EA41225e446F994a7ce76a3fD72"; // your contract address
const ABI = [
	{
		inputs: [
			{
				internalType: "address",
				name: "_walletAddress",
				type: "address",
			},
			{
				internalType: "address[]",
				name: "_tokenContractAddresses",
				type: "address[]",
			},
		],
		name: "getBalances",
		outputs: [
			{
				components: [
					{
						internalType: "address",
						name: "token",
						type: "address",
					},
					{
						internalType: "uint256",
						name: "balance",
						type: "uint256",
					},
				],
				internalType: "struct Utility.TokenAmountObject[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
]; // your contract ABI

let ADDRESS = "0xF9c350Ec1f67c9D548Aec60D528d6e0A0C97c517"; // some wallet address with token balance
const TOKENS = [
	// token contract addresses
	"0x86718575B0D9d5a71c1372E6Bd195D8e795B60ED",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
// const provider = ethers.providers.getDefaultProvider("goerli");
const provider = new ethers.providers.JsonRpcProvider("https://ethereum-goerli-rpc.allthatnode.com");

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

	const balances = await contract.getBalances(ADDRESS, TOKENS);

	return balances;
};

test().then(console.log);
