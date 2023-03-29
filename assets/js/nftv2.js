let NETID = 56; // 97-testnet; 56-mainnet
let staking_ADDRESS = "0x80938251223c0cdD32A112c82E37D6784a4acF8E"; //"0xBb39BeF0BA5e38B4703334C2683cE1794069946E"; //0x95874f17CC7fD4f689aB808aa4AF9B2FDD4fa422"; //"0x484838048502B68d11009Ac8d3C7b561Ff42841f";
let rewardsPerHour = 10 * 1e18;
let nft_address= "0x495821f24Cd129002Ec9ebF01c588f05DDf0baC0";
let ABI_NFT = [{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}];

let abi_staking = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"TeamAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"addRewardTreasure","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_staker","type":"address"}],"name":"calculateRewards","outputs":[{"internalType":"uint256","name":"_rewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getAllRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getRewardsByTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getStaker","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"},{"internalType":"address[]","name":"recipient","type":"address[]"}],"name":"multisendNft","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"},{"internalType":"address[]","name":"recipient","type":"address[]"}],"name":"multisendNft2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nftCollection","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nullAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"ownerToNFTokenCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recoverETHfromContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"recoverToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverTreasure","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsPerHour","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftCollection","type":"address"}],"name":"setNftCollection","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newValue","type":"uint256"}],"name":"setRewardsPerHour","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsToken","type":"address"}],"name":"setRewardsToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_TeamAddress","type":"address"}],"name":"setTeamAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_TotalAllocPoint","type":"uint256"}],"name":"setTotalAllocPoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"},{"internalType":"uint256[]","name":"_rarity","type":"uint256[]"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakers","outputs":[{"internalType":"uint256","name":"rarityStaked","type":"uint256"},{"internalType":"uint256","name":"amountStaked","type":"uint256"},{"internalType":"uint256","name":"timeOfLastUpdate","type":"uint256"},{"internalType":"uint256","name":"unclaimedRewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasure","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"userStakeInfo","outputs":[{"internalType":"uint256","name":"_tokensStaked","type":"uint256"},{"internalType":"uint256","name":"_availableRewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];

let multisender_ADDRESS = "0x0aDb5Af66dE60A86Ad09adC7cd22CBF736aB6E4d"; //"0xE918B9DD95046B9ce8704E4f27a922310fB8b7d7";
let ABI_multisender = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"","type":"string"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"Log","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"}],"name":"LogTokenApproval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"}],"name":"LogTokenBulkSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"}],"name":"LogTokenBulkSentETH","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"RewardLiquidityProviders","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountIn","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"path","type":"address[]"}],"name":"SwapETHForTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountIn","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"path","type":"address[]"}],"name":"SwapTokensForETH","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalEarned","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ctime","type":"uint256"}],"name":"inventReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"investorAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"investmentPlan","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"interestRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"investmentDate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"releaseDate","type":"uint256"}],"name":"investmentReport","type":"event"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"ApproveERC20Token1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_charityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_devFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_marketingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_taxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"antiBotEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"blacklistMode","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"charityTokensCollected","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"charityWalletAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimInvestment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deadWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devTokensCollected","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devWalletAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"}],"name":"enable_blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_to","type":"address[]"},{"internalType":"uint256[]","name":"_value","type":"uint256[]"}],"name":"ethSendDifferentValue","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_to","type":"address[]"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"ethSendSameValue","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_users","type":"address[]"}],"name":"includeToWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"investment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isInvested","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"amountTokenInvested","type":"uint256"},{"internalType":"uint256","name":"interestRate","type":"uint256"},{"internalType":"uint256","name":"investDate","type":"uint256"},{"internalType":"uint256","name":"releaseDate","type":"uint256"},{"internalType":"uint256","name":"totalTokenEarned","type":"uint256"},{"internalType":"bool","name":"releaseStatus","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityTokensCollected","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"bool","name":"status","type":"bool"}],"name":"manage_blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"burnAmount","type":"uint256"}],"name":"manualBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"marketingTokensCollected","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingWalletAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumTokensBeforeSwapAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"uint256[]","name":"tokens","type":"uint256[]"}],"name":"multiTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"multiTransferFixed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openTrade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pinkAntiBot","outputs":[{"internalType":"contract IPinkAntiBot","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pinkAntiBot_","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"myadd","type":"address[]"},{"internalType":"uint256","name":"val","type":"uint256"}],"name":"read","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"recoverETHfromContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"recoverTokenFromContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address[]","name":"_to","type":"address[]"},{"internalType":"uint256[]","name":"_value","type":"uint256[]"}],"name":"sendDifferentValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address[]","name":"_to","type":"address[]"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"sendSameValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address[]","name":"_to","type":"address[]"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"sendSameValueContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"token","type":"address"}],"name":"sendTokenToContract","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taxFee","type":"uint256"},{"internalType":"uint256","name":"liquidityFee","type":"uint256"},{"internalType":"uint256","name":"devFee","type":"uint256"},{"internalType":"uint256","name":"marketingFee","type":"uint256"},{"internalType":"uint256","name":"charityFee","type":"uint256"}],"name":"setAllFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_charityWallet","type":"address"}],"name":"setCharityWalletAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devWallet","type":"address"}],"name":"setDevWalletAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enable","type":"bool"}],"name":"setEnableAntiBot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_investmentPlan","type":"uint256"},{"internalType":"uint256","name":"_interestRate","type":"uint256"}],"name":"setInvestmentPlan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_marketingWallet","type":"address"}],"name":"setMarketingWalletAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTxAmount","type":"uint256"}],"name":"setMaxTxAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minimumTokensBeforeSwap","type":"uint256"}],"name":"setNumTokensSellToAddToLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taxFee","type":"uint256"},{"internalType":"uint256","name":"liquidityFee","type":"uint256"},{"internalType":"uint256","name":"devFee","type":"uint256"},{"internalType":"uint256","name":"marketingFee","type":"uint256"},{"internalType":"uint256","name":"charityFee","type":"uint256"}],"name":"setSaleFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"liquidityFee","type":"uint256"}],"name":"setSaleLiquidityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_AntiBotAddress","type":"address"}],"name":"setpinkAntiBotAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stopTrade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquify","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

var currentAddr;
var networkID = 0;
var web3 = null;
var multisenderWeb3 = null;
var multisender = null;
var staking = null;
var allStakes = [];
let nftRarity = {"mystic":1,"ledgendary":2,"epic":3,"rare":4,"uncommon":5, "common":6 };

var multisenderObjects = { 
    airdropAddresses: [],
    airdropAmount: [],
    rightArray: [],
    wrongArray: [],
    isSameAmount: 0,
    numWallet: "",
    token: ""
}

async function getRarityValue(color) {
	return nftRarity[color];
}

async function getRarity(id) {
    
let data = await $.getJSON('JSON/nftV2.json');
    if (data) {
        let color = data[id].attributes[0]["value"];
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
    web3 = null;
    multisenderWeb3 = null;
    multisenderContractInfo();
    Connect();
    
    $("#nft-balance").text("NFT BALANCE AVAILABLE: 0 SIFU NFT");
    $("#nftstake-staked").text("NFT BALANCE: 0 SIFU NFT");
    $("#nftstake-earn").text("REWARD BALANCE: 0 BCH");
    $("#nftstake-pending-earn").text("PENDING REWARD: 0 BCH");
    //getPrice();
   
    
});


async function multisenderContractInfo() {
    if (NETID == 56) {
        web3 = new Web3('https://bsc-dataseed.binance.org/');
    } else {
        web3 = new Web3('https://data-seed-prebsc-2-s2.binance.org:8545');
    }
    multisender = await new web3.eth.Contract(ABI_multisender, multisender_ADDRESS);
    staking = await new web3.eth.Contract(abi_staking, staking_ADDRESS);
    nft = await new web3.eth.Contract(ABI_NFT, nft_address);
   // update();
}

async function Connect() {
    if (window.ethereum) {
        console.log("connecting...");
        multisenderWeb3 = new Web3(window.ethereum)
    
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" })
            let accounts = await window.ethereum.request({ method: 'eth_accounts' })
            currentAddr = accounts[0];
            window.ethereum.on('chainChanged', (chainId) => {
                window.location.reload();
            });
            window.ethereum.on('accountsChanged', function(accounts) {
                window.location.reload();
            })
            console.log("it should connect...");
            runDAPP();
            return
        } catch (error) {
            console.error("Error occur: "+error)
        }
    }
}



async function runDAPP() {
    networkID = await multisenderWeb3.eth.net.getId();
       if (NETID == networkID) {
        web3 = multisenderWeb3;
        multisender = await new web3.eth.Contract(ABI_multisender, multisender_ADDRESS);
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
        network: 'bnb',
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

$("#max").click(function(){
    var balance = $("#balance").val();
    $("#amount").val(balance);
});

function maxBalance(){
     var balance = $("#balance").val();
    $("#amount").val(balance);
}
async function updateParameters() {
     var stakingRecord = "";
     if (staking && currentAddr != null && currentAddr != undefined && currentAddr != "") {

    }
}


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
            var tokenid = $("#amount").val();
            var NFTID = tokenid.split(",");
            var rarity = [];
            console.log(NFTID);
            for(var i = 0; i < NFTID.length; i++){
                let nid = NFTID[i].trim();
                let rVal = await getRarity(nid);
                if(rVal < 1 || rVal =="undefined" || rVal =="" || nid > 5){
                    rVal = 1;
                }
                rarity.push(rVal);  
                
            }
            console.log("-"+ rarity);
            staking.methods.stake(NFTID, rarity).send({
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

    }
});

$("#unstake").click(() => {
	$("#report1").html("Processing...");
  try {
        if (staking && currentAddr != null) {
            var tokenid = $("#amount").val();
            var NFTID = tokenid.split(",");
            staking.methods.withdraw(NFTID).send({
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
            nft.methods.balanceOf(currentAddr).call().then(
                    res=>{
                        $("#nft-balance").text("NFT BALANCE AVAILABLE: " +res+" SIFU NFT");
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
            
             staking.methods.getAllRewards(currentAddr).call().then(
                    res => {
                        
                        //"+numberWithCommas((res / 1e18).toFixed(2)) +"    
                        $("#nftstake-earn").text("REWARD BALANCE: 0 BCH");
                        if ((res / 1e18).toFixed(0) > 0) {
                            console.log("amount is greater than 0")
                          //  $("#claimReward").css("display","block");
                          // $("nftstake-pending-earn").text("Pending Reward: 0 BSJ");
                        }
                        else{
                          $("#claimReward").css("display","none"); 
                          console.log("amount is less than 0"+ res + (res / 1e18).toFixed(4))
                        }
                    }
                    
                );
                
            staking.methods.stakers(currentAddr).call().then(
                    pendAmount => {
                        console.log("getting the pending amount")
                        let currentTimeStamp = Math.floor(Date.now() / 1000);
						let lastStakeTime = 1668908155; //pendAmount.timeOfLastUpdate;
						let rarity = pendAmount.amountStaked;
                        console.log(rarity);
						let reward = ((((currentTimeStamp - lastStakeTime) * rarity) * 10) / 3600).toFixed(2);
						$("#nftstake-pending-earn").text("PENDING REWARD: "+numberWithCommas(reward)+" BCH");
						console.log(currentTimeStamp+" = "+lastStakeTime +" = "+ reward);
		        	});
                
                
        } catch (error) {
            console.log ("error fetching stakers "+error);
        }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}