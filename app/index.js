const controller = require("/app/controller.js");

var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors());

// GET URI FROM NFT
app.get('/getURIfromNFT/:tokenId', function (req, res) {
    controller.getURIfromNFT(req.params.tokenId).then(function(response) {
        res.end(response);
    });
});

// GET OWNER ADDRESS OF NFT
app.get('/getNFTOwnerAddress/:tokenId', function (req, res) {
    controller.getNFTOwnerAddress(req.params.tokenId).then(function(response) {
        res.end(response);
    });
});

// GET OWNER ADDRESS OF CONTRACT
app.get('/getContractOwnerAddress', function (req, res) {
    controller.getContractOwnerAddress().then(function(response) {
        res.end(response);
    });
});

// MINT TOKEN
app.get('/mintNFT/:csv_senderAddress_siaFileId', function (req, res) {
    const vals = req.params.csv_senderAddress_siaFileId.split(",");
    const senderAddress = vals[0];
    const siaFileId = vals[1];
    // console.log(senderAddress);
    // console.log(siaFileId);
    controller.mintNFT(senderAddress, siaFileId)
    .then(function(response) {
        res.end(response.transactionHash);
    });
});

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })