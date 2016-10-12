import { HardhatUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";
import "@nomiclabs/hardhat-etherscan";

const { PKEY, MNEMONIC, INFURA_KEY, ETHERSCAN_API_KEY, BSCSCAN_API_KEY} = require('./secret.json');

console.log("1. PKEY", PKEY);
console.log("2. MNEMONIC", MNEMONIC);
console.log("3. INFURA_KEY", INFURA_KEY);


const config: HardhatUserConfig = {
    defaultNetwork: "hardhat", 
    solidity: {
        compilers: [{ version: "0.4.24", settings: {optimizer : { enabled: true, runs: 1}} }],
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY
    },
    bscscan: {
        apiKey: BSCSCAN_API_KEY
    },
    networks: {
        hardhat: {
            throwOnTransactionFailures: true,
            throwOnCallFailures: true,
            //allowUnlimitedContractSize: true,
        },
        mainnet: {
          url: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
          chainId: 1,
          gasPrice: 20000000000,
          accounts: [`0x${PKEY}`],
        },
        ropsten: {
            url: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
            chainId: 3,
            gasPrice: 20000000000,
            accounts: [`0x${PKEY}`],
        },
        testnet: {
            url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
            chainId: 97,
            gasPrice: 20000000000,
            accounts: {mnemonic: MNEMONIC}
        },
        bsc_mainnet: {
            url: "https://bsc-dataseed.binance.org",
            chainId: 56,
            gasPrice: 20000000000,
            accounts: [PKEY]
        },
        ganache: {
            url: "http://127.0.0.1:7545",
        },
        shft: {
            url: "http://rpc.shyft.network:64738",
            chainId: 7341,
            gasPrice: 20000000000,
            accounts: [PKEY]
        }
    }
};

export default config;