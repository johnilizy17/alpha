let NETID = 56; // 97-testnet; 56-mainnet
let staking_ADDRESS = "0xC21034759603aBaB74fc179aF95f55A00d9e8dcA"; //0x95874f17CC7fD4f689aB808aa4AF9B2FDD4fa422"; //"0x484838048502B68d11009Ac8d3C7b561Ff42841f";
let rewardsPerHour = 10 * 1e18;
let nft_address= "0xEF10c8Df5420d94E893aA0332e276798b10630b3";
let ABI_NFT = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"OwnerPreMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalNFTSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}];

let abi_staking = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"TeamAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"addRewardTreasure","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allStakes","outputs":[{"internalType":"uint256","name":"rarityStaked","type":"uint256"},{"internalType":"uint256","name":"amountStaked","type":"uint256"},{"internalType":"uint256","name":"timeOfLastUpdate","type":"uint256"},{"internalType":"uint256","name":"unclaimedRewards","type":"uint256"},{"internalType":"uint256","name":"bnbRewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bnbToShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeAmount","type":"uint256"}],"name":"calculateProfit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_staker","type":"address"}],"name":"calculateRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimBNBRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getAllRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllStakers","outputs":[{"components":[{"internalType":"uint256","name":"rarityStaked","type":"uint256"},{"internalType":"uint256","name":"amountStaked","type":"uint256"},{"internalType":"uint256","name":"timeOfLastUpdate","type":"uint256"},{"internalType":"uint256","name":"unclaimedRewards","type":"uint256"},{"internalType":"uint256","name":"bnbRewards","type":"uint256"}],"internalType":"struct SifuNftStakingV3.Staker[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getRewardsByTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getStaker","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"},{"internalType":"address[]","name":"recipient","type":"address[]"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"multisendNft","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"},{"internalType":"address[]","name":"recipient","type":"address[]"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"multisendNft2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"nftCollection","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nullAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numHour","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recoverETHfromContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"recoverToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverTreasure","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsPerHour","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftCollection","type":"address"}],"name":"setNftCollection","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newValue","type":"uint256"}],"name":"setRewardsPerHour","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsToken","type":"address"}],"name":"setRewardsToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_TeamAddress","type":"address"}],"name":"setTeamAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_TotalAllocPoint","type":"uint256"},{"internalType":"uint256","name":"_numHour","type":"uint256"}],"name":"setTotalAllocPoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"shareReward","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"},{"internalType":"uint256[]","name":"_rarity","type":"uint256[]"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakers","outputs":[{"internalType":"uint256","name":"rarityStaked","type":"uint256"},{"internalType":"uint256","name":"amountStaked","type":"uint256"},{"internalType":"uint256","name":"timeOfLastUpdate","type":"uint256"},{"internalType":"uint256","name":"unclaimedRewards","type":"uint256"},{"internalType":"uint256","name":"bnbRewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalNFTRarity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasure","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"userStakeInfo","outputs":[{"internalType":"uint256","name":"_tokensStaked","type":"uint256"},{"internalType":"uint256","name":"_availableRewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"},{"internalType":"uint256[]","name":"_rarity","type":"uint256[]"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];

let nftv1_ADDRESS = "0x3252C7800423f0FD9f8aa96fb653fC0C93Ed64a9"; //"0xE918B9DD95046B9ce8704E4f27a922310fB8b7d7";
let ABI_nftv1 = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"OwnerPreMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}];

var currentAddr;
var networkID = 0;
var web3 = null;
var multisenderWeb3 = null;
var multisender = null;
var staking = null;
var allStakes = [];
var v1nftmax = 0;
var v2nftmax = 0;
let nftRarity = {"orange":1, "green":2,"blue":3,"black":4,"purple":5};
let nftRarity2 = {"mystic":1,"ledgendary":2,"epic":3,"rare":4,"uncommon":5, "common":6 };

var multisenderObjects = { 
    airdropAddresses: [],
    airdropAmount: [],
    rightArray: [],
    wrongArray: [],
    isSameAmount: 0,
    numWallet: "",
    token: ""
}

async function getRarityValue2(color) {
	return nftRarity2[color];
}

async function getRarity2(id) {
    
let data = await $.getJSON('JSON/nftV2.json');
    if (data) {
        let color = data[id].attributes[0]["value"];
        //console.log(color.toLowerCase());
       // return color.toLowerCase(); //getRarityValue(color);
        return getRarityValue2(color.toLowerCase());
     }
    else{
       // console.log("error");
       return "error occur";
    }
    //$('#price').text("$ " + price3LechesCake);
    //console.log("Get price"+price3LechesCake.slice(0,11));

}

async function getRarityValue(color) {
	return nftRarity[color];
}

async function getRarity(id) {
    
let data = await $.getJSON('JSON/'+id+'.json');
    if (data) {
        let color = data.attributes[0]["value"];
        //console.log(color.toLowerCase());
       // return color.toLowerCase(); //getRarityValue(color);
        return getRarityValue(color.toLowerCase());
     }
    else{
       // console.log("error");
       return "error occur";
    }
    //$('#price').text("$ " + price3LechesCake);
    //console.log("Get price"+price3LechesCake.slice(0,11));

}

$.getJSON('https://api.pancakeswap.info/api/v2/tokens/0x16DAE78F8b13fc7f86Dfd8711E768E37D10A674F', function(data) {
    //$.getJSON('https://polygon.api.0x.org/swap/v1/quote?buyToken=0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270&sellToken=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&sellAmount=1000000', function(data) {
    var price3LechesCake = 0;
    if (data) {
        price3LechesCake = data.data.price;
        price3LechesCake = price3LechesCake.toString();
        $('#price').text("PRICE (SIFU INU) = " + price3LechesCake.slice(0,10)+" BNB");
        console.log(data.data.price);
    }
    else{
        console.log("error");
    }
    //$('#price').text("$ " + price3LechesCake);
    //console.log("Get price"+price3LechesCake.slice(0,11));
});

window.addEventListener('load', () => {

    //Reset
    totalUser = 0;
    currentAddr = null;
    multisender = null;
    staking = null;
    nft = null;
    nft1 = null;
    web3 = null;
    multisenderWeb3 = null;
    multisenderContractInfo();
    Connect();
    
    $("#nft-balance").text("NFT V1 BALANCE AVAILABLE: 0 SIFU NFT");
    $("#nft-balance1").text("NFT V2 BALANCE AVAILABLE: 0 SIFU NFT");
    $("#nftstake-staked").text("NFT BALANCE: 0 SIFU NFT");
    $("#nftstake-earn").text("REWARD BALANCE: 0 BCH");
    $("#nftstake-pending-earn").text("PENDING REWARD: 0 BCH");
    $("#nftstake-timestamp").text("Last Transaction Time: 00:00:00");
    //getPrice();
   
    
});

async function multisenderContractInfo() {
    if (NETID == 56) {
        web3 = new Web3('https://bsc-dataseed.binance.org/');
    } else {
        web3 = new Web3('https://data-seed-prebsc-2-s2.binance.org:8545');
    }
    
    staking = await new web3.eth.Contract(abi_staking, staking_ADDRESS);
    nft1 = await new web3.eth.Contract(ABI_nftv1, nftv1_ADDRESS);
    nft = await new web3.eth.Contract(ABI_NFT, nft_address);
   // update();
}

async function Connect() {
    if (window.ethereum) {
        multisenderWeb3 = new Web3(window.ethereum)
    
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" })
            let accounts = await window.ethereum.request({ method: 'eth_accounts' })
            currentAddr = accounts[0]
            window.ethereum.on('chainChanged', (chainId) => {
                window.location.reload();
            });
            window.ethereum.on('accountsChanged', function(accounts) {
                window.location.reload();
            })
            runDAPP()
            return
        } catch (error) {
            console.error(error)
        }
    }
}



async function runDAPP() {
    networkID = await multisenderWeb3.eth.net.getId();
    if(networkID==NETID){
        web3 = multisenderWeb3;
       nft1 = await new web3.eth.Contract(ABI_nftv1, nftv1_ADDRESS);
       staking = await new web3.eth.Contract(abi_staking, staking_ADDRESS);
        nft = await new web3.eth.Contract(ABI_NFT, nft_address);
        getCurrentWallet();
        update();
        getStakes();
        getBalance();
    }
      
}


$("#btn-connect").click(() => {
    if (window.ethereum) {
        Connect();
    } else {
        alert("Please install Metamask first");
    }
});

$("#btn-connect1").click(() => {
    if (window.ethereum) {
        console.log("connect click!");
        Connect();
    } else {
        alert("Please install Metamask first");
    }
});

$("#btn-connect-trust").click(() => {
    if (window.ethereum) {
        console.log("connect click!");
        Connect();
    } else {
        alert("Please install Trust wallet and open the website on Trust/DApps");
    }
});


$("#btn-connect-wlconnect").click(async() => {
    var WalletConnectProvider = window.WalletConnectProvider.default;
    var walletConnectProvider = new WalletConnectProvider({
        rpc: {
            56: 'https://bsc-dataseed.binance.org/' //https://data-seed-prebsc-1-s1.binance.org:8545 97 for testnet //mainnet https://bsc-dataseed.binance.org/ 56
        },
        chainId: 56,
        network: 'bnb test',
    });
    await walletConnectProvider.enable();

    multisenderWeb3 = new Web3(walletConnectProvider);
    var accounts = await multisenderWeb3.eth.getAccounts();
    currentAddr = accounts[0];
    var connectedAddr = currentAddr[0] + currentAddr[1] + currentAddr[2] + currentAddr[3] + currentAddr[4] + currentAddr[5] + '...' + currentAddr[currentAddr.length - 6] + currentAddr[currentAddr.length - 5] + currentAddr[currentAddr.length - 4] + currentAddr[currentAddr.length - 3] + currentAddr[currentAddr.length - 2] + currentAddr[currentAddr.length - 1]
    $("#btn-connect").text(connectedAddr)
    $("#btn-connect").prop("disabled", true);

    walletConnectProvider.on("chainChanged", (chainId) => {
        window.location.reload();
    });
    walletConnectProvider.on("disconnect", (code, reason) => {
        console.log(code, reason);
        console.log("disconnected");
        window.location.reload();
    });

    runDAPP()
})

async function getCurrentWallet() {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' })
        if (accounts.length > 0) {
            currentAddr = accounts[0]
            var connectedAddr = currentAddr[0] + currentAddr[1] + currentAddr[2] + currentAddr[3] + currentAddr[4] + currentAddr[5] + '...' + currentAddr[currentAddr.length - 6] + currentAddr[currentAddr.length - 5] + currentAddr[currentAddr.length - 4] + currentAddr[currentAddr.length - 3] + currentAddr[currentAddr.length - 2] + currentAddr[currentAddr.length - 1]
            $("#btn-connect").text(connectedAddr);
            $("#activeAddress").text(connectedAddr)
            $("#btn-connect").prop("disabled", true);
        }
        
    }
}


function update() {
    console.log("Updating");
    updateParameters();
}


async function getBalance(){
    if (nft && currentAddr != null && currentAddr != undefined && currentAddr != "") {
             nft.methods.balanceOf(currentAddr).call().then(balance => {
                 balance = web3.utils.fromWei(balance,'ether');
                 balance = Math.floor(balance);
                 $("#balance").val(balance);
             });
    }
}


$("#max").click(async () => {
    var nftid = "";
        var max = 0;
        console.log("fetching nfts...");
        $("#report1").html("This might take between 2mins to 5mins before finishing the processing...");
        $("#rollimg").show(1000);
        var nftType = $("#nftType").find(":selected").val();
        let nftc = nft;
        if(nftType==0){
            max = v1nftmax;
            nftc = nft1;
        }
        else if(nftType == 1){
           max = v2nftmax; 
        }
        else{
           max = 100;
        }
        for(var i = 1; i < max; i++){
            console.log("checking nft id -"+i);
            let res = await nftc.methods.ownerOf(i).call();
            if(res !="" && res.length > 0){
            if(res.toLowerCase()==currentAddr.toLowerCase()){
                nftid +=i+",";
            }    
            }
            
        }
        if(nftid !="0"){
        nftid = nftid.substring(0, nftid.length-1);
        }
        $("#rollimg").hide(1000);
        $("#report1").html("");
        $("#amount").val(nftid);
});
async function updateParameters() {
     var stakingRecord = "";
     if (staking && currentAddr != null && currentAddr != undefined && currentAddr != "") {

    }
}


$("#approve1").click(() => {
  $("#report1").html("Processing...");
       try {
            nft1.methods.setApprovalForAll(staking_ADDRESS, true).send({
                value: 0,
                from: currentAddr,
            }).once("error", (err) => {
                console.log(err)
                
            }).then((Response)=>{
                console.log(Response);
                $("#report1").html("Approved successfully!");
                $("#investPress").css("display","block");
            })
        } catch (error) {
            $("#report1").html("Rare Enable Error" + error);
        }
});

$("#approve").click(() => {
  $("#report1").html("Processing...");
       try {
            nft.methods.setApprovalForAll(staking_ADDRESS, true).send({
                value: 0,
                from: currentAddr,
            }).once("error", (err) => {
                console.log(err)
                
            }).then((Response)=>{
                console.log(Response);
                $("#report1").html("Approved successfully!");
                $("#investPress").css("display","block");
            })
        } catch (error) {
            $("#report1").html("Rare Enable Error" + error);
        }
});

$("#investPress").click(async () => {
	$("#report1").html("Processing...");
  try {
        if (staking && currentAddr != null && currentAddr != undefined && currentAddr != "") {
            var nftType = $("#nftType").find(":selected").val();
            var tokenid = $("#amount").val();
            var NFTID = tokenid.split(",");
            var rarity = [];
            console.log(NFTID+" - "+nftType);
            for(var i = 0; i < NFTID.length; i++){
                let nid = NFTID[i].trim();
                let rVal = 0;
                if(nftType==0){
                rVal = await getRarity(nid);
                }
                else{
                rVal = await getRarity2(nid);
                }
                console.log(rVal);
                if(rVal < 1 || rVal =="undefined" || rVal ==""){
                    rVal = 1;
                }
                
                rarity.push(rVal);  
                
            }
            //console.log(NFTID+"-"+ rarity);
            staking.methods.stake(NFTID, rarity, nftType).send({
                value: 0,
                from: currentAddr,
            }).once("error", (err) => {
                console.log(err);
                $("#report1").html("error occur!");
                
            }).then((Response)=>{
                console.log(Response);
                $("#report1").html("NFT STAKED SUCCESSFULLY!");
                window.location.reload();
                
            })
        }
    } catch (error) {
        console.log(error);
    }
});

$("#unstake").click(async () =>  {
	$("#report1").html("Processing...");
  try {
        if (staking && currentAddr != null) {
            var nftType = $("#nftType").find(":selected").val();
            var tokenid = $("#amount").val();
            var NFTID = tokenid.split(",");
            var rarity = [];
            console.log(NFTID);
            for(var i = 0; i < NFTID.length; i++){
                let nid = NFTID[i].trim();
                let rVal = await getRarity(nid);
                if(rVal < 1 || rVal =="undefined"){
                    rVal = 1;
                }
                rarity.push(rVal);  
                
            }
            
            staking.methods.withdraw(NFTID, rarity, nftType).send({
                from: currentAddr,
            }).once("error", (err) => {
                console.log(err);
                $("#report1").html("error occur!");
                
            }).then((Response)=>{
                console.log(Response);
                $("#report1").html("NFT UNSTAKED SUCCESSFULLY!");
                window.location.reload();
                
            })
        }
    } catch (error) {
        console.log("Error: "+ error);
    }
});

$("#claimReward").click(() => {
	$("#report1").html("Processing...");
  try {
        if (staking && currentAddr != null && currentAddr != undefined && currentAddr != "") {
            
            staking.methods.claimRewards().send({
                value: 0,
                from: currentAddr,
            }).once("error", (err) => {
                console.log(err);
                $("#report1").html("error occur!");
                
            }).then((Response)=>{
                console.log(Response);
                $("#report1").html("Rewards Claimed Successfully!");
                
            })
        }
    } catch (error) {

    }
});

function getStakes(){
    try{
    staking.methods.stakers(currentAddr).call().then(
                    res => {
                        var lastUp = res.timeOfLastUpdate;
                        var amountStaked = res.amountStaked;
                        var currentTime = new Date();
                        var totalRW = Math.floor((currentTime - lastUp) / 3600) * rewardsPerHour + amountStaked;
                        //$("#nftstake-earn2").text(totalRW);

                    // Calculate total in USD in this pool
                    //totalRare = 2 * (res._availableRewards / 1e18)  * price3LechesCake;  //* amount$AndoPerLP
                   // $("#nftstake-total").text(amountStaked + " NFT");
                    //$("#nftstake-api").text(res.apy);
                    //$("#nftstake-staked").text(res.tokensStaked);
                    }
                );
    
                staking.methods.balanceOf(currentAddr).call().then(
                    res=>{
                        nftstakestaked = res
                        $("#nftstake-staked").text("NFT STAKED AMOUNT: " +res+" SIFU NFT");
                        if(res==0){
                            $("#unstake").attr("disabled","true");
                        }
                        else{
                            $("#unstake").removeAttr("disabled");
                        }
                    }
                )
                
                //$ id = 1 - 30 days ----------------------------------/
    }
    catch(err){
        console.log(err);
    }
    try {
            
            nft1.methods.totalSupply().call().then(
                    res=>{
                        v1nftmax = res;
                    }
                );
            
            nft.methods.getTotalNFTSupply().call().then(
                    res=>{
                        v2nftmax = res;
                    }
                );
                
            nft1.methods.balanceOf(currentAddr).call().then(
                    res=>{
                        $("#nft-balance").text("NFT V1 BALANCE AVAILABLE: " +res+" SIFU NFT");
                    }
                );
                
            nft.methods.balanceOf(currentAddr).call().then(
                    res=>{
                        $("#nft-balance1").text("NFT V2 BALANCE AVAILABLE: " +res+" SIFU NFT");
                    }
                );
            
                
            nft.methods.isApprovedForAll(currentAddr, staking_ADDRESS).call().then(
                res => {
                    isApproved = res;
                    var ApproveThis;
                    if (isApproved === true || isApproved === "true"){
                        ApproveThis = 1;
                    } else {
                        ApproveThis = 0;
                    }
                
                    console.log("IsApprovedForAll NFT: " + res);
                    console.log("ApproveThis NFT Rare = " + ApproveThis);
                    
                    if (ApproveThis === 0) {
                        $("#approve").css("display", "block");
                        $("#investPress").css("display", "none");
                        $("#unstake").css("display", "none");
                    } else {
                        $("#approve").css("display", "none");
                        $("#investPress").css("display", "block");
                        $("#unstake").css("display", "block");
                        
                    }
                }
            );
            
            nft1.methods.isApprovedForAll(currentAddr, staking_ADDRESS).call().then(
                res => {
                    let isApproved1 = res;
                    var ApproveThis;
                    if (isApproved1 === true || isApproved1 === "true"){
                        ApproveThis = 1;
                    } else {
                        ApproveThis = 0;
                    }
                
                    console.log("IsApprovedForAll NFT: " + res);
                    console.log("ApproveThis NFT Rare = " + ApproveThis);
                    
                    if (ApproveThis === 0) {
                        $("#approve1").css("display", "block");
                        $("#investPress").css("display", "none");
                        $("#unstake").css("display", "none");
                    } else {
                        $("#approve1").css("display", "none");
                        $("#investPress").css("display", "block");
                        $("#unstake").css("display", "block");
                        
                    }
                }
            );
            
            staking.methods.getAllRewards(currentAddr).call().then(
                    res => {
                    //"+numberWithCommas((res / 1e18).toFixed(2)) +"    
                        $("#nftstake-earn").text("REWARD BALANCE: "+numberWithCommas((res / 1e18).toFixed(2)) +" BCH");
                        if ((res / 1e18).toFixed(0) > 0) {
                            console.log("amount is greater than 0")
                           $("#claimReward").css("display","block");
                         //  $("nftstake-pending-earn").text("Pending Reward: 0 BSJ");
                        }
                        else{
                          $("#claimReward").css("display","none"); 
                        //  console.log("amount is less than 0"+ res + (res / 1e18).toFixed(4))
                        }
                    }
                    
                );
                
            staking.methods.stakers(currentAddr).call().then(
                    pendAmount => {
                        console.log("getting the pending amount")
                        let currentTimeStamp = Math.floor(Date.now() / 1000);
						let lastStakeTime = pendAmount.timeOfLastUpdate;
						let rarity = pendAmount.rarityStaked;
                        console.log(rarity);
						let reward = ((((currentTimeStamp - lastStakeTime) * rarity) * 10) / 3600).toFixed(2);
						$("#nftstake-pending-earn").text("PENDING REWARD: "+numberWithCommas(reward)+" BCH");
						let timeStaked =  new Date(lastStakeTime * 1000);
                        let dd = String(timeStaked.getDate()).padStart(2, '0');
                        let mm = String(timeStaked.getMonth() + 1).padStart(2, '0'); //January is 0!
                        let yyyy = timeStaked.getFullYear();
                        let hh = timeStaked.getHours();
                        let ii = timeStaked.getMinutes();
                        let ss = timeStaked.getSeconds();
                        let stakeDate = yyyy+"-"+mm+"-"+dd+" "+hh+":"+ii+":"+ss;

						$("#nftstake-timestamp").text("Last Transaction Time: "+stakeDate);
    
						console.log(currentTimeStamp+" = "+lastStakeTime +" = "+ reward);
						if (reward > 0) {
						$("#claimReward").css("display","block");
						}
		        	});
                
        } catch (error){
            console.log("error fetching stakers "+error);
        }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
