let NETID = 56; // 97-testnet; 56-mainnet
let staking_ADDRESS = "0x1eed6b3fda25cf7a9771b4c24c76d84b35ea2849"; //"0x9E94c21A7702690aAc84016C0eF5871b70dDEC47";//0x4Ecd27121B14bC0571AF460E6Ea3Cf75EF485476"; //"0x484838048502B68d11009Ac8d3C7b561Ff42841f";
let abi_staking = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"airdroppees","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"AirDropsSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"}],"name":"LogTokenApproval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"}],"name":"LogTokenBulkSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAirdropAmount","type":"uint256"}],"name":"SomeoneWasFeelingGenerous","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalEarned","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ctime","type":"uint256"}],"name":"claimInvestment","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountCompounded","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ctime","type":"uint256"}],"name":"compoundInvestment","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"investorAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"currentROI","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"investmentDate","type":"uint256"}],"name":"investmentReport","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"AR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"addresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"airDropsSent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"airdroppees","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"vault_id","type":"uint256[]"}],"name":"airdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"airdropsReceived","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allInvestment","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"investors","type":"address"},{"internalType":"uint256","name":"initialDeposit","type":"uint256"},{"internalType":"uint256","name":"amountTokenInvested","type":"uint256"},{"internalType":"uint256","name":"currentROI","type":"uint256"},{"internalType":"uint256","name":"vestedDate","type":"uint256"},{"internalType":"uint256","name":"lastTimeCompound","type":"uint256"},{"internalType":"uint256","name":"pendingEarn","type":"uint256"},{"internalType":"uint256","name":"totalTokenEarned","type":"uint256"},{"internalType":"bool","name":"releaseStatus","type":"bool"},{"internalType":"bool","name":"expires","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"_currentROI","type":"uint256"}],"name":"calculateProfit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"compound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dasAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deadWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"referer","type":"address"}],"name":"depositVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"downline","outputs":[{"internalType":"uint256","name":"stakeId","type":"uint256"},{"internalType":"address","name":"uplineAddress","type":"address"},{"internalType":"address","name":"downlineAddress","type":"address"},{"internalType":"uint256","name":"position","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"downlineReferrals","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"expiredInvestment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"bool","name":"_expiresStatus","type":"bool"}],"name":"expiresStakerInvestment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"contract IBEP20","name":"_token","type":"address"},{"internalType":"address","name":"_to","type":"address"}],"name":"forkToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllInvestmentRecord","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"investors","type":"address"},{"internalType":"uint256","name":"initialDeposit","type":"uint256"},{"internalType":"uint256","name":"amountTokenInvested","type":"uint256"},{"internalType":"uint256","name":"currentROI","type":"uint256"},{"internalType":"uint256","name":"vestedDate","type":"uint256"},{"internalType":"uint256","name":"lastTimeCompound","type":"uint256"},{"internalType":"uint256","name":"pendingEarn","type":"uint256"},{"internalType":"uint256","name":"totalTokenEarned","type":"uint256"},{"internalType":"bool","name":"releaseStatus","type":"bool"},{"internalType":"bool","name":"expires","type":"bool"}],"internalType":"struct StakingContract.Invest[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getInvestment","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"investmentPeriod","type":"uint256"},{"internalType":"uint256","name":"interest","type":"uint256"}],"internalType":"struct StakingContract.InvestType[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getPendingEarn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getProfit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVaultUpline","outputs":[{"components":[{"internalType":"uint256","name":"stakeId","type":"uint256"},{"internalType":"address","name":"uplineAddress","type":"address"},{"internalType":"address","name":"downlineAddress","type":"address"},{"internalType":"uint256","name":"position","type":"uint256"}],"internalType":"struct StakingContract.Downlines[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"investmentType","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"investmentPeriod","type":"uint256"},{"internalType":"uint256","name":"interest","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"isCompoundCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recoverETHfromContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"recoverTokensFromContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"referralCurrentPosition","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"roundRobinPosition","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_downline","type":"address"},{"internalType":"uint256","name":"pos","type":"uint256"},{"internalType":"uint256","name":"_share","type":"uint256"}],"name":"roundRobinSystem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_iPeriod","type":"uint256"},{"internalType":"uint256","name":"_iInterest","type":"uint256"}],"name":"setStakeType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sigmaAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"todayRewardClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"tokenSent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalCompound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalDeposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totALFAe","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referrALFAe","type":"uint256"},{"internalType":"uint256","name":"_dasFee","type":"uint256"},{"internalType":"uint256","name":"_sigmaFee","type":"uint256"}],"name":"updateFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_dasAddress","type":"address"},{"internalType":"address","name":"_sigmaAddress","type":"address"}],"name":"updateFeeAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"updateTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"upline","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"vaultNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"wallets","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

let token_ADDRESS = "0xd732e51f521324d890339dff4e87622cbbb5ca5e"; //"0xE918B9DD95046B9ce8704E4f27a922310fB8b7d7";
let ABI_token = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"ALPHASwapAddress","type":"address"}],"name":"ALPHASwapAddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[],"name":"BnbRescued","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"limitedAddress","type":"address"}],"name":"NewLimitedAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"limitlessAddress","type":"address"}],"name":"NewLimitlessAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"active","type":"bool"}],"name":"SwapStatusSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"howMuchWasMissing","type":"uint256"}],"name":"SwapToppedUp","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"wallet","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"TaxStatusOfWalletSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"liq","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"vault","type":"uint256"}],"name":"TaxesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenRescued","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountRescued","type":"uint256"}],"name":"TokensSentToTreasury","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"treasury","type":"address"}],"name":"TreasuryAddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"vaultAddress","type":"address"}],"name":"VaultAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"vault","type":"address"}],"name":"VaultAddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"vaultAddress","type":"address"}],"name":"VaultRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"vaultAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"howMuchWasMissing","type":"uint256"}],"name":"VaultToppedUp","type":"event"},{"inputs":[],"name":"CEO","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROUTER","outputs":[{"internalType":"contract IDEXRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"vaultAddress","type":"address"}],"name":"addVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"approveAllALPHA","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"approveMax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isVault","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"limitless","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liqTax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addressThatShouldBeLimited","type":"address"}],"name":"makeAddressLimited","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addressThatShouldBeLimitless","type":"address"}],"name":"makeAddressLimitless","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"vaultAddress","type":"address"}],"name":"removeVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rescueBnb","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenToRescue","type":"address"}],"name":"sendTokenToTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ALPHASwapAddress","type":"address"}],"name":"setSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newLiqTax","type":"uint256"},{"internalType":"uint256","name":"newVaultTax","type":"uint256"}],"name":"setTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setTaxStatusOfWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"treasuryAddress","type":"address"}],"name":"setTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"vaultAddress","type":"address"}],"name":"setVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swap","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"taxFreeWallet","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"active","type":"bool"}],"name":"toggleSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vaultTax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
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


$.getJSON('https://api.pancakeswap.info/api/v2/tokens/0xbfacd29427ff376ff3bc22dffb29866277ca5fb4', function(data) {
    //$.getJSON('https://polygon.api.0x.org/swap/v1/quote?buyToken=0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270&sellToken=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&sellAmount=1000000', function(data) {
    var tokenPrice = 0;
    if (data) {
        tokenPrice = data.data.price;
        tokenPrice = tokenPrice.toString();
        $('#price').text("PRICE (ALFA) = " + tokenPrice.slice(0,10)+" USDC");
        console.log(data.data.price);
    }
    else{
        console.log("error");
    }
    //$('#price').text("$ " + tokenPrice);
    //console.log("Get price"+tokenPrice.slice(0,11));
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
            var currentROIedAmount = 0;
            for(var i = 0; i < stakeLength; i++){
                var stakerAddress = resu[i].owner;
                  if(stakerAddress.toLowerCase()==address){
                var stake_id = resu[i].id;
                var releaseStatus = resu[i].releaseStatus;
              
                var amountTokenInvested = resu[i].amountTokenInvested;
                var initialDeposit = resu[i].initialDeposit;
                var investDate = resu[i].investDate;
                var releaseDate = resu[i].releaseDate;
                var totalTokenEarned = resu[i].totalTokenEarned;
                var iscurrentROI = resu[i].currentROI;
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
    multisender = await new web3.eth.Contract(ABI_token, token_ADDRESS);
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
        token = await new web3.eth.Contract(ABI_token, token_ADDRESS);
        staking = await new web3.eth.Contract(abi_staking, staking_ADDRESS);
        getCurrentWallet();
        update();
       // fetchStakes();
        getBalance();
       // getInvestmentType();
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
           // $("#activeAddress").text(connectedAddr)
            $("#btn-connect").prop("disabled", true);
        }
        
    }
}


function update() {
    console.log("Updating");
    updateParameters();
}

async function getBalance(){
    if (token && currentAddr != null && currentAddr != undefined && currentAddr != "") {
             token.methods.balanceOf(currentAddr).call().then(balance => {
                 balance = web3.utils.fromWei(balance,'ether');
                 balance = Math.floor(balance);
                 $("#balance").val(balance);
                 $("#showBalance").text(balance);
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
            let resu = await staking.methods.getAllInvestmentRecord().call();
           
            var table = '<div style="padding:20px"><table style="width:100%; border:1px"><thead><tr><th scope="col">Amount Deposited</th><th scope="col">Token Earned (%)</th><th scope="col"> Deposit Date</th><th scope="col">Pending  ROI</th><th scope="col">Action</th></tr></thead><tbody>';
            var count = 1;
            var stakeLength = resu.length;
            
            //fetchRecord from the stake;
            for(var i = 0; i < stakeLength; i++){
                var stakerAddress = resu[i].investors;
                
                
                if(stakerAddress.toLowerCase()==currentAddr.toLowerCase()){
                var stake_id = resu[i].id;
                var releaseStatus = resu[i].releaseStatus;
                var amountTokenInvested = resu[i].amountTokenInvested;
                var initialDeposit = resu[i].initialDeposit;
                var investDate = resu[i].vestedDate;
                var releaseDate = investDate + (86400*365);
                var lastTimeCompound = resu[i].lastTimeCompound;
                var totalTokenEarnedR = resu[i].totalTokenEarned;
                var iscurrentROI = resu[i].currentROI;
                amountTokenInvested = web3.utils.fromWei(amountTokenInvested,'ether');
                var totalTokenEarned = web3.utils.fromWei(totalTokenEarnedR,'ether');//parseInt(totalTokenEarned) 
                var pendingEarning = await staking.methods.getProfit(stake_id).call();
                pendingEarning = web3.utils.fromWei(pendingEarning,'ether');
                investDate =  new Date(investDate * 1000);
                releaseDate = new Date(releaseDate * 1000);
                currentDate = new Date();
                console.log(investedDate);
                var expired = "Pending...";
               
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
                
                     var buttonClaim = '<button type="button" class="btn btn-primary btn-xs banner-content" onclick="claim('+stake_id+')"> Claim </button>';
                      
                    var compound = '<button type="button" class="btn btn-warning btn-xs banner-content" onclick="compound('+stake_id+')"> Compound </button>';
            
            
                table += '<tr><td>'+amountTokenInvested+'</td><td scope="row"> '+totalTokenEarned+'</td><td scope="row"> '+investedDate+'</td><td scope="row">'+pendingEarning+'</td><td>'+buttonClaim+' <br/>'+compound+'</td></tr>';
                count++;
            }
             
            }
            table +='</tbody></table></div>';
            //end fetch;
         
            
            $("#stake_report").html(''+table+'');
                
           // });
    }
}

async function fetchStakes() {
//$("#fetchStake").click(()=> {
    var stakeWallets = [];
     var stakingRecord = "";
     if (staking && currentAddr != null && currentAddr != undefined && currentAddr != "") {
          staking.methods.getAllInvestmentRecord().call().then(resu => {
            var table = '<div class="leaderboard-table-list pb-140 md-pb-80 pt-55"><div class="container"><table id="stakes"><tr><th>S/N-Address</th><th> Staked Amt</th><th>Expt Amt.</th><th>Status</th><th>Action</th></tr>';
            var count = 1;
            var totalStakeAmount = 0;
            var totalPayoutAmount = 0;
            var payout = 0;
            var payoutBalance = 0;
            var currentROIedAmount = 0;
           // allStakes = resu;
            //fetchRecord from the stake;
            for(var i = 0; i < resu.length; i++){
                var stakerAddress = resu[i].investors;
                if(stakerAddress==currentAddr){
                var stake_id = resu[i].id;
                var releaseStatus = resu[i].releaseStatus;
                
                var amountTokenInvested = resu[i].amountTokenInvested;
                var initialDeposit = resu[i].initialDeposit;
                initialDeposit = parseFloat(initialDeposit) / 1000;
                var investDate = resu[i].investDate;
                var releaseDate = resu[i].releaseDate;
                var totalTokenEarned = resu[i].totalTokenEarned;
                var iscurrentROI = resu[i].currentROI;
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
                 if(iscurrentROI==false){
                     
                 var buttonClaim = '<button type="button" class="btn btn-primary" onclick="currentROIStake('+stake_id+','+true+')"> currentROI Investment </button>';
                }
                else{
                  var buttonClaim = '<button type="button" class="btn btn-primary" onclick="currentROIStake('+stake_id+','+false+')"> UncurrentROI Investment </button>';
                  currentROIedAmount += parseInt(totalTokenEarned);
                }
               
            
                table += '<tr><td>'+count+' - '+stakerAddress+'</td><td>'+amountTokenInvested+'</td><td>'+totalTokenEarned+'</td><td>'+expired+'</td><td>'+buttonClaim+' <button type="button" id="download" class="btn btn-warning" onclick="exportToCsv('+stakerAddress+')">Reports</button></td></tr>';
            
             count++;
             
            }
            table +='</table></div>';
            payoutBalance = parseInt(totalPayoutAmount - payout);
            var newTable = '<table id="tableData" style="width:100%;"><tr style="width:100%;"><th style="width:48%;">Wallets</th><th style="width:48%;">Stake Balance</th></tr>';
              for(var i=0; i < arr.length; i++) {
              newTable += '<tr style="width:100%;"><td style="width:48%;">'+arr[i].address +'</td><td style="width:48%;">'+arr[i].amount+'</td></tr>';
              }//end check condition
             }
             newTable += '</table>';
            var data = '<div class="report"><button type="button" class="btn btn-warning" onclick="exportTableToExcel(\'tableData\')">Download Reports</button></div><br/><table><tr><td> Total Staked Amount: <span>'+totalStakeAmount+'ALFA</span></td><td>Total Amount To Payout: <span>'+totalPayoutAmount+'ALFA</span></td><td>Total Amount Claimed: <span>'+payout+'ALFA</span></td><td>Payout Amount Remaining: <span>'+payoutBalance+'ALFA</span></td><td>Total Amount currentROIed: <span>'+currentROIedAmount+'ALFA</span></td></tr></table></div>';
            //end fetch;
           
            $("#stake_report").html(table+'<div class="container">'+newTable+data+'</div></div>');
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

$("#approve").click(() => {
  var amountToInvest = 0; //$("#amount").val();
//   amountToInvest = web3.utils.toWei(amountToInvest,'ether');
//   if(amountToInvest < 0){
//       amountToInvest = 0;
//   }
  try{
    $("#report1").html("Transaction is in progress...");
    token.methods.approve(staking_ADDRESS,amountToInvest).send({
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
  
});

$("#investPress").click(() => {
  var amountToInvest = $("#amount").val();
  var referer = $("#referer").val();
    if(amountToInvest < 10){
       $("#report1").html("Sorry, you can stake minimum of 100 ALFA!");
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
  //$("#investPress").attr("disabled","true");
  if(amountToInvest > 0){
  try{
    $("#report1").html("Transaction is in progress!");
            staking.methods.depositVault(amountToInvest, referer).send({
                from: currentAddr,
            }).then(res => {
                $("#report1").html("Vault Deposit Successful!");
                window.location.reload();
            }); //call multiTransfer
        
  //  call staking storage
    //$("#investPress").attr("disabled","false");
  }//close check total wallets
    catch(err){
      console.log(err);
      $("#report1").html("Error Occur!"+ err);
      //$("#investPress").attr("disabled","false");
      }
  }
  else{
      $("#report1").html("Error Occur! Please enter amount of token you want to invest.");
      $("#investPress").attr("disabled","false");
  }
  }
});

  function claim(stakeId){
    if (staking && currentAddr != null && currentAddr != undefined && currentAddr != "") {
        
        try{
            console.log(stakeId);
    $("#report1").html("Transaction is in progress!");
            staking.methods.claim(stakeId).send({
		       from: currentAddr,
		        }).then(res => {
                $("#report1").html("Vault Reward Claimed Successful! <a class='link' target='_blank' href='https://testnet.bscscan.com/tx/"+res.transactionHash+"'>click here to view transaction.</a>");
		        
            }); //call multiTransfer claimInvestment
            
            //call stake update
    }
    catch(err){
        $("#report1").html("Error Occur!"+ err);
    }
    }
  }
  
  function compound(stakeId){
    if (staking && currentAddr != null && currentAddr != undefined && currentAddr != "") {
        try{
            console.log(stakeId);
    $("#report1").html("Transaction is in progress!");
            staking.methods.compound(stakeId).send({
		       from: currentAddr,
		        }).then(res => {
                $("#report1").html("Vault Compounded Successful! <a class='link' target='_blank' href='https://testnet.bscscan.com/tx/"+res.transactionHash+"'>click here to view transaction.</a>");
		        
            }); //call multiTransfer claimInvestment
            
            //call stake update
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
  