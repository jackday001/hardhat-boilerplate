# Smart Contract Example

## Deploy using hardhat

---

### 1. Rename secret.example.json to secret.json

### 2. Set values

- INFURA_KEY
  you can create a new infura key in https://infura.io/dashboard
- PKEY<br/>
  private key of signer's (your) wallet
- MNEMONIC<br/>
  pharse words of signer's (your) wallet
- ETHERSCAN_API_KEY<br/>
  you can create a new api key in https://etherscan.io/myapikey
- BSCSCAN_API_KEY<br/>
  you can create a new api key in https://bscscan.com/myapikey

```
yarn
```

```
npx hardhat compile
```

```
npx hardhat run --network ropsten ./scripts/deploy.js
```

```
npx hardhat verify --network ropsten <contract address>
```
