//globa variables
let NETID = 97; // 97-testnet; 56-mainnet
let staking_ADDRESS = "0x3b283BeA5Ee87724C3055Fc5336c5095e501FdE8"; //"0x9E94c21A7702690aAc84016C0eF5871b70dDEC47";//0x4Ecd27121B14bC0571AF460E6Ea3Cf75EF485476"; //"0x484838048502B68d11009Ac8d3C7b561Ff42841f";
let abi_staking = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountBNB","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountBOG","type":"uint256"}],"name":"AutoLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalEarned","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ctime","type":"uint256"}],"name":"inventReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"investorAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"investmentPlan","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"interestRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"investmentDate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"releaseDate","type":"uint256"}],"name":"investmentReport","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"jid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"timeStaked","type":"uint256"}],"name":"jackpotStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"wallets","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"logDistribution","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"wBnb","type":"address"},{"indexed":false,"internalType":"address","name":"cake","type":"address"}],"name":"updateWbnbAndCake","type":"event"},{"inputs":[],"name":"CAKE","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxWalletToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_saleCharityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_saleDevFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_saleLiquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_saleMarketingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_saleReflectionFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allInvestment","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"amountTokenInvested","type":"uint256"},{"internalType":"uint256","name":"interestRate","type":"uint256"},{"internalType":"uint256","name":"investDate","type":"uint256"},{"internalType":"uint256","name":"releaseDate","type":"uint256"},{"internalType":"uint256","name":"totalTokenEarned","type":"uint256"},{"internalType":"bool","name":"releaseStatus","type":"bool"},{"internalType":"bool","name":"lock","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allStakers","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"jackpotId","type":"uint256"},{"internalType":"uint256","name":"amountStaked","type":"uint256"},{"internalType":"address","name":"staker","type":"address"},{"internalType":"bool","name":"win","type":"bool"},{"internalType":"uint256","name":"winnerShare","type":"uint256"},{"internalType":"uint256","name":"jackpotShare","type":"uint256"},{"internalType":"uint256","name":"stakerShare","type":"uint256"},{"internalType":"uint256","name":"timeStaked","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"authorize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"autoLiquidityReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autocherrybomb","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"awardJackpot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"blacklistMode","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnFeeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyCooldownEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buybackJackpot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateProfit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"charityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"charityFeeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cherryBombMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cherryBombWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"},{"internalType":"uint8","name":"_interval","type":"uint8"}],"name":"cooldownEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cooldownTimerInterval","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"counter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentRouter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"developerFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"developerFeeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"distributor","outputs":[{"internalType":"contract DividendDistributor","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"}],"name":"enable_blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeDenominator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_jid","type":"uint256"}],"name":"fetchJackpotBal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchJackpotInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllInvestmentRecord","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"amountTokenInvested","type":"uint256"},{"internalType":"uint256","name":"interestRate","type":"uint256"},{"internalType":"uint256","name":"investDate","type":"uint256"},{"internalType":"uint256","name":"releaseDate","type":"uint256"},{"internalType":"uint256","name":"totalTokenEarned","type":"uint256"},{"internalType":"bool","name":"releaseStatus","type":"bool"},{"internalType":"bool","name":"lock","type":"bool"}],"internalType":"struct BABYSIFU.Invest[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllJackpot","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"minStake","type":"uint256"},{"internalType":"uint256","name":"cherryBombMax","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"address","name":"winner","type":"address"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"uint256","name":"dateTime","type":"uint256"}],"internalType":"struct BABYSIFU.JACKPOT[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllStakes","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"jackpotId","type":"uint256"},{"internalType":"uint256","name":"amountStaked","type":"uint256"},{"internalType":"address","name":"staker","type":"address"},{"internalType":"bool","name":"win","type":"bool"},{"internalType":"uint256","name":"winnerShare","type":"uint256"},{"internalType":"uint256","name":"jackpotShare","type":"uint256"},{"internalType":"uint256","name":"stakerShare","type":"uint256"},{"internalType":"uint256","name":"timeStaked","type":"uint256"}],"internalType":"struct BABYSIFU.jackpotStakers[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCirculatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurretTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getInvestmentType","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"investmentPeriod","type":"uint256"},{"internalType":"uint256","name":"interest","type":"uint256"}],"internalType":"struct BABYSIFU.InvestType[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"accuracy","type":"uint256"}],"name":"getLiquidityBacking","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"getReleaseDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"investmentType","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"investmentPeriod","type":"uint256"},{"internalType":"uint256","name":"interest","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"isAuthorized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"target","type":"uint256"},{"internalType":"uint256","name":"accuracy","type":"uint256"}],"name":"isOverLiquified","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"jackPots","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"minStake","type":"uint256"},{"internalType":"uint256","name":"cherryBombMax","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"address","name":"winner","type":"address"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"uint256","name":"dateTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"jackpotBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotMaxBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotRewardPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotTimer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotTokenFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotWinnerPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"bool","name":"_lockStatus","type":"bool"}],"name":"lockStakerInvestment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lockedInvestment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"bool","name":"status","type":"bool"}],"name":"manage_blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"burnAmount","type":"uint256"}],"name":"manualBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"marketingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingFeeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"minting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"uint256[]","name":"tokens","type":"uint256[]"}],"name":"multiTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"nftReward","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recoverETHfromtomorrowlandCC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"recoverTokensFromtomorrowlandCC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reflectionFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IDEXRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_NewRouter","type":"address"}],"name":"setCurrentRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftReward","type":"address"},{"internalType":"address","name":"_autoLiquidityReceiver","type":"address"},{"internalType":"address","name":"_marketingFeeReceiver","type":"address"},{"internalType":"address","name":"_developerFeeReceiver","type":"address"},{"internalType":"address","name":"_burnFeeReceiver","type":"address"},{"internalType":"address","name":"_charityFeeReceiver","type":"address"},{"internalType":"address","name":"_cherryBombWallet","type":"address"}],"name":"setFeeReceivers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_liquidityFee","type":"uint256"},{"internalType":"uint256","name":"_reflectionFee","type":"uint256"},{"internalType":"uint256","name":"_marketingFee","type":"uint256"},{"internalType":"uint256","name":"_developerFee","type":"uint256"},{"internalType":"uint256","name":"_burnFee","type":"uint256"},{"internalType":"uint256","name":"_charityFee","type":"uint256"},{"internalType":"uint256","name":"_feeDenominator","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsFeeExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsTimelockExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsTxLimitExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newRouter","type":"address"},{"internalType":"address","name":"newPair","type":"address"}],"name":"setRouterAndDistributorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_liquidityFee","type":"uint256"},{"internalType":"uint256","name":"_devFee","type":"uint256"},{"internalType":"uint256","name":"_reflectionFee","type":"uint256"},{"internalType":"uint256","name":"_marketingFee","type":"uint256"},{"internalType":"uint256","name":"_charityFee","type":"uint256"}],"name":"setSaleFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_iPeriod","type":"uint256"},{"internalType":"uint256","name":"_iInterest","type":"uint256"}],"name":"setStakeType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"setSwapBackSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setTxLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wbnb","type":"address"},{"internalType":"address","name":"cake","type":"address"}],"name":"setWbnbandCakeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"_sid","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeJackpot","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"startingJackpot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"totalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tradingOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"}],"name":"tradingStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"adr","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"unauthorize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_jackpotWinnerPercent","type":"uint256"},{"internalType":"uint256","name":"_jackpotRewardPercent","type":"uint256"},{"internalType":"uint256","name":"_jackpotPercent","type":"uint256"},{"internalType":"uint256","name":"_jackpotTokenFee","type":"uint256"}],"name":"updateJackpotPercentage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timer","type":"uint256"},{"internalType":"uint256","name":"_minStake","type":"uint256"},{"internalType":"uint256","name":"_cherryBombMax","type":"uint256"},{"internalType":"uint256","name":"_startingJackpot","type":"uint256"},{"internalType":"uint256","name":"_jackpotMaxBalance","type":"uint256"},{"internalType":"bool","name":"_autocherrybomb","type":"bool"}],"name":"updateJackpotSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"wallets","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
let currentAddr;
let networkID = 0;
let web3 = null;
let multisenderWeb3 = null;
let multisender = null;
let staking = null;
let allStakes = [];

window.addEventListener('load', () => {

    //Reset
    totalUser = 0;
    currentAddr = null;
    staking = null;
    web3 = null;
    multisenderContractInfo();
    Connect();
    //getTokenPrice(staking_ADDRESS);
});

//force connection if wallet is not connected rightly
async function multisenderContractInfo() {
    if (NETID == 56) {
        web3 = new Web3('https://bsc-dataseed.binance.org');
    } else {
        web3 = new Web3('https://data-seed-prebsc-2-s2.binance.org:8545');
    }
    multisender = await new web3.eth.Contract(ABI_multisender, multisender_ADDRESS);
    staking = await new web3.eth.Contract(abi_staking, staking_ADDRESS);
   // update();
}

// to connect with your metamask or trust wallet
async function Connect() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum)
    
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

//The main functions to run default function such as fetching user stakes and other smart contract reports
async function runDAPP() {
    networkID = await web3.eth.net.getId()
        staking = await new web3.eth.Contract(abi_staking, staking_ADDRESS);
        getCurrentWallet();
        //fetchStakes();
       // setInterval(update, 5000);
    
}


$("#btn-connect").click(() => {
    if (window.ethereum) {
        Connect();
    } else {
        alert("Please install Metamask first");
    }
});


//get data functions
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

async function getTokenPrice(contractAddr){
    $.get('https://api.pancakeswap.info/api/v2/tokens/'+contractAddr,  // url
      function (data) {  // success callback
          //alert( ' the data:' + data);
          let newData = JSON.parse(data);
          let price = newData.data.price;
          return price;
    });
}

async function getUserBalance(contractInstance, currentAddr){
    if (contractInstance && currentAddr != undefined && currentAddr != "") {
            let balance = await contractInstance.methods.balanceOf(currentAddr).call();
                if(balance > 0){
                 balance = web3.utils.fromWei(balance,'ether');
                 balance = Math.floor(balance);
                 //$("#balance").val(balance);
                 return balance;
             }
             else {
                return 0;
             }
    }
}

async function fetchStakes(contractInstance) {
    let stakeWallets = [];
     let stakingRecord = "";
     if (contractInstance && currentAddr != null && currentAddr != undefined && currentAddr != "") {
      {
        try{
         let result = await contractInstance.methods.getAllInvestmentRecord().call();
            return result;
        }//close check total wallets
        catch(err){
        return "Error Occur!"+ err;
        }
  
    }
    }
}

//user transaction functions
async function approve(contractInstance, amountToInvest){
if (contractInstance && currentAddr != undefined && currentAddr != ""){
    
  amountToInvest = web3.utils.toWei(amountToInvest,'ether');
  if(amountToInvest > 0){
  try{
    let res = await contractInstance.methods.approve(currentAddr,amountToInvest).send({ from: currentAddr });
    if(res !="undefined"){
    return 1; // "Approve successful!";    
    }
    else{
    return "Transaction failed!";//error
    }
        
  }//close check total wallets
    catch(err){
      return "Error Occur!"+ err;
      }
  }
  else{
      return "Error Occur! Please enter amount of token you want to invest.";
  }
}
}

async function depositVault(contractInstance, currentAddr, amountToInvest,refererAddress){
    if (contractInstance && currentAddr != null && currentAddr != undefined && currentAddr != "") {
    
    if(amountToInvest < 10000){
           return "Sorry, you can stake minimum of 100 SIFU!";
    }
    else{
        amountToInvest = BigInt(amountToInvest).toString();
        amountToInvest = web3.utils.toBN(amountToInvest);
      if(amountToInvest > 0){
      try{
        let res =  await contractInstance.methods.depositVault(amountToInvest, refererAddress).send({ from: currentAddr });
        if(res !="undefined"){
        return 1; // "Approve successful!";    
        }
        else{
        return "Transaction failed!";//error
        }
      }//close check total wallets
        catch(err){
          return "Error Occur!"+ err;
        }
      }
      else{
          return "Error Occur! Please enter amount of token you want to invest.";
         }
        
    }
}
}

async function claim(contractInstance, currentAddr, stakeId){
    if (contractInstance && currentAddr != null && currentAddr != undefined && currentAddr != "") {
        try{
           let res = await contractInstance.methods.claim(stakeId).send({ from: currentAddr });
        if(res !="undefined"){
        return 1; // "Approve successful!";    
        }
        else{
        return "Transaction failed!";//error
        }
    }
    catch(err){
        return "Error Occur!"+ err;
    }
    }
  }


async function compound(contractInstance, currentAddr, stakeId){
    if (contractInstance && currentAddr != null && currentAddr != undefined && currentAddr != "") {
        try{
        let res =  await contractInstance.methods.compound(stakeId).send({ from: currentAddr });
        if(res !="undefined"){
        return 1; // "Approve successful!";    
        }
        else{
        return "Transaction failed!";//error
        }
    }
    catch(err){
        return "Error Occur!"+ err;
    }
    }
  }

