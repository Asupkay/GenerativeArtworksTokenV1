require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const { resolve } = require("path");

require('dotenv').config({ path: resolve(__dirname, "./.env") });

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const { ALCHEMY_TESTNET_API_KEY, TESTNET_PRIVATE_KEY, ETHERSCAN_API_KEY, MAINNET_PRIVATE_KEY, ALCHEMY_MAINNET_API_KEY}  = process.env;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_TESTNET_API_KEY}`,
      accounts: [`0x${TESTNET_PRIVATE_KEY}`]
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_TESTNET_API_KEY}`,
      accounts: [`0x${TESTNET_PRIVATE_KEY}`]
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_MAINNET_API_KEY}`,
      accounts: [`0x${MAINNET_PRIVATE_KEY}`]
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
}
