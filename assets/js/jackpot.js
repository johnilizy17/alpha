let NETID = 56; // 97-testnet; 56-mainnet
let setInter = null;
let dateF = null;
let jackpot_ADDRESS = "0x3b283BeA5Ee87724C3055Fc5336c5095e501FdE8"; //"0x02D589A8BfBCcDa22Bc40803FE9b1c7ad07Ba22C";//"0xeddd645B73aAC08E0a6858a83949b4426371cD8e"; //0x4Ecd27121B14bC0571AF460E6Ea3Cf75EF485476"; //"0x484838048502B68d11009Ac8d3C7b561Ff42841f";
let jackpot_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountBNB","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountBOG","type":"uint256"}],"name":"AutoLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalEarned","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ctime","type":"uint256"}],"name":"inventReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"investorAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"investmentPlan","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"interestRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"investmentDate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"releaseDate","type":"uint256"}],"name":"investmentReport","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"jid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"timeStaked","type":"uint256"}],"name":"jackpotStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"wallets","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"logDistribution","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"wBnb","type":"address"},{"indexed":false,"internalType":"address","name":"cake","type":"address"}],"name":"updateWbnbAndCake","type":"event"},{"inputs":[],"name":"CAKE","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxWalletToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_saleCharityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_saleDevFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_saleLiquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_saleMarketingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_saleReflectionFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allInvestment","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"amountTokenInvested","type":"uint256"},{"internalType":"uint256","name":"interestRate","type":"uint256"},{"internalType":"uint256","name":"investDate","type":"uint256"},{"internalType":"uint256","name":"releaseDate","type":"uint256"},{"internalType":"uint256","name":"totalTokenEarned","type":"uint256"},{"internalType":"bool","name":"releaseStatus","type":"bool"},{"internalType":"bool","name":"lock","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allStakers","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"jackpotId","type":"uint256"},{"internalType":"uint256","name":"amountStaked","type":"uint256"},{"internalType":"address","name":"staker","type":"address"},{"internalType":"bool","name":"win","type":"bool"},{"internalType":"uint256","name":"winnerShare","type":"uint256"},{"internalType":"uint256","name":"jackpotShare","type":"uint256"},{"internalType":"uint256","name":"stakerShare","type":"uint256"},{"internalType":"uint256","name":"timeStaked","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"authorize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"autoLiquidityReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autocherrybomb","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"awardJackpot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"blacklistMode","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnFeeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyCooldownEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buybackJackpot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateProfit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"charityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"charityFeeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cherryBombMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cherryBombWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"},{"internalType":"uint8","name":"_interval","type":"uint8"}],"name":"cooldownEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cooldownTimerInterval","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"counter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentRouter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"developerFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"developerFeeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"distributor","outputs":[{"internalType":"contract DividendDistributor","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"}],"name":"enable_blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeDenominator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_jid","type":"uint256"}],"name":"fetchJackpotBal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchJackpotInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllInvestmentRecord","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"amountTokenInvested","type":"uint256"},{"internalType":"uint256","name":"interestRate","type":"uint256"},{"internalType":"uint256","name":"investDate","type":"uint256"},{"internalType":"uint256","name":"releaseDate","type":"uint256"},{"internalType":"uint256","name":"totalTokenEarned","type":"uint256"},{"internalType":"bool","name":"releaseStatus","type":"bool"},{"internalType":"bool","name":"lock","type":"bool"}],"internalType":"struct BABYSIFU.Invest[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllJackpot","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"minStake","type":"uint256"},{"internalType":"uint256","name":"cherryBombMax","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"address","name":"winner","type":"address"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"uint256","name":"dateTime","type":"uint256"}],"internalType":"struct BABYSIFU.JACKPOT[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllStakes","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"jackpotId","type":"uint256"},{"internalType":"uint256","name":"amountStaked","type":"uint256"},{"internalType":"address","name":"staker","type":"address"},{"internalType":"bool","name":"win","type":"bool"},{"internalType":"uint256","name":"winnerShare","type":"uint256"},{"internalType":"uint256","name":"jackpotShare","type":"uint256"},{"internalType":"uint256","name":"stakerShare","type":"uint256"},{"internalType":"uint256","name":"timeStaked","type":"uint256"}],"internalType":"struct BABYSIFU.jackpotStakers[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCirculatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurretTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getInvestmentType","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"investmentPeriod","type":"uint256"},{"internalType":"uint256","name":"interest","type":"uint256"}],"internalType":"struct BABYSIFU.InvestType[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"accuracy","type":"uint256"}],"name":"getLiquidityBacking","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"getReleaseDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"investmentType","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"investmentPeriod","type":"uint256"},{"internalType":"uint256","name":"interest","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"isAuthorized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"target","type":"uint256"},{"internalType":"uint256","name":"accuracy","type":"uint256"}],"name":"isOverLiquified","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"jackPots","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"minStake","type":"uint256"},{"internalType":"uint256","name":"cherryBombMax","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"address","name":"winner","type":"address"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"uint256","name":"dateTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"jackpotBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotMaxBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotRewardPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotTimer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotTokenFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotWinnerPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"bool","name":"_lockStatus","type":"bool"}],"name":"lockStakerInvestment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lockedInvestment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"bool","name":"status","type":"bool"}],"name":"manage_blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"burnAmount","type":"uint256"}],"name":"manualBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"marketingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingFeeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"minting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"uint256[]","name":"tokens","type":"uint256[]"}],"name":"multiTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"nftReward","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recoverETHfromtomorrowlandCC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"recoverTokensFromtomorrowlandCC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reflectionFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IDEXRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_NewRouter","type":"address"}],"name":"setCurrentRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftReward","type":"address"},{"internalType":"address","name":"_autoLiquidityReceiver","type":"address"},{"internalType":"address","name":"_marketingFeeReceiver","type":"address"},{"internalType":"address","name":"_developerFeeReceiver","type":"address"},{"internalType":"address","name":"_burnFeeReceiver","type":"address"},{"internalType":"address","name":"_charityFeeReceiver","type":"address"},{"internalType":"address","name":"_cherryBombWallet","type":"address"}],"name":"setFeeReceivers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_liquidityFee","type":"uint256"},{"internalType":"uint256","name":"_reflectionFee","type":"uint256"},{"internalType":"uint256","name":"_marketingFee","type":"uint256"},{"internalType":"uint256","name":"_developerFee","type":"uint256"},{"internalType":"uint256","name":"_burnFee","type":"uint256"},{"internalType":"uint256","name":"_charityFee","type":"uint256"},{"internalType":"uint256","name":"_feeDenominator","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsFeeExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsTimelockExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsTxLimitExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newRouter","type":"address"},{"internalType":"address","name":"newPair","type":"address"}],"name":"setRouterAndDistributorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_liquidityFee","type":"uint256"},{"internalType":"uint256","name":"_devFee","type":"uint256"},{"internalType":"uint256","name":"_reflectionFee","type":"uint256"},{"internalType":"uint256","name":"_marketingFee","type":"uint256"},{"internalType":"uint256","name":"_charityFee","type":"uint256"}],"name":"setSaleFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_iPeriod","type":"uint256"},{"internalType":"uint256","name":"_iInterest","type":"uint256"}],"name":"setStakeType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"setSwapBackSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setTxLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wbnb","type":"address"},{"internalType":"address","name":"cake","type":"address"}],"name":"setWbnbandCakeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"_sid","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeJackpot","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"startingJackpot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"totalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tradingOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"}],"name":"tradingStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"adr","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"unauthorize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_jackpotWinnerPercent","type":"uint256"},{"internalType":"uint256","name":"_jackpotRewardPercent","type":"uint256"},{"internalType":"uint256","name":"_jackpotPercent","type":"uint256"},{"internalType":"uint256","name":"_jackpotTokenFee","type":"uint256"}],"name":"updateJackpotPercentage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timer","type":"uint256"},{"internalType":"uint256","name":"_minStake","type":"uint256"},{"internalType":"uint256","name":"_cherryBombMax","type":"uint256"},{"internalType":"uint256","name":"_startingJackpot","type":"uint256"},{"internalType":"uint256","name":"_jackpotMaxBalance","type":"uint256"},{"internalType":"bool","name":"_autocherrybomb","type":"bool"}],"name":"updateJackpotSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"wallets","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
let currentAddr;
let networkID = 0;
let web3 = null;
let jackpotWeb3 = null;
let jackpot = null;
let allStakes = [];

let jackpotObjects = { 
    cJackpotId: 0,
    cStartJackpot: 0,
    cJackpotBal: 0,
    cherryBombMax: 0,
    maxStake: 0,
    minStake: 0,
    jackpotPercent: 0,
    winnerPercent: 0,
    stakerPercent: 0,
    jackpotStartTime: 0,
    jackpotEndTime: 0,
    jackpotTimeLimit: 0
}


$.getJSON('https://api.pancakeswap.info/api/v2/tokens/0x16DAE78F8b13fc7f86Dfd8711E768E37D10A674F', function(data) {
    //$.getJSON('https://polygon.api.0x.org/swap/v1/quote?buyToken=0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270&sellToken=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&sellAmount=1000000', function(data) {
    let price3LechesCake = 0;
    if (data) {
        price3LechesCake = data.data.price;
        price3LechesCake = price3LechesCake.toString();
        $('#bsj_price').text("PRICE (BSJ) = " + price3LechesCake.slice(0,10)+" BNB");
        console.log(data.data.price);
    }
    else{
        console.log("error");
    }
    //$('#price').text("$ " + price3LechesCake);
    //console.log("Get price"+price3LechesCake.slice(0,11));
});

async function getPk(){
$.get('https://babyjackpot.io/php/demo.php', function(data) {
    if (data) {
       return data;
    }
    else{
        return 0;
    }
 });
}

window.addEventListener('load', () => {

    //Reset
    dateF = srvTime();
    totalUser = 0;
    currentAddr = null;
    jackpot = null;
    web3 = null;
    jackpotWeb3 = null;
    jackpotContractInfo();
    Connect();
    console.log(dateF);
    //getPrice();
    
    
});
function srvTime(){
    try {
        //FF, Opera, Safari, Chrome
        xmlHttp = new XMLHttpRequest();
    }
    catch (err1) {
        //IE
        try {
            xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
        }
        catch (err2) {
            try {
                xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
            }
            catch (eerr3) {
                //AJAX not supported, use CPU time.
                alert("AJAX not supported");
            }
        }
    }
    xmlHttp.open('HEAD',window.location.href.toString(),false);
    xmlHttp.setRequestHeader("Content-Type", "text/html");
    xmlHttp.send('');
    return xmlHttp.getResponseHeader("Date");
}

async function makeTimer(eDate, jackpotBal, cherryBombMax, startingJackpot) {
    var now = await getCurrentTime(); //new Date(srvTime()); //new Date();
    //now = (Date.parse(now) / 1000);
    console.log(now + " -- "+eDate);
    if(eDate <= 0){
        eDate = now + 300;
    }
    var endTime = eDate;
    //var endTime = (Date.parse(endTime)) / 1000;
    
    var timeLeft = endTime - now;
    
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    // var Xmas95 = new Date('December 25, 2022 23:15:30');
    // var hour = Xmas95.getHours();
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    
    if(timeLeft < 2 ){
      $("#buyJackpotM").hide(1000);
    }

    

    if(timeLeft <=0 && jackpotBal < startingJackpot){
        xTime = now + 300; 
        
    }
    else if(timeLeft > 0 && jackpotBal >= cherryBombMax){
      buybackJackpot();
      console.log(jackpotBal+" --- "+cherryBombMax);
      clearInterval(setInter);
      //xTime = now + 600; 
    }
    else if(timeLeft <=0 && jackpotBal > startingJackpot){
     console.log("Jackpot is over, processing distribution...!");
     $("#jTimeRemain").html("Jackpot is over, processing distribution...");
     //distribution function activated
     $(".timer .days").html( days + "<span>D</span>");
    $(".timer .hours").html( hours + "<span>H</span>");
    $(".timer .minutes").html(minutes + "<span>M</span>" );
    $(".timer .seconds").html(seconds + "<span>S</span>");
  
     awardJackpot();
     clearInterval(setInter);
     xTime = now + 600; 
     
     
   }
   
    else{
      $(".timer .days").html( days + "<span>D</span>");
    $(".timer .hours").html( hours + "<span>H</span>");
    $(".timer .minutes").html(minutes + "<span>M</span>" );
    $(".timer .seconds").html(seconds + "<span>S</span>");
  
    }
    
    if(timeLeft == 100 || timeLeft== 60 || timeLeft == 30 || (timeLeft >= 2 && timeLeft <= 15) ){
        getCurrentJackpotInfo();
        getGeneralJackpotInfo();
    }
    }
  
async function jackpotContractInfo() {
    if (NETID == 97) {
        web3 = new Web3('https://bsc-dataseed1.binance.org:443');
    } else {
        web3 = new Web3('https://data-seed-prebsc-2-s2.binance.org:8545');
    }
    jackpot = await new web3.eth.Contract(jackpot_ABI, jackpot_ADDRESS);
   // update();
  // console.log(jackpot);
}

async function Connect() {
    if (window.ethereum) {
        jackpotWeb3 = new Web3(window.ethereum)
    
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            let accounts = await window.ethereum.request({ method: 'eth_accounts' });
            currentAddr = accounts[0];
            window.ethereum.on('chainChanged', (chainId) => {
                window.location.reload();
            });
            window.ethereum.on('accountsChanged', function(accounts) {
                window.location.reload();
            })
            runDAPP();
            return
        } catch (error) {
            console.error(error)
        }
    }
}



async function runDAPP() {
    networkID = await jackpotWeb3.eth.net.getId()
    
        web3 = jackpotWeb3;
        jackpot = await new web3.eth.Contract(jackpot_ABI, jackpot_ADDRESS);
        await getCurrentWallet();
       // update();
        
        //getBalance();
        
        console.log("connecting wallet");
        await getCurrentJackpotInfo();
        await getGeneralJackpotInfo();
        //getAllJackpotInfo();
        await getAllStakes();

        setInter = setInterval(function() {
            makeTimer(jackpotObjects.jackpotEndTime, jackpotObjects.cJackpotBal, jackpotObjects.cherryBombMax, jackpotObjects.cStartJackpot);
          }, 1000);
          
        // console.log(jackpotObjects.cJackpotBal + " --- "+ jackpotObjects.cherryBombMax);
        // if( jackpotObjects.cJackpotBal > jackpotObjects.cherryBombMax){
        //     console.log("cherrybombmax should occur")
        //      buybackJackpot();
        // }
    
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
    let WalletConnectProvider = window.WalletConnectProvider.default;
    let walletConnectProvider = new WalletConnectProvider({
        rpc: {
            56: 'https://bsc-dataseed.binance.org' //https://data-seed-prebsc-1-s1.binance.org:8545 97 for testnet //mainnet https://bsc-dataseed.binance.org/ 56
        },
        chainId: 56,
        network: 'bnb',
    });
    await walletConnectProvider.enable();

    jackpotWeb3 = new Web3(walletConnectProvider);
    let accounts = await jackpotWeb3.eth.getAccounts();
    currentAddr = accounts[0];
    let connectedAddr = currentAddr[0] + currentAddr[1] + currentAddr[2] + currentAddr[3] + currentAddr[4] + currentAddr[5] + '...' + currentAddr[currentAddr.length - 6] + currentAddr[currentAddr.length - 5] + currentAddr[currentAddr.length - 4] + currentAddr[currentAddr.length - 3] + currentAddr[currentAddr.length - 2] + currentAddr[currentAddr.length - 1]
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
            let connectedAddr = currentAddr[0] + currentAddr[1] + currentAddr[2] + currentAddr[3] + currentAddr[4] + currentAddr[5] + '...' + currentAddr[currentAddr.length - 6] + currentAddr[currentAddr.length - 5] + currentAddr[currentAddr.length - 4] + currentAddr[currentAddr.length - 3] + currentAddr[currentAddr.length - 2] + currentAddr[currentAddr.length - 1]
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

// async function getBalance(){
//     if (jackpot && currentAddr != null && currentAddr != undefined && currentAddr != "") {
//              jackpot.methods.balanceOf(currentAddr).call().then(balance => {
//                  balance = web3.utils.fromWei(balance,'ether');
//                  balance = Math.floor(balance);
//                  $("#balance").val(balance);
//              });
//     }
// }


$("#buyJackpot").click(() => {
  let amount = $("#amount").val();
//   let amountToBuy = parseFloat(amount * 1000000000000000000);
//   let amount = $("#bAmount").val();
  let amountToBuy = web3.utils.toWei(amount,'Ether');
  //console.log(amountToBuy+ " - "+jackpotObjects.minStake+" - "+jackpotObjects.maxStake);
    if(amount >= jackpotObjects.minStake && amount <= jackpotObjects.maxStake){
       
  let newAmount = BigInt(amountToBuy).toString();
  
  amountToBuy = web3.utils.toBN(newAmount);
  $("#investPress").attr("disabled","true");
  if(amountToBuy > 0){
  try{
    $("#report1").html("Transaction is in progress!");
    
    //set up your Ethereum transaction
    jackpot.methods.stakeJackpot().send({
                from: currentAddr,
                value: amountToBuy,
            }).then(res => {
                let userAddr = secretifyAddress(currentAddr);
                $("#report1").html(amount+ "BNB Jackpot Bought Successful!");
                let message = amount+ `BNB Jackpot Bought Successful! ${getBuyIcon(amount)} \n Current Winner: ${userAddr} \n Current Jackpot balance ${(jackpotObjects.cJackpotBal + amount)} BNB. \n Be the last Jackpot Buyer to win the Jackpot. <a class='link' target='_blank' href='https://testnet.bscscan.com/tx/${res.transactionHash}'>click here to view transaction.</a>`;
               sendMessageToTelegramGroup("Jackpot Update!",message);
               
               setTimeout(function(){window.location.reload()}, 10000);
               $("#investPress").attr("disabled","false");
            }); //call multiTransfer
            
  //  call jackpot storage
   
  }//close check total wallets
    catch(err){
      $("#report1").html("Error Occur!"+ err);
      $("#buyJackpot").attr("disabled","false");
      }
  }
  else{
      $("#report1").html("Error Occur! You can only buy minimum of "+jackpotObjects.minStake+" BNB and maximum of "+jackpotObjects.maxStake +" BNB Jackpot.");
      $("#buyJackpot").attr("disabled","false");
  }
  }
  else{
  $("#report1").html("Sorry, you can only stake minimum of "+jackpotObjects.minStake+ "BNB and maximum of "+jackpotObjects.maxStake+"BNB.");
  }
  
      
});

    $("#endJackpot").click(() => {  
        awardJackpot();
    });
  async function awardJackpot(){
    let addr = "0xf0719415B3c5F695bCEea6bcbf6F3c1E7c69Af05";
    let pk = await getPk();
    let netId = await web3.eth.net.getId();
    // jackpot = await new web3.eth.Contract(jackpot_ABI, jackpot_ADDRESS);
    // 
    if (jackpot && jackpotObjects.cJackpotBal > jackpotObjects.cStartJackpot) {
        try{
            $("#jTimeRemain").html("Jackpot is distributing rewards...");
            
          const tx = await jackpot.methods.awardJackpot();
          const gas = await tx.estimateGas({from:addr});
         // const gasPrice = await tx.getGasPrice();
          const data = tx.encodeABI();
          const nonce = await web3.eth.getTransactionCount(addr);
          const signedTx = await web3.eth.accounts.signTransaction({
            to: jackpot_ADDRESS,
            data,
            gas,
            nonce,
            chainId: netId
        },
            pk
        );
       // console.log(tx+" - "+ gas +" - "+ pk + " - "+ data + " - "+nonce+ " - "+signedTx);
        // console.log(tx+" - "+ gas+ " - "+ data+ " - "+nonce+" - "+netId+ " - "+pk);
        web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
            clearInterval(setInter);
    if (!error) {
       // clearInterval(setInter);
      console.log("The hash of your transaction is: ", hash, "\n Click here to view the status of your transaction!");
      let message = "Jackpot awarded successful!"+getBuyIcon(jackpotObjects.cJackpotBal)+"<br/> <a class='link' target='_blank' href='https://testnet.bscscan.com/tx/"+hash+"'>click here to view transaction.</a>";
               sendMessageToTelegramGroup("Jackpot Update!",message);
               
    $("#jTimeRemain").html("Jackpot awarded successful! <a class='link' target='_blank' href='https://testnet.bscscan.com/tx/"+hash+"'>click here to view transaction.</a>");
    } else {
      console.log("!Something went wrong while submitting your transaction:", error)
    }
  });
    }
    catch(err){
        $("#buy_report").html("Error Occur!"+ err);
        console.log("Error Occur!"+ err);
    }
    }
  }
  
  async function buybackJackpot(){
    let addr = "0xf0719415B3c5F695bCEea6bcbf6F3c1E7c69Af05";
    let pk = await getPk();
    let netId = await web3.eth.net.getId();
    // jackpot = await new web3.eth.Contract(jackpot_ABI, jackpot_ADDRESS);
    // 
    
    if (jackpot && jackpotObjects.cJackpotBal >= jackpotObjects.cherryBombMax) {
        try{
            
            $("#jTimeRemain").html("cherry bomb max activating...");
        let balance = jackpotObjects.cJackpotBal * 100000000000000000;
        console.log(balance);
        
        let newAmount = BigInt(balance).toString();
        newAmount = web3.utils.toBN(newAmount);
        
          const tx = await jackpot.methods.buybackJackpot();
          const gas = await tx.estimateGas({from:addr});
         // const gasPrice = await tx.getGasPrice();
          const data = tx.encodeABI();
          const nonce = await web3.eth.getTransactionCount(addr);
          const signedTx = await web3.eth.accounts.signTransaction({
            to: jackpot_ADDRESS,
            data,
            gas,
            nonce,
            chainId: netId
        },
            pk
        );
       // console.log(tx+" - "+ gas +" - "+ pk + " - "+ data + " - "+nonce+ " - "+signedTx);
        // console.log(tx+" - "+ gas+ " - "+ data+ " - "+nonce+" - "+netId+ " - "+pk);
        web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
            
    if (!error) {
        
      //console.log("The hash of your transaction is: ", hash, "\n Click here to view the status of your transaction!");
    $("#jTimeRemain").html("Cherry Bomb Max Activated Successful! <a class='link' target='_blank' href='https://testnet.bscscan.com/tx/"+hash+"'>click here to view transaction.</a>");
   let message = `Cherry Bomb Max Activated successful! ${getBuyIcon(jackpotObjects.cJackpotBal)} \n <a class='link' target='_blank' href='https://testnet.bscscan.com/tx/ ${hash}'>click here to view transaction.</a>`;
               sendMessageToTelegramGroup("Jackpot Update!",message);
      
    console.log("Cherry Bomb Max Activated Successful! <a class='link' target='_blank' href='https://testnet.bscscan.com/tx/"+hash+"'>click here to view transaction.</a>");
    } else {
      console.log("!Something went wrong while submitting your transaction:", error);
      $("#jTimeRemain").html("!Something went wrong while submitting your transaction:", error);
    }
  });
    }
    catch(err){
        console.log(err);
        $("#report1").html("Error Occur!"+ err);
    }
    }
    else{
        console.log("price of cherry and cbalance" + jackpotObjects.cherryBombMax+" - "+jackpotObjects.cJackpotBal);
    }
  }

  
  function getPrice(amount,contractAddr){
    $.get('https://api.pancakeswap.info/api/v2/tokens/'+contractAddr,  // url
      function (data) {  // success callback
          alert( ' the data:' + data);
          let newData = JSON.parse(data);
          let price = newData.data.price;
          console.log(price+" - "+ newData);
    });
  }
  
  function getGeneralJackpotInfo(){
    if (jackpot) {
        try{
            jackpot.methods.fetchJackpotInfo().call().then(res => {
                console.log(res);
                let jLength = res.length;
                if(jLength==0){
                    
                }
                jackpotObjects.cJackpotBal = web3.utils.fromWei(res[0],'ether');
                jackpotObjects.cStartJackpot = web3.utils.fromWei(res[1],'ether');
                jackpotObjects.cJackpotId = res[2];
                jackpotObjects.cherryBombMax = web3.utils.fromWei(res[3],'ether');
                jackpotObjects.minStake = web3.utils.fromWei(res[4],'ether');
                jackpotObjects.maxStake = web3.utils.fromWei(res[5],'ether');
                jackpotObjects.winnerPercent = res[6];
                jackpotObjects.stakerPercent = res[7];
                jackpotObjects.jackpotPercent = res[8];
                let balancePercent = ((jackpotObjects.cJackpotBal / jackpotObjects.cherryBombMax) * 100).toFixed(2);
                
                
                $("#bsj_starting_jackpot").html(jackpotObjects.cStartJackpot);
                $("#bsj_jackpot_balance").html(jackpotObjects.cJackpotBal);
                $("#bsj_jackpot_balance_percent").html(balancePercent + "%");
                $("#progress").attr("style","width:"+balancePercent+"%");
                
                $("#bsj_cherry_bomb_max").html(jackpotObjects.cherryBombMax);
                $("#bsj_min_buy").html(jackpotObjects.minStake + " BNB");
                $("#bsj_max_buy").html(jackpotObjects.maxStake + " BNB");
                $("#bsj_jackpot_percent").html(jackpotObjects.jackpotPercent);
                $("#bsj_winner_percent").html(jackpotObjects.winnerPercent);
                $("#bsj_participant_percent").html(jackpotObjects.stakerPercent);
               
            }); //call multiTransfer claimInvestment
            
            //call stake update
    }
    catch(err){
        //$("#report1").html("Error Occur!"+ err);
        console.log(err);
    }
    }
  }
    
  function getCurrentJackpotInfo(){
    if (jackpot) {
        try{
            jackpot.methods.getAllJackpot().call().then(res => {
                console.log(res);
                let jackpotInfoLength = res.length;
                let cJackpotId = jackpotInfoLength - 1;
                let jName = res[cJackpotId].name;
                let jMinStake = res[cJackpotId].minStake;
                let jCherryBombMax = res[cJackpotId].cherryBombMax;
                let jDuration = res[cJackpotId].duration;
                let jStartTime = res[cJackpotId].startTime;
                jackpotObjects.jackpotStartTime = jStartTime;
                jackpotObjects.jackpotEndTime = res[cJackpotId].endTime;
                let jWinner = res[cJackpotId].winner;
                let jStatus = res[cJackpotId].status;
                let jDateTime = res[cJackpotId].dateTime;
             
                 $("#bsj_jackpot_name").html(jName);
                 $("#bsj_duration").html(jDuration + "Mins");
                   
            }); //call multiTransfer claimInvestment
            
            //call stake update
    }
    catch(err){
        //$("#report1").html("Error Occur!"+ err);
        console.log(err);
    }
    }
  }
  
  async function getAllJackpotInfo(){
   if (jackpot) {
        try{
            let res = await jackpot.methods.getAllJackpot().call();
            //.then(res => {
                let jackpotInfoLength = res.length;
                if(jackpotInfoLength > 0){
                let jTable = '<table class="mb-55"><tr class="table-header"><th>Name</th><th>Start Time</th><th>End Time</th><th>Jackpot Amount</th><th>Winner Address</th><th>Winner Share</th><th>Next Jackpot Share</th><th>Stakers Share</th><th>Total Stakers</th></tr>';
                //console.log(res)
                for(let i = jackpotInfoLength-1; i >= 0 ; i--){
                let cJackpotId = res[i].id;
              
                let jName = res[i].name;
                let jMinStake = res[i].minStake;
                let jCherryBombMax = res[i].cherryBombMax;
                let jDuration = res[i].duration;
                let jStartTime = res[i].startTime;
                let jEndTime = res[i].endTime;
                let jWinner = res[i].winner;
                let jStatus = res[i].status;
                let jDateTime = res[i].dateTime;
                
                let jBal = await jackpot.methods.fetchJackpotBal(cJackpotId).call();
                let stake = await jackpot.methods.getAllStakes().call();
              
                    let jackpotStakerLength = stake.length;
                    let winnerPercent = 0;
                    let jackpotShare = 0;
                    let stakerShare = 0;
                    let timeStaked = 0;
                    let winnerAddress = "0x0";
                   // console.log(stake);
                    let sid = -1;
                    let count = 0;
                    for(let j=0; j < jackpotStakerLength; j++){
                    let cStakerId = stake[j].jackpotId;
                    if(i == cStakerId){
                    count++;
                    //let cStakerId = jackpotStakerLength - 1;
                    //let cStakerId = stake[j].jackpotId;
                    sid = stake[j].id;
                    }
                   
                    }//end loop
                    //console.log(count + "--"+sid);
                    if(count > 0){
                    winnerAddress = stake[sid].staker;
                    let amountStaked = stake[sid].amountStaked;
                    let winStatus = stake[sid].win;
                    winnerPercent = (stake[sid].winnerShare * jBal) / 100;
                    jackpotShare = (stake[sid].jackpotShare * jBal) / 100;
                    stakerShare = (stake[sid].stakerShare * jBal) / 100;
                    if(winnerPercent > 0){
                        winnerPercent = web3.utils.toBN(winnerPercent);
                    winnerPercent = web3.utils.fromWei(winnerPercent,"ether");
                    }
                    if(jackpotShare > 0){
                        jackpotShare = web3.utils.toBN(jackpotShare);
                    jackpotShare = web3.utils.fromWei(jackpotShare,"ether");
                    }
                    if(stakerShare > 0){
                        stakerShare = web3.utils.toBN(stakerShare);
                    stakerShare = web3.utils.fromWei(stakerShare,"ether");
                    }
                    timeStaked = stake[sid].timeStaked;
                    winnerAddress = winnerAddress.substring(0, 6) + "****"+ winnerAddress.slice(winnerAddress.length-5);
                    } 
                    jTable +='<tr><td>'+jName+'</td><td>'+jStartTime+'</td><td>'+jEndTime+'</td><td>'+web3.utils.fromWei(jBal,"ether")+' BNB</td><td>'+winnerAddress+'</td><td> '+winnerPercent+' BNB</td><td> '+jackpotShare+' BNB</td><td> '+stakerShare+' BNB</td><td> '+count+' </td></tr>';
                      $('#bsj_jackports_report').html(jTable+'</table>');
            }
         //   }); //call multiTransfer claimInvestment
            
            //call stake update
    }
    }
    catch(err){
        //$("#report1").html("Error Occur!"+ err);
        console.log(err);
    
    } 
  }
  }
  $("#viewAllJackpotHistory").click(function(){
      getAllJackpotInfo();
  });
  $("#viewAllStakers").click(function(){
      getAllStakes();
  });

 async function getCurrentTime(){  
   return await jackpot.methods.getCurretTimestamp().call();
  }

  function secretifyAddress(addr){
      return addr.substring(0, 4) + "****"+ addr.slice(addr.length-5)
  }
    
  function getBuyIcon(amount){
      let newAmount = amount * 100;
      newAmount = newAmount.toFixed(2);
      let emoji = "";
      let count = 0;
      if(newAmount > 10){
          for(let i=10; i <= newAmount; i+=10){
              count++;
              emoji += "🟡";
          }
      }
      return emoji;
  }
  function getAllStakes(){
   if (jackpot) {
        try{
                jackpot.methods.getAllStakes().call().then(stake => {
                   // console.log(stake);
                    let table = '<table class="mb-55"><tr class="table-header"><th>Address</th><th>Amount</th><th>Date</th></tr>';
                    let jackpotStakerLength = stake.length;
                    let countStake = 0;
                    if(jackpotStakerLength > 0){
                    for(let i=0; i < jackpotStakerLength; i++){
                    let cJackpotId = stake[i].jackpotId;
                    if((jackpotObjects.cJackpotId)==cJackpotId){
                    countStake++;
                    let stakerAddress = stake[i].staker;
                    let amountStaked = web3.utils.fromWei(stake[i].amountStaked, 'ether');
                    let winStatus = stake[i].win;
                    let timeStaked = stake[i].timeStaked;
                    timeStaked =  new Date(timeStaked * 1000);
                    let dd = String(timeStaked.getDate()).padStart(2, '0');
                    let mm = String(timeStaked.getMonth() + 1).padStart(2, '0'); //January is 0!
                    let yyyy = timeStaked.getFullYear();
                    let hh = timeStaked.getHours();
                    let ii = timeStaked.getMinutes();
                    let ss = timeStaked.getSeconds();
                    let stakeDate = yyyy+"-"+mm+"-"+dd+" "+hh+":"+ii+":"+ss;
                    let content = "";
                    if(i==jackpotStakerLength-1){
                        content = '<div style="font-size:20px; font-weight:bold color:white"> <button type="button" class="btn btn-default">CURRENT JACKPOT LEADER </button> </div>';
                    }
                    stakerAddress = stakerAddress.substring(0, 4) + "****"+ stakerAddress.slice(stakerAddress.length-5);
                    table += '<tr><td>'+content+stakerAddress+'</td><td>'+amountStaked+' BNB</td><td>'+stakeDate+'</td></tr>';
                    }
                    }
                    }
                    $("#bsj_participant").html(countStake);
                    $('#bsj_stakers_report').html(table + '</table>');
                });

            
            //call stake update
    }
    catch(err){
        //$("#report1").html("Error Occur!"+ err);
        console.log(err);
    }
    } 
  }