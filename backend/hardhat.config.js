require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// Ethereum Ağları
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL; // Sepolia için RPC URL
const PRIVATE_KEY = process.env.PRIVATE_KEY; // MetaMask özel anahtarı

// Flow Ağı
const FLOW_ACCESS_API = process.env.FLOW_ACCESS_API; // Flow Access API (e.g., https://access-mainnet-beta.onflow.org)
const FLOW_PRIVATE_KEY = process.env.PRIVATE_KEY; // Flow özel anahtarı
const FLOW_ACCOUNT_ADDRESS = process.env.FLOW_ACCOUNT_ADDRESS; // Flow hesap adresi

// Polygon Amoy Testnet
const POLYGON_AMOY_TESTNET_RPC_URL = process.env.POLYGON_AMOY_TESTNET_RPC_URL; // Doğru değişken adı
const POLYGON_AMOY_PRIVATE_KEY = process.env.PRIVATE_KEY; 

module.exports = {
  solidity: "0.8.18", // Ethereum ağları için Solidity sürümü
  networks: {
    // Ethereum ağları
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
    
    // Flow ağı
    flow: {
      url: FLOW_ACCESS_API,
      accounts: [FLOW_PRIVATE_KEY],
      gas: 1000000,
    },
    
    // Polygon Amoy Testnet
    polygonAmoyTestnet: {
      url: POLYGON_AMOY_TESTNET_RPC_URL, // Alchemy üzerinden Polygon Amoy Testnet
      accounts: [PRIVATE_KEY],
    },
  },
};