# RUN
## Docker Image
```sh
# Build Image
docker build -t moonbeam_wrapper .
# Run Image
docker run -it \
    -v $PWD/app:/app    \
    -p 8080:8080 \
    moonbeam_wrapper
```
## (Ad-Hoc) Docker Container
### Create Docker Container
```sh
docker run -it \
    -v $PWD/app:/app    \
    -p 8080:8080 \
    -w /app \
    node /bin/bash
```
### Install Required Libraries
```sh
npm i web3
npm i solc@0.8.4
npm i @openzeppelin/contracts
npm i cors
```
### Start App
```sh
npm run start
```

# Quick References 
- [Smart Contract Generator - ERC721 ](https://wizard.openzeppelin.com/#erc721)
- [Open Zeppelin Docs - ERC721](https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#IERC721-approve-address-uint256-)
- [Moonbase Blockchain Explorer](https://moonbase.moonscan.io/)
- [Moonbeam Web3 Docs](https://docs.moonbeam.network/builders/build/eth-api/libraries/web3js/)