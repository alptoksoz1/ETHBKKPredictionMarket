const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "Your_Deployed_Contract_Address";
  const PredictionMarket = await ethers.getContractAt("PredictionMarket", contractAddress);

  // Örneğin, bir fonksiyonu çağırın:
  const result = await PredictionMarket.someFunction();
  console.log("Function result:", result);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
