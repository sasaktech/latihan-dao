# buildspace x thirdweb - Build your own DAO with just Javascript

Tutorial: https://buildspace.so/p/build-dao-with-javascript/

## Setup

### 1. Install All Dependencies

1. Run `npm install` at the root of your directory
2. Run `npm start` to start the project
3. Start coding!

### 2. Setup Environment Variable

File: `.env`

```bash
PRIVATE_KEY=<WALLET_PRIVATE_KEY>
WALLET_ADDRESS=<WALLET_ADDRESS>
QUICKNODE_API_URL=<API_URL>
```

### 3. Deploy Your ERC-1155 Smart Contract

Run this script:

```bash
node scripts/2-deploy-drop.js
node scripts/3-config-nft.js
node scripts/4-set-claim-condition.js
```

Checkout the Etherscan for contract address and change the contract address in `3-config-nft.js`, `4-set-claim-condition.js`.

```js
// Replace this contract address with your own deployed Contrac
const editionDrop = sdk.getEditionDrop("0x6Ea01b5928c12Af82D7525F4f2D3713d8Ab49495");
```

### **Questions?**

Ada pertanyaan, coba tanyakan di Group Lombok Blockchain Society: [Join Group Telegram](https://t.me/+m7uTBoC6OZZkYTZl)