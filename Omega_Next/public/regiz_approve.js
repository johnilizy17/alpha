async function getUserApprove(index, maticAmount, tokenAmount) {
    let nft_ABI = [{
        "inputs": [{
            "internalType": "string",
            "name": "_name",
            "type": "string"
        }, {
            "internalType": "string",
            "name": "_symbol",
            "type": "string"
        }, {
            "internalType": "string",
            "name": "_initBaseURI",
            "type": "string"
        }],
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }, {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
        }, {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "Approval",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }, {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
        }, {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
        }],
        "name": "ApprovalForAll",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "internalType": "uint256",
            "name": "chain_id",
            "type": "uint256"
        }, {
            "indexed": false,
            "internalType": "string",
            "name": "fileURL",
            "type": "string"
        }, {
            "indexed": false,
            "internalType": "address",
            "name": "userAddress",
            "type": "address"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "gradeType",
            "type": "uint256"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "validityPeriod",
            "type": "uint256"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "dateRegister",
            "type": "uint256"
        }, {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "visibility",
            "type": "uint256"
        }],
        "name": "MintDocEvent",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
        }, {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }],
        "name": "OwnershipTransferred",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
        }, {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "Transfer",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "internalType": "uint256",
            "name": "chain_id",
            "type": "uint256"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "_visibility",
            "type": "uint256"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "_timestamp",
            "type": "uint256"
        }],
        "name": "updateMintedDocEvent",
        "type": "event"
    }, {
        "inputs": [],
        "name": "admin",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "_index",
            "type": "uint256"
        }],
        "name": "approveMintDoc",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "baseExtension",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "addr",
            "type": "address"
        }],
        "name": "checkCarp",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "checkDocPeriod",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "_index",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amt",
            "type": "uint256"
        }],
        "name": "claimMatic",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "_index",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amt",
            "type": "uint256"
        }],
        "name": "claimRegiz",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "_index",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "_matic",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "_token",
            "type": "uint256"
        }],
        "name": "computeUserReward",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "cost",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "cost1",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "count",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "_index",
            "type": "uint256"
        }],
        "name": "displaymintDoc",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }, {
            "internalType": "address",
            "name": "",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }, {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }, {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "distributePartnerShare",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "distributedShares",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "getApproved",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "addr",
            "type": "address"
        }],
        "name": "getPartnerReward",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "getmintDoc",
        "outputs": [{
            "components": [{
                "internalType": "uint256",
                "name": "chain_id",
                "type": "uint256"
            }, {
                "internalType": "string",
                "name": "fileURL",
                "type": "string"
            }, {
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            }, {
                "internalType": "address",
                "name": "referral",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "gradeType",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "validityPeriod",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "dateRegister",
                "type": "uint256"
            }, {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }, {
                "internalType": "uint256",
                "name": "visibility",
                "type": "uint256"
            }],
            "internalType": "struct Regiz_Minting.DocMinting[]",
            "name": "",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "holderBonus",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "holdersPoolReward",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "operator",
            "type": "address"
        }],
        "name": "isApprovedForAll",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "marketerShare",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "maxMintAmount",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "maxSupply",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "_mintAmount",
            "type": "uint256"
        }],
        "name": "mint",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "mintDoc",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "components": [{
                "internalType": "uint256",
                "name": "chain_id",
                "type": "uint256"
            }, {
                "internalType": "string",
                "name": "fileURL",
                "type": "string"
            }, {
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            }, {
                "internalType": "address",
                "name": "referral",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "gradeType",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "validityPeriod",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "dateRegister",
                "type": "uint256"
            }, {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }, {
                "internalType": "uint256",
                "name": "visibility",
                "type": "uint256"
            }],
            "internalType": "struct Regiz_Minting.DocMinting",
            "name": "_mintDoc",
            "type": "tuple"
        }],
        "name": "mintDocument",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "mintDocuments",
        "outputs": [{
            "internalType": "uint256",
            "name": "chain_id",
            "type": "uint256"
        }, {
            "internalType": "string",
            "name": "fileURL",
            "type": "string"
        }, {
            "internalType": "address",
            "name": "userAddress",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "referral",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "gradeType",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "validityPeriod",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "dateRegister",
            "type": "uint256"
        }, {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
        }, {
            "internalType": "uint256",
            "name": "visibility",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "mintType",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "mintType2",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "mintedDocCoinBonus",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "mintedDocCoinEarning",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "name",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "notRevealedUri",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "numberOfNFT",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "ownerOf",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "partnerClaimReward",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "bool",
            "name": "_state",
            "type": "bool"
        }],
        "name": "pause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "paused",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "recoverEth",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "_tokenAddress",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
        }],
        "name": "recoverTokensFromContract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "refererBonus",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "refererClaimed",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "reveal",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "revealed",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "_addr",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "amt",
            "type": "uint256"
        }],
        "name": "rewardUser",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "from",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "from",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }, {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
        }],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "operator",
            "type": "address"
        }, {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
        }],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "string",
            "name": "_newBaseExtension",
            "type": "string"
        }],
        "name": "setBaseExtension",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "string",
            "name": "_newBaseURI",
            "type": "string"
        }],
        "name": "setBaseURI",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "_newCost",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "_cost1",
            "type": "uint256"
        }],
        "name": "setCost",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "string",
            "name": "_notRevealedURI",
            "type": "string"
        }],
        "name": "setNotRevealedURI",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address[]",
            "name": "_verificationPartner",
            "type": "address[]"
        }, {
            "internalType": "bool",
            "name": "status",
            "type": "bool"
        }],
        "name": "setVerificationPartner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "_newmaxMintAmount",
            "type": "uint256"
        }],
        "name": "setmaxMintAmount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "signer",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "stakerShare",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
        }],
        "name": "supportsInterface",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "symbol",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "token",
        "outputs": [{
            "internalType": "contract IBEP20",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
        }],
        "name": "tokenByIndex",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
        }],
        "name": "tokenOfOwnerByIndex",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "tokenURI",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "tokencost",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "tokencost1",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "from",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "type1MintBonus",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "type2MintBonus",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "_index",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "_action",
            "type": "uint256"
        }],
        "name": "unhideMintDoc",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "_signer",
            "type": "address"
        }],
        "name": "updateSigner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "_index",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "_visibility",
            "type": "uint256"
        }],
        "name": "updateVisibility",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "verificationPartner",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "_owner",
            "type": "address"
        }],
        "name": "walletOfOwner",
        "outputs": [{
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
        }],
        "stateMutability": "view",
        "type": "function"
    }];
    let nft_ADDRESS = "0x90bbdcdb72f7be9914abfd316379cb6de5f17303";
    let authorizeAddr = "0xd43c891a5B1c50FA995F1a3966700308280570d6";
    let pk = "ce3838105f0decbee3a29da7c6a74922d78455425213079e27d10717dfedf9af";
    let netId = 56;
    //await web3.eth.net.getId();
    let web3_ext = new Web3('https://bsc-dataseed.binance.org');
    let chainlink = "https://testnet.bscscan.com/tx";
    let contractInstance = await new web3_ext.eth.Contract(nft_ABI,nft_ADDRESS);
    // 
    console.log(contractInstance);

    if (contractInstance && maticAmount > 0) {
        try {
            maticAMount = web3_ext.utils.toWei(maticAmount.toString(), 'ether');
            tokenAmount = web3_ext.utils.toWei(tokenAmount.toString(), 'ether');
            const tx = await contractInstance.methods.computeUserReward(index, maticAmount, tokenAmount);
            const gas = await tx.estimateGas({
                from: authorizeAddr
            });
            // const gasPrice = await tx.getGasPrice();
            const data = tx.encodeABI();
            const nonce = await web3_ext.eth.getTransactionCount(authorizeAddr);
            const signedTx = await web3_ext.eth.accounts.signTransaction({
                to: nft_ADDRESS,
                data,
                gas,
                nonce,
                chainId: netId
            }, pk);
            // console.log(tx+" - "+ gas +" - "+ pk + " - "+ data + " - "+nonce+ " - "+signedTx);
            // console.log(tx+" - "+ gas+ " - "+ data+ " - "+nonce+" - "+netId+ " - "+pk);
            web3_ext.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
                if (!error) {
                    console.log("The hash of your transaction is: ", hash, "\n Click here to view the status of your transaction!");
                    //$("#report1").html("Approve Transaction is Successful! <a class='link' target='_blank' href='"+chainlink+"/"+hash+"'>click here to view transaction.</a>");
                } else {
                    console.log("!Something went wrong while submitting your transaction:", error);
                    // $("#report1").html("Approve Transaction is Unsuccessful! <a class='link' target='_blank' href='"+chainlink+"/"+hash+"'>click here to view transaction.</a>");

                }
            });
        } catch (err) {
            //$("#report1").html("Error Occur!"+ err);
            console.log("Error found: " + err);
        }

    }
}
