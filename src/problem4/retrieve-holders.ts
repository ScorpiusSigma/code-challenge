import { ethers } from "ethers";
const ABI = require("./abi.json")

const bscMainnetPublicNode = "https://bsc-dataseed1.binance.org/";
const provider = new ethers.providers.JsonRpcProvider(bscMainnetPublicNode);
const swthTokenContractAddress = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";
const targetAddresses = [
	"0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
	"0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
	"0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392",
];

const swthContract = new ethers.Contract(
	swthTokenContractAddress,
	ABI,
	provider
);

const getAddressBalance = async (address: string) => {
	const balance = await swthContract.balanceOf(address);
	return ethers.utils.formatUnits(balance, 8);
};

const main = () => {
	for (const address of targetAddresses) {
		getAddressBalance(address).then((balance) => {
			console.log(address, balance);
		});
	}
};

main();
