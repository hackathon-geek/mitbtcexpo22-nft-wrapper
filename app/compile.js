// 1. Import packages
const fs = require('fs');
const solc = require('solc');

// 2. Get path and load contract
const source = fs.readFileSync('/smart-contracts/PBotArtTest1.sol', 'utf8');

// 3. Create input object
const input = {
   language: 'Solidity',
   sources: {
      'PBotArtTest1.sol': {
         content: source,
      },
   },
   settings: {
      outputSelection: {
         '*': {
            '*': ['*'],
         },
      },
   },
};
// 4. Compile the contract
const tempFile = JSON.parse(solc.compile(JSON.stringify(input)));
console.log(tempFile);
const contractFile = tempFile.contracts['PBotArtTest1.sol']['PBotArtTest1'];

// 5. Export contract data
module.exports = contractFile;