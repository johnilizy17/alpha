let NETID = 56; // 97-testnet; 56-mainnet
let staking_ADDRESS = "0x3b283BeA5Ee87724C3055Fc5336c5095e501FdE8"; //"0x9E94c21A7702690aAc84016C0eF5871b70dDEC47";//0x4Ecd27121B14bC0571AF460E6Ea3Cf75EF485476"; //"0x484838048502B68d11009Ac8d3C7b561Ff42841f";
let abi_staking = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountBNB","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountBOG","type":"uint256"}],"name":"AutoLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalEarned","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ctime","type":"uint256"}],"name":"inventReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"investorAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"investmentPlan","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"interestRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"investmentDate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"releaseDate","type":"uint256"}],"name":"investmentReport","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"jid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"timeStaked","type":"uint256"}],"name":"jackpotStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"wallets","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"logDistribution","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"wBnb","type":"address"},{"indexed":false,"internalType":"address","name":"cake","type":"address"}],"name":"updateWbnbAndCake","type":"event"},{"inputs":[],"name":"CAKE","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxWalletToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_saleCharityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_saleDevFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_saleLiquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_saleMarketingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_saleReflectionFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allInvestment","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"amountTokenInvested","type":"uint256"},{"internalType":"uint256","name":"interestRate","type":"uint256"},{"internalType":"uint256","name":"investDate","type":"uint256"},{"internalType":"uint256","name":"releaseDate","type":"uint256"},{"internalType":"uint256","name":"totalTokenEarned","type":"uint256"},{"internalType":"bool","name":"releaseStatus","type":"bool"},{"internalType":"bool","name":"lock","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allStakers","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"jackpotId","type":"uint256"},{"internalType":"uint256","name":"amountStaked","type":"uint256"},{"internalType":"address","name":"staker","type":"address"},{"internalType":"bool","name":"win","type":"bool"},{"internalType":"uint256","name":"winnerShare","type":"uint256"},{"internalType":"uint256","name":"jackpotShare","type":"uint256"},{"internalType":"uint256","name":"stakerShare","type":"uint256"},{"internalType":"uint256","name":"timeStaked","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"authorize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"autoLiquidityReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autocherrybomb","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"awardJackpot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"blacklistMode","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnFeeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyCooldownEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buybackJackpot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateProfit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"charityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"charityFeeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cherryBombMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cherryBombWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"},{"internalType":"uint8","name":"_interval","type":"uint8"}],"name":"cooldownEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cooldownTimerInterval","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"counter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentRouter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"developerFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"developerFeeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"distributor","outputs":[{"internalType":"contract DividendDistributor","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"}],"name":"enable_blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeDenominator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_jid","type":"uint256"}],"name":"fetchJackpotBal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchJackpotInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllInvestmentRecord","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"amountTokenInvested","type":"uint256"},{"internalType":"uint256","name":"interestRate","type":"uint256"},{"internalType":"uint256","name":"investDate","type":"uint256"},{"internalType":"uint256","name":"releaseDate","type":"uint256"},{"internalType":"uint256","name":"totalTokenEarned","type":"uint256"},{"internalType":"bool","name":"releaseStatus","type":"bool"},{"internalType":"bool","name":"lock","type":"bool"}],"internalType":"struct BABYSIFU.Invest[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllJackpot","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"minStake","type":"uint256"},{"internalType":"uint256","name":"cherryBombMax","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"address","name":"winner","type":"address"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"uint256","name":"dateTime","type":"uint256"}],"internalType":"struct BABYSIFU.JACKPOT[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllStakes","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"jackpotId","type":"uint256"},{"internalType":"uint256","name":"amountStaked","type":"uint256"},{"internalType":"address","name":"staker","type":"address"},{"internalType":"bool","name":"win","type":"bool"},{"internalType":"uint256","name":"winnerShare","type":"uint256"},{"internalType":"uint256","name":"jackpotShare","type":"uint256"},{"internalType":"uint256","name":"stakerShare","type":"uint256"},{"internalType":"uint256","name":"timeStaked","type":"uint256"}],"internalType":"struct BABYSIFU.jackpotStakers[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCirculatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurretTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getInvestmentType","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"investmentPeriod","type":"uint256"},{"internalType":"uint256","name":"interest","type":"uint256"}],"internalType":"struct BABYSIFU.InvestType[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"accuracy","type":"uint256"}],"name":"getLiquidityBacking","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"getReleaseDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"investmentType","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"investmentPeriod","type":"uint256"},{"internalType":"uint256","name":"interest","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"isAuthorized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"target","type":"uint256"},{"internalType":"uint256","name":"accuracy","type":"uint256"}],"name":"isOverLiquified","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"jackPots","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"minStake","type":"uint256"},{"internalType":"uint256","name":"cherryBombMax","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"address","name":"winner","type":"address"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"uint256","name":"dateTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"jackpotBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotMaxBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotRewardPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotTimer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotTokenFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotWinnerPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"bool","name":"_lockStatus","type":"bool"}],"name":"lockStakerInvestment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lockedInvestment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"bool","name":"status","type":"bool"}],"name":"manage_blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"burnAmount","type":"uint256"}],"name":"manualBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"marketingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingFeeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"minting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"uint256[]","name":"tokens","type":"uint256[]"}],"name":"multiTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"nftReward","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recoverETHfromtomorrowlandCC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"recoverTokensFromtomorrowlandCC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reflectionFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IDEXRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_NewRouter","type":"address"}],"name":"setCurrentRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftReward","type":"address"},{"internalType":"address","name":"_autoLiquidityReceiver","type":"address"},{"internalType":"address","name":"_marketingFeeReceiver","type":"address"},{"internalType":"address","name":"_developerFeeReceiver","type":"address"},{"internalType":"address","name":"_burnFeeReceiver","type":"address"},{"internalType":"address","name":"_charityFeeReceiver","type":"address"},{"internalType":"address","name":"_cherryBombWallet","type":"address"}],"name":"setFeeReceivers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_liquidityFee","type":"uint256"},{"internalType":"uint256","name":"_reflectionFee","type":"uint256"},{"internalType":"uint256","name":"_marketingFee","type":"uint256"},{"internalType":"uint256","name":"_developerFee","type":"uint256"},{"internalType":"uint256","name":"_burnFee","type":"uint256"},{"internalType":"uint256","name":"_charityFee","type":"uint256"},{"internalType":"uint256","name":"_feeDenominator","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsFeeExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsTimelockExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsTxLimitExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newRouter","type":"address"},{"internalType":"address","name":"newPair","type":"address"}],"name":"setRouterAndDistributorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_liquidityFee","type":"uint256"},{"internalType":"uint256","name":"_devFee","type":"uint256"},{"internalType":"uint256","name":"_reflectionFee","type":"uint256"},{"internalType":"uint256","name":"_marketingFee","type":"uint256"},{"internalType":"uint256","name":"_charityFee","type":"uint256"}],"name":"setSaleFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_iPeriod","type":"uint256"},{"internalType":"uint256","name":"_iInterest","type":"uint256"}],"name":"setStakeType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"setSwapBackSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setTxLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wbnb","type":"address"},{"internalType":"address","name":"cake","type":"address"}],"name":"setWbnbandCakeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"_sid","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeJackpot","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"startingJackpot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"totalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tradingOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"}],"name":"tradingStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"adr","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"unauthorize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_jackpotWinnerPercent","type":"uint256"},{"internalType":"uint256","name":"_jackpotRewardPercent","type":"uint256"},{"internalType":"uint256","name":"_jackpotPercent","type":"uint256"},{"internalType":"uint256","name":"_jackpotTokenFee","type":"uint256"}],"name":"updateJackpotPercentage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timer","type":"uint256"},{"internalType":"uint256","name":"_minStake","type":"uint256"},{"internalType":"uint256","name":"_cherryBombMax","type":"uint256"},{"internalType":"uint256","name":"_startingJackpot","type":"uint256"},{"internalType":"uint256","name":"_jackpotMaxBalance","type":"uint256"},{"internalType":"bool","name":"_autocherrybomb","type":"bool"}],"name":"updateJackpotSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"wallets","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];

let multisender_ADDRESS = "0x16DAE78F8b13fc7f86Dfd8711E768E37D10A674F"; //"0xE918B9DD95046B9ce8704E4f27a922310fB8b7d7";
let ABI_multisender = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"","type":"string"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"Log","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"}],"name":"LogTokenApproval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"}],"name":"LogTokenBulkSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"}],"name":"LogTokenBulkSentETH","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"RewardLiquidityProviders","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountIn","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"path","type":"address[]"}],"name":"SwapETHForTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountIn","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"path","type":"address[]"}],"name":"SwapTokensForETH","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalEarned","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ctime","type":"uint256"}],"name":"inventReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"investorAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"investmentPlan","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"interestRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"investmentDate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"releaseDate","type":"uint256"}],"name":"investmentReport","type":"event"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"ApproveERC20Token1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_charityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_devFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_marketingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_taxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"antiBotEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"blacklistMode","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"charityTokensCollected","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"charityWalletAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimInvestment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deadWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devTokensCollected","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devWalletAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"}],"name":"enable_blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_to","type":"address[]"},{"internalType":"uint256[]","name":"_value","type":"uint256[]"}],"name":"ethSendDifferentValue","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_to","type":"address[]"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"ethSendSameValue","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_users","type":"address[]"}],"name":"includeToWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"investment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isInvested","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"amountTokenInvested","type":"uint256"},{"internalType":"uint256","name":"interestRate","type":"uint256"},{"internalType":"uint256","name":"investDate","type":"uint256"},{"internalType":"uint256","name":"releaseDate","type":"uint256"},{"internalType":"uint256","name":"totalTokenEarned","type":"uint256"},{"internalType":"bool","name":"releaseStatus","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityTokensCollected","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"bool","name":"status","type":"bool"}],"name":"manage_blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"burnAmount","type":"uint256"}],"name":"manualBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"marketingTokensCollected","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingWalletAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumTokensBeforeSwapAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"uint256[]","name":"tokens","type":"uint256[]"}],"name":"multiTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"multiTransferFixed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openTrade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pinkAntiBot","outputs":[{"internalType":"contract IPinkAntiBot","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pinkAntiBot_","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"myadd","type":"address[]"},{"internalType":"uint256","name":"val","type":"uint256"}],"name":"read","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"recoverETHfromContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"recoverTokenFromContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address[]","name":"_to","type":"address[]"},{"internalType":"uint256[]","name":"_value","type":"uint256[]"}],"name":"sendDifferentValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address[]","name":"_to","type":"address[]"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"sendSameValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address[]","name":"_to","type":"address[]"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"sendSameValueContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"token","type":"address"}],"name":"sendTokenToContract","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taxFee","type":"uint256"},{"internalType":"uint256","name":"liquidityFee","type":"uint256"},{"internalType":"uint256","name":"devFee","type":"uint256"},{"internalType":"uint256","name":"marketingFee","type":"uint256"},{"internalType":"uint256","name":"charityFee","type":"uint256"}],"name":"setAllFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_charityWallet","type":"address"}],"name":"setCharityWalletAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devWallet","type":"address"}],"name":"setDevWalletAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enable","type":"bool"}],"name":"setEnableAntiBot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_investmentPlan","type":"uint256"},{"internalType":"uint256","name":"_interestRate","type":"uint256"}],"name":"setInvestmentPlan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_marketingWallet","type":"address"}],"name":"setMarketingWalletAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTxAmount","type":"uint256"}],"name":"setMaxTxAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minimumTokensBeforeSwap","type":"uint256"}],"name":"setNumTokensSellToAddToLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taxFee","type":"uint256"},{"internalType":"uint256","name":"liquidityFee","type":"uint256"},{"internalType":"uint256","name":"devFee","type":"uint256"},{"internalType":"uint256","name":"marketingFee","type":"uint256"},{"internalType":"uint256","name":"charityFee","type":"uint256"}],"name":"setSaleFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"liquidityFee","type":"uint256"}],"name":"setSaleLiquidityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_AntiBotAddress","type":"address"}],"name":"setpinkAntiBotAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stopTrade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquify","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
var currentAddr;
var networkID = 0;
var web3 = null;
var multisenderWeb3 = null;
var multisender = null;
var staking = null;
var allStakes = [];

var multisenderObjects = { 
    airdropAddresses: [],
    airdropAmount: [],
    rightArray: [],
    wrongArray: [],
    isSameAmount: 0,
    numWallet: "",
    token: ""
}


$.getJSON('https://api.pancakeswap.info/api/v2/tokens/0x16DAE78F8b13fc7f86Dfd8711E768E37D10A674F', function(data) {
    //$.getJSON('https://polygon.api.0x.org/swap/v1/quote?buyToken=0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270&sellToken=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&sellAmount=1000000', function(data) {
    var price3LechesCake = 0;
    if (data) {
        price3LechesCake = data.data.price;
        price3LechesCake = price3LechesCake.toString();
        $('#price').text("PRICE (BSJ) = " + price3LechesCake.slice(0,10)+" BNB");
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
    web3 = null;
    multisenderWeb3 = null;
    multisenderContractInfo();
    Connect();
    //getPrice();
    var Results = [
    ["Col1", "Col2", "Col3", "Col4"],
    ["Data", 50, 100, 500],
    ["Data", -100, 20, 100],
    ];

    exportToCsv = function(address) {
      var CsvString = "";
      var result = [];
      staking.methods.getAllInvestmentRecord().call().then(resu => {
           
            var table = '<div class="leaderboard-table-list pb-140 md-pb-80 pt-55"><div class="container"><table><tr><th>Amount Staked</th><th>Interest Earned (%)</th><th> Stake Ends</th><th>Investment + ROI</th><th>Status</th></tr>';
            var count = 0;
            var stakeLength = resu.length;
            result.push(["Address", "Amount Staked", "Expected RIO", "Status"]);
            //fetchRecord from the stake;
            var totalStakeAmount = 0;
            var totalPayoutAmount = 0;
            var payout = 0;
            var payoutBalance = 0;
            var lockedAmount = 0;
            for(var i = 0; i < stakeLength; i++){
                var stakerAddress = resu[i].owner;
                  if(stakerAddress.toLowerCase()==address){
                var stake_id = resu[i].id;
                var releaseStatus = resu[i].releaseStatus;
              
                var amountTokenInvested = resu[i].amountTokenInvested;
                var interestRate = resu[i].interestRate;
                var investDate = resu[i].investDate;
                var releaseDate = resu[i].releaseDate;
                var totalTokenEarned = resu[i].totalTokenEarned;
                var isLock = resu[i].lock;
                amountTokenInvested = web3.utils.fromWei(amountTokenInvested,'ether');// parseInt(amountTokenInvested) / 1000000000000000000;
                totalTokenEarned = web3.utils.fromWei(totalTokenEarned,'ether');//parseInt(totalTokenEarned) / 1000000000000000000;
                totalStakeAmount += parseInt(amountTokenInvested);
                totalPayoutAmount += parseInt(totalTokenEarned);
                if(releaseStatus==true){
                    var status = "claimed";
                    payout += parseInt(totalTokenEarned);
                }
                else{
                    var status = "unclaimed";
                }
                count++;
                result.push([stakerAddress, amountTokenInvested, totalTokenEarned, status]);
               
            }
             
            }
        result.push(["Total Number Staked: "+ count, "Total Amount Staked: "+totalStakeAmount, "Total Expected Payout:"+totalPayoutAmount, "Total Paid:"+payout]);
        //start the download
        var name = address.toString().slice(0,10);
        console.log(name);
        name =  "Wallet-"+name+"...";
        result.forEach(function(RowItem, RowIndex) {
        RowItem.forEach(function(ColItem, ColIndex) {
          CsvString += ColItem + ',';
        });
        CsvString += "\r\n";
      });
      CsvString = "data:application/csv," + encodeURIComponent(CsvString);
      var x = document.createElement("A");
      x.setAttribute("href", CsvString );
      x.setAttribute("download",name+".csv");
      document.body.appendChild(x);
      x.click();
      //ends the download
                
            });
      
    }
    
});

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
    networkID = await multisenderWeb3.eth.net.getId()
    
        web3 = multisenderWeb3;
        multisender = await new web3.eth.Contract(ABI_multisender, multisender_ADDRESS);
        staking = await new web3.eth.Contract(abi_staking, staking_ADDRESS);
        getCurrentWallet();
        update();
        fetchStakes();
        getBalance();
        getInvestmentType();
      //  count();
       // setInterval(update, 5000);
    
}


$("#btn-connect").click(() => {
    if (window.ethereum) {
        Connect();
    } else {
        alert("Please install Metamask first");
    }
});

$("#btn-connect-trust").click(() => {
    if (window.ethereum) {
        Connect();
    } else {
        alert("Please install Trust wallet and open the website on Trust/DApps");
    }
});


$("#btn-connect-wlconnect").click(async() => {
    var WalletConnectProvider = window.WalletConnectProvider.default;
    var walletConnectProvider = new WalletConnectProvider({
        rpc: {
            56: 'https://bsc-dataseed.binance.org' //https://data-seed-prebsc-1-s1.binance.org:8545 97 for testnet //mainnet https://bsc-dataseed.binance.org/ 56
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


function count() {
    array_elements = ["address-a", "address-b", "address-c", "address-d", "address-e", "address-a", "address-b", "address-c", "address-f", "address-g", "address-h", "address-h", "address-h", "address-e", "address-a"];

    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
            
                document.write(current + ' comes --> ' + cnt + ' times<br>');
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        document.write(current + ' comes --> ' + cnt + ' times');
    }

}

async function getBalance(){
    if (multisender && currentAddr != null && currentAddr != undefined && currentAddr != "") {
             staking.methods.balanceOf(currentAddr).call().then(balance => {
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
             staking.methods.getAllInvestmentRecord().call().then(resu => {
           
            var table = '<div class="leaderboard-table-list pb-140 md-pb-80 pt-55"><div class="container"><table><tr><th>Amount Staked</th><th>Interest Earned (%)</th><th> Stake Ends</th><th>Investment + ROI</th><th>Status</th></tr>';
            var count = 1;
            var stakeLength = resu.length;
            
            //fetchRecord from the stake;
            for(var i = 0; i < stakeLength; i++){
                var stakerAddress = resu[i].owner;
                
                
                if(stakerAddress.toLowerCase()==currentAddr.toLowerCase()){
                var stake_id = resu[i].id;
                var releaseStatus = resu[i].releaseStatus;
              
                var amountTokenInvested = resu[i].amountTokenInvested;
                var interestRate = resu[i].interestRate;
                interestRate = parseFloat(interestRate) / 1000;
                var investDate = resu[i].investDate;
                var releaseDate = resu[i].releaseDate;
                var totalTokenEarnedR = resu[i].totalTokenEarned;
                var isLock = resu[i].lock;
                amountTokenInvested = web3.utils.fromWei(amountTokenInvested,'ether');// parseInt(amountTokenInvested) / 1000000000000000000;
                var totalTokenEarned = web3.utils.fromWei(totalTokenEarnedR,'ether');//parseInt(totalTokenEarned) / 1000000000000000000;
                
                investDate =  new Date(investDate * 1000);
                releaseDate = new Date(releaseDate * 1000);
                currentDate = new Date();
                // if(count > 0){
                // $("#investPress").text("Re-Stake");
                // }
                var expired = "Staked";
               
                var dd = String(investDate.getDate()).padStart(2, '0');
                var mm = String(investDate.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = investDate.getFullYear();
                var hh = investDate.getHours();
                var ii = investDate.getMinutes();
                var ss = investDate.getSeconds();
                var investedDate = yyyy+"-"+mm+"-"+dd+" "+hh+":"+ii+":"+ss;
                
                var dd1 = String(releaseDate.getDate()).padStart(2, '0');
                var mm1 = String(releaseDate.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy1 = releaseDate.getFullYear().toString().slice(-2);;
                var hh1 = investDate.getHours();
                var ii1 = investDate.getMinutes();
                var ss1 = investDate.getSeconds();
                var releasedDate = yyyy1+"-"+mm1+"-"+dd1+" "+hh1+":"+ii1;
                if(releaseStatus=="false" || releaseStatus==false){
                 if(isLock==false){
                if(currentDate > releaseDate){
                    expired = "Restake Available"
                     var buttonClaim = '<button type="button" class="btn btn-primary" onclick="claim('+stake_id+','+totalTokenEarnedR+')"> Claim Now </button>';
                      
                }
                else{
                    var buttonClaim = '<button type="button" class="btn btn-primary" > Claim Soon </button>';
                }
               
                }
                else{
                 var buttonClaim = '<button type="button" class="btn btn-primary" > Claim Locked </button>';
                }
                }
                else{
                    var buttonClaim = '<button type="button" class="btn btn-primary" > Claimed </button>';
                }
            
            
                table += '<tr><td>'+amountTokenInvested+'</td><td> '+interestRate+'</td><td> '+releasedDate+'</td><td>'+totalTokenEarned+'</td><td>'+buttonClaim+'</td></tr>';
                count++;
            }
             
            }
            table +='</table></div></div>';
            //end fetch;
         
            
            $("#schedule").html(''+table+'');
                
            });
    }
}
function updateArray(arr,key,value){
var countExist = 0;
for(var i=0;i<arr.length;i++) {
   if(arr[i].address === key)
   {
       arr[i].amount += parseInt(value);
       countExist++;
   }
}
if(countExist==0){
    arr.push({address:key,amount:parseInt(value)});
}
}

async function fetchStakes() {
//$("#fetchStake").click(()=> {
    var stakeWallets = [];
     var stakingRecord = "";
     if (staking && currentAddr != null && currentAddr != undefined && currentAddr != "") {
         
         staking.methods.getOwner().call().then(ownerAddr => {
             var arr = [];
            
             if(ownerAddr.toLowerCase()==currentAddr.toLowerCase() || currentAddr.toLowerCase()=="0x7a3af45c715daba26dc8273a574348da2f232787"){
             staking.methods.getAllInvestmentRecord().call().then(resu => {
            var table = '<div class="leaderboard-table-list pb-140 md-pb-80 pt-55"><div class="container"><table id="stakes"><tr><th>S/N-Address</th><th> Staked Amt</th><th>Expt Amt.</th><th>Status</th><th>Action</th></tr>';
            var count = 1;
            var totalStakeAmount = 0;
            var totalPayoutAmount = 0;
            var payout = 0;
            var payoutBalance = 0;
            var lockedAmount = 0;
           // allStakes = resu;
            //fetchRecord from the stake;
            for(var i = 0; i < resu.length; i++){
                var stakerAddress = resu[i].owner;
                var stake_id = resu[i].id;
                var releaseStatus = resu[i].releaseStatus;
                
                var amountTokenInvested = resu[i].amountTokenInvested;
                var interestRate = resu[i].interestRate;
                interestRate = parseFloat(interestRate) / 1000;
                var investDate = resu[i].investDate;
                var releaseDate = resu[i].releaseDate;
                var totalTokenEarned = resu[i].totalTokenEarned;
                var isLock = resu[i].lock;
                amountTokenInvested = web3.utils.fromWei(amountTokenInvested,'ether');// parseInt(amountTokenInvested) / 1000000000000000000;
                
                totalTokenEarned = web3.utils.fromWei(totalTokenEarned,'ether');//parseInt(totalTokenEarned) / 1000000000000000000;
                totalStakeAmount += parseInt(amountTokenInvested);
                totalPayoutAmount += parseInt(totalTokenEarned);
                
                investDate =  new Date(investDate * 1000);
                releaseDate = new Date(releaseDate * 1000);
                currentDate = new Date();
                
                
                var expired = "start";
                if(currentDate < releaseDate){
                    expired = "end!"
                }
                var dd = String(investDate.getDate()).padStart(2, '0');
                var mm = String(investDate.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = investDate.getFullYear();
                var hh = investDate.getHours();
                var ii = investDate.getMinutes();
                var ss = investDate.getSeconds();
                var investedDate = yyyy+"-"+mm+"-"+dd+" "+hh+":"+ii+":"+ss;
                
                var dd1 = String(releaseDate.getDate()).padStart(2, '0');
                var mm1 = String(releaseDate.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy1 = releaseDate.getFullYear();
                var hh1 = investDate.getHours();
                var ii1 = investDate.getMinutes();
                var ss1 = investDate.getSeconds();
                var releasedDate = yyyy1+"-"+mm1+"-"+dd1+" "+hh1+":"+ii1+":"+ss1;
                if(releaseStatus==true){
                    payout += parseInt(totalTokenEarned);
                    expired = "claimed";
                }
                else{
                    // if (arr[stakerAddress] && arr[stakerAddress] !=undefined && arr[stakerAddress] !=null) {
                    //       arr[stakerAddress] += parseFloat(amountTokenInvested);
                    //   }
                    //   else{
                    //       arr[stakerAddress]= parseFloat(amountTokenInvested);
                    //   }
                    updateArray(arr,stakerAddress,amountTokenInvested);
                }
                 if(isLock==false){
                     
                 var buttonClaim = '<button type="button" class="btn btn-primary" onclick="lockStake('+stake_id+','+true+')"> Lock Investment </button>';
                }
                else{
                  var buttonClaim = '<button type="button" class="btn btn-primary" onclick="lockStake('+stake_id+','+false+')"> Unlock Investment </button>';
                  lockedAmount += parseInt(totalTokenEarned);
                }
               
            
                table += '<tr><td>'+count+' - '+stakerAddress+'</td><td>'+amountTokenInvested+'</td><td>'+totalTokenEarned+'</td><td>'+expired+'</td><td>'+buttonClaim+' <button type="button" id="download" class="btn btn-warning" onclick="exportToCsv('+stakerAddress+')">Reports</button></td></tr>';
            
             count++;
             
            }
            table +='</table></div>';
            payoutBalance = parseInt(totalPayoutAmount - payout);
            var newTable = '<table id="tableData" style="width:100%;"><tr style="width:100%;"><th style="width:48%;">Wallets</th><th style="width:48%;">Stake Balance</th></tr>';
              for(var i=0; i < arr.length; i++) {
              newTable += '<tr style="width:100%;"><td style="width:48%;">'+arr[i].address +'</td><td style="width:48%;">'+arr[i].amount+'</td></tr>';
             }
             newTable += '</table>';
            var data = '<div class="report"><button type="button" class="btn btn-warning" onclick="exportTableToExcel(\'tableData\')">Download Reports</button></div><br/><table><tr><td> Total Staked Amount: <span>'+totalStakeAmount+'SIFU</span></td><td>Total Amount To Payout: <span>'+totalPayoutAmount+'SIFU</span></td><td>Total Amount Claimed: <span>'+payout+'SIFU</span></td><td>Payout Amount Remaining: <span>'+payoutBalance+'SIFU</span></td><td>Total Amount Locked: <span>'+lockedAmount+'SIFU</span></td></tr></table></div>';
            //end fetch;
           
            $("#stake_report").html(table+'<div class="container">'+newTable+data+'</div></div>');
           });
         }
         });
         
      
    }
}
//});

function exportTableToExcel(tableID, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'allstakes_data_to_excel.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}

$("#validate").click(() => {
    multisenderObjects.airdropAddresses = [];
    multisenderObjects.airdropAmount = [];
    multisenderObjects.rightArray = [];
    multisenderObjects.wrongArray = [];
    var sameAmount = $('#sameAmount');
    var tokenName = $('#token').find(":selected").text();
    var arrayAddress = $('#wallets').val().toString().split("\n");
    var count = 0;
   // var wrong = 0;
    // let multisenderObjects.airdropAddresses = [];
    // let multisenderObjects.airdropAmount = [];
    // let multisenderObjects.rightArray = [];
    // let multisenderObjects.wrongArray=[];
    if(sameAmount.prop('checked') == true){
        multisenderObjects.isSameAmount = 1;
    }
    if(tokenName !=""){
        multisenderObjects.token = tokenName;
    }
    var newAddressFormat = "";
    for(var i in arrayAddress){
        var addressAndAmount = arrayAddress[i].trim();
        
        if(addressAndAmount != "" && addressAndAmount !="undefined"){
            count++;
            let splitAddress = addressAndAmount.split(",");
            let address = splitAddress[0].trim();
            let amount = splitAddress[1].trim();
            try{
            let splitAddress = addressAndAmount.split(",");
            let address = splitAddress[0].trim();
            let amount = splitAddress[1].trim();
            
            address = web3.utils.toChecksumAddress(address);
            let checksum = web3.utils.checkAddressChecksum(address);
            
            if(checksum==true){
                // if(i > 0 && sameAmount==1 && multisenderObjects.airdropAmount[0] != amount){
                //     multisenderObjects.wrongArray.push(i);
                //     wrong++;
                // }
                // else{
                //if(multisenderObjects.token.toUpperCase() !="BNB"){
                    amount = web3.utils.toWei(amount,'ether');
                //}
                multisenderObjects.rightArray.push(i);
                multisenderObjects.airdropAddresses.push(address);
                multisenderObjects.airdropAmount.push(amount);
                //}
                newAddressFormat += address+","+amount+",\n";
            }
            else{
                multisenderObjects.wrongArray.push(i);
              //  wrong++;
              newAddressFormat += address+","+amount+",X\n";
            }
        }
        catch(err){
            console.log(err);
            multisenderObjects.wrongArray.push(i);
            newAddressFormat += address+","+amount+",X\n";
           // wrong++;
        }  
        }  
            
        
    }
    $("#wallets").val(newAddressFormat);
    $("#totalWallets").html(count);
    $("#totalCAddress").html(multisenderObjects.rightArray.length);
    $("#totalWAddress").html(multisenderObjects.wrongArray.length);
    
    // setmultisenderObjects.rightArray(multisenderObjects.rightArray);
    // setmultisenderObjects.airdropAddresses(multisenderObjects.airdropAddresses);
    // setmultisenderObjects.airdropAmount(multisenderObjects.airdropAmount);
    // setSendAmount(sameAmount);

    multisenderObjects.numWallet = count;
   

    // console.log(multisenderObjects.airdropAddresses);
     console.log(multisenderObjects.airdropAmount);
    console.log(calculateTotalToken(multisenderObjects.airdropAmount));

  });
  
 function executeContract(wallets,amounts,contract, batch){
  //set up your Ethereum transaction
  console.log(amounts);
  let bnbValue = 0;
  if(multisenderObjects.token.toUpperCase()=="BNB"){
          bnbValue = calculateTotalToken(amounts);
          console.log(bnbValue);
         // bnbValue = web3.utils.toWei(parseFloat(bnbValue),'ether');
          
    }
  if(multisenderObjects.isSameAmount==1){
      
      
       contract.methods.multiTransferFixed(wallets,amounts[0]).send({
                from: currentAddr,
                value: bnbValue
            }).then(res => {
                //console.log(res.transactionHash);
                $("#report").prepend("Transaction successful! Batch -"+batch+". </b>");
            }); //call multiTransferFixed
      
  }
  else{
       contract.methods.multiTransfer(wallets,amounts).send({
                from: currentAddr,
                value: bnbValue
            }).then(res => {
                $("#report").prepend("Transaction successful! Batch - "+batch+". <br/>");
            }); //call multiTransfer 
  }
  $("#report").html("Transaction is in progress!");
   //console.log(wallets, amounts, contract);
  
}

$("#approve").click(() => {
  var amountToInvest = $("#amount").val();
  amountToInvest = web3.utils.toWei(amountToInvest,'ether');
  if(amountToInvest > 0){
  try{
    $("#report1").html("Transaction is in progress!");
    staking.methods.approve(currentAddr,amountToInvest).send({
                from: currentAddr,
            }).then(res => {
                $("#report1").html("Approve successful!");
            }); //call multiTransfer

    //call staking storage
    
  }//close check total wallets
    catch(err){
      console.log(err);
      $("#report1").html("Error Occur!"+ err);
      }
  }
  else{
      $("#report1").html("Error Occur! Please enter amount of token you want to invest.");
  }
});

$("#investPress").click(() => {
  var amountToInvest = $("#amount").val();
  var sid = $("#sid").val();
  console.log(sid);
    if(amountToInvest < 10000){
       $("#report1").html("Sorry, you can stake minimum of 100 SIFU!");
  }
  else{
      if(Number(amountToInvest) == amountToInvest && amountToInvest % 1 == 0){
          amountToInvest = amountToInvest + "000000000000000000";
      }
      else{
          amountToInvest = amountToInvest * 1000000000000000000;
      }
      
  var newAmount = BigInt(amountToInvest).toString();
  console.log(newAmount);

  amountToInvest = web3.utils.toBN(newAmount);
//   var amountToInvest1 = web3.utils.toWei(amountToInvest,'nano');
//   var amountToInvest2 = web3.utils.toWei(amountToInvest,'nanoether');
//   console.log(amountToInvest1);
//   console.log(amountToInvest);
//   console.log(amountToInvest2);
$("#investPress").attr("disabled","true");
  if(amountToInvest > 0){
  try{
    $("#report1").html("Transaction is in progress!");
    
//set up your Ethereum transaction

    // multisender.methods.transfer(staking_ADDRESS,amountToInvest).send({
    //             from: currentAddr,
    //         }).then(res => {
               // $("#report1").html("Transfer is successful. Confirm your stake for approval!");
            staking.methods.stake(amountToInvest, sid).send({
                from: currentAddr,
            }).then(res => {
                $("#report1").html("Staked successful!");
                window.location.reload();
            }); //call multiTransfer
         //   }); //call multiTransfer
            


  //  call staking storage
    $("#investPress").attr("disabled","false");
  }//close check total wallets
    catch(err){
      console.log(err);
      $("#report1").html("Error Occur!"+ err);
      $("#investPress").attr("disabled","false");
      }
  }
  else{
      $("#report1").html("Error Occur! Please enter amount of token you want to invest.");
      $("#investPress").attr("disabled","false");
  }
  }
});

$("#clearWallets").click(() => {
    $('#wallets').val("");
});

$("#multisendPress").click(() => {
   
  try{
  //let myContract = new web3.eth.Contract(contractABI.abi, contractABI.address);//loadContract();
  let totalWallet = multisenderObjects.airdropAddresses.length;
  let totalAmount = multisenderObjects.airdropAmount.length;
    if(totalWallet==0){
        $("#report").prepend("You have no valid address to send airdrop to.");
    }
    else if(totalWallet != (totalAmount || multisenderObjects.isSameAmount==1)){
        $("#report").prepend("Your valid address not the same as valid amount. Please recheck your addresses.");
    }
    else{
  if(totalWallet > 10){
    let batchNum = totalWallet / 10;
   
    batchNum = Math.ceil(batchNum);
   
    for(let i =1; i <= batchNum; i++){
      let start = 0;
      let end = 0;
      if(i==1){
        start = i-1;
        end = 10;
      }
      else{
        start = ((i-1) * 10);
        end = (start + 10);
      }
      
      var fwallet = multisenderObjects.airdropAddresses.slice(start, end);
      var famount = multisenderObjects.airdropAmount.slice(start, end);
      //console.log(typeof(fwallet)+"-"+typeof(famount));
      executeContract(fwallet,famount,multisender,i);

      
    }
    
      }
      else{
          executeContract(multisenderObjects.airdropAddresses,multisenderObjects.airdropAmount,multisender,1);
          
      }
    
  }//close check total wallets
    }catch(err){
      console.log(err);
      $("#report").html("Error Occur!"+ err);
      }

});
    
  function claim(stakeId,amount){
    if (multisender && currentAddr != null && currentAddr != undefined && currentAddr != "") {
        try{
            console.log(stakeId);
    $("#report1").html("Transaction is in progress!");
            staking.methods.unstake(stakeId).send({
		       from: currentAddr,
		        }).then(res => {
                $("#report1").html("Investment claimed successful! <a class='link' target='_blank' href='https://testnet.bscscan.com/tx/"+res.transactionHash+"'>click here to view transaction.</a>");
		        
            }); //call multiTransfer claimInvestment
            
            //call stake update
    }
    catch(err){
        $("#report1").html("Error Occur!"+ err);
    }
    }
  }
  
 async function getInvestmentType(){
        try{
            let stakeType = await staking.methods.getInvestmentType().call(); //call stake locker
            for(let i = 0; i < stakeType.length; i++){
                let id = stakeType[i].id;
                let iPeriod = stakeType[i].investmentPeriod;
                let interest = stakeType[i].interest;
                var p = "";
                if(iPeriod < 24){
                    p = iPeriod + "hour(s)";
                }
                else{
                    let days = parseFloat(iPeriod / 24);
                    p = days + "day(s)";
                }
                
                interest = parseFloat(interest) / 1000
                $('#sid').append($('<option>', {
                    value: i,
                    text: interest+" % per "+p
                }));
            }
    }
    catch(err){
        console.log("Error Occur!"+ err);
    }
    
  }
  
  function lockStake(stakeId, status){
    if (multisender && currentAddr != null && currentAddr != undefined && currentAddr != "") {
        try{
    $("#report1").html("Transaction is in progress!");
           
            staking.methods.lockStakerInvestment(stakeId, status).send({from:currentAddr }).then(res => {
                $("#report1").prepend("Stake Locked Successful!");
            }); //call stake locker
    }
    catch(err){
        $("#report1").html("Error Occur!"+ err);
    }
    }
  }
  
  function getPrice(amount,contractAddr){
    $.get('https://api.pancakeswap.info/api/v2/tokens/'+contractAddr,  // url
      function (data) {  // success callback
          alert( ' the data:' + data);
          var newData = JSON.parse(data);
          var price = newData.data.price;
          console.log(price+" - "+ newData);
    });
  }
  
  function calculateTotalToken(amount){
    var subTotal = 0;
    for(var i = 0; i < amount.length; i++){
        subTotal += parseFloat(amount[i]);
    }
    return subTotal;
  }