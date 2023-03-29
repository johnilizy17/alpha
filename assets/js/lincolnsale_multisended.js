let NETID = 56; // 97-testnet; 56-mainnet
let multisender_ADDRESS = "0x9D1C17c80298e64e1176cB6eEA48E9F0b1898655"; //"0x913502B9d35FC0242c1616C33d34ddD903B115E8";
let ABI_multisender = [{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"}],"name":"LogTokenApproval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"}],"name":"LogTokenBulkSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"}],"name":"LogTokenBulkSentETH","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"subscriberId","type":"uint256"},{"indexed":false,"internalType":"address","name":"subs","type":"address"},{"indexed":false,"internalType":"uint256","name":"sType","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_currentTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_duration","type":"uint256"}],"name":"vipAdded","type":"event"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"ApproveERC20Token","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"airdropUsers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"changeFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"checkVipStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_to","type":"address[]"},{"internalType":"uint256[]","name":"_value","type":"uint256[]"}],"name":"ethSendDifferentValue","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_to","type":"address[]"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"ethSendSameValue","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"fetchAllVipUser","outputs":[{"components":[{"internalType":"uint256","name":"vipId","type":"uint256"},{"internalType":"address","name":"vipAddress","type":"address"},{"internalType":"uint256","name":"subType","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"uint256","name":"dateSubscribe","type":"uint256"},{"internalType":"uint256","name":"expDate","type":"uint256"}],"internalType":"struct LincolnsaleMultisend.VipUsers","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAirdropAddresses","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSubscriptionFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recoverETHfromContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"recoverTokensFromContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address[]","name":"_to","type":"address[]"},{"internalType":"uint256[]","name":"_value","type":"uint256[]"}],"name":"sendDifferentValue","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address[]","name":"_to","type":"address[]"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"sendSameValue","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"subType","type":"uint256"},{"internalType":"address","name":"client","type":"address"}],"name":"subscribeToVip","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"subscriberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAirdropAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"vipClients","outputs":[{"internalType":"uint256","name":"vipId","type":"uint256"},{"internalType":"address","name":"vipAddress","type":"address"},{"internalType":"uint256","name":"subType","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"uint256","name":"dateSubscribe","type":"uint256"},{"internalType":"uint256","name":"expDate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vipUsers","outputs":[{"internalType":"uint256","name":"vipId","type":"uint256"},{"internalType":"address","name":"vipAddress","type":"address"},{"internalType":"uint256","name":"subType","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"uint256","name":"dateSubscribe","type":"uint256"},{"internalType":"uint256","name":"expDate","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];

let staking_ADDRESS = "0x80938251223c0cdD32A112c82E37D6784a4acF8E";
let abi_staking = [ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "balance", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" } ];

let nft_address= "0x261FD4169415A70486c9594FB59C94A8C57a34Ab";
let ABI_NFT = [{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}];

var currentAddr;
var networkID = 0;
var web3 = null;
var multisenderWeb3 = null;
var multisender = null;
let nftcontract = null;
let nftMultisender = null;
let totalAmount = 0;
var multisenderObjects = { 
    airdropAddresses: [],
    airdropAmount: [],
    rightArray: [],
    wrongArray: [],
    isSameAmount: 0,
    numWallet: "",
    decimals: "ether",
    ownerAddress:"",
    fee:0,
    vipStatus:false,
    basic: 0,
    premium: 0,
    business:0,
    token: ""
}

window.addEventListener('load', () => {

    //Reset
    totalUser = 0;
    currentAddr = null;
    multisender = null;
    web3 = null;
    multisenderWeb3 = null;
    multisenderContractInfo();
    Connect();
    
});


async function multisenderContractInfo() {
    if (NETID == 56 || NETID==97 ) {
        web3 = new Web3('https://bsc-dataseed1.binance.org:443');
    } else {
        web3 = new Web3('https://data-seed-prebsc-2-s2.binance.org:8545');
    }
    multisender = await new web3.eth.Contract(ABI_multisender, multisender_ADDRESS);
    nftMultisender = await new web3.eth.Contract(abi_staking, staking_ADDRESS);
    nftcontract = await new web3.eth.Contract(ABI_NFT, nft_address);
    update();
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

//function to get basic token information
const getName = async(address) =>{
    
    let tInstance = await new web3.eth.Contract(abi_staking, address);
    let tName = await tInstance.methods.name().call();
    let tSymbol = await tInstance.methods.symbol().call();
    let balance = await tInstance.methods.balanceOf(currentAddr).call();
    let decimal = await tInstance.methods.decimals().call();
    
    // if(tName =="undefined"){
    // tName = "";
    // }
    let decitype = "Ether";
    if(decimal==9){
        decitype ="gwei";
    }
    let myObject = {"name":tName, "symbol":tSymbol, "total": balance,"decimal":decimal,"decitype":decitype};
    //$("#tInfo").html("Token Name:"+tName + ", Token Symbol: "+tSymbol + ", Total Supply: "+web3.utils.fromWei(totalSupply,'Ether'));
    return myObject;
};

async function runDAPP() {
    networkID = await multisenderWeb3.eth.net.getId()
    if (networkID == NETID || NETID==97) {
        web3 = multisenderWeb3;
        multisender = await new web3.eth.Contract(ABI_multisender, multisender_ADDRESS);
        nftcontract = await new web3.eth.Contract(ABI_NFT, nft_address);
        nftMultisender = await new web3.eth.Contract(abi_staking, staking_ADDRESS);
    
        getCurrentWallet();

        update();
     
       // setInterval(update, 5000);
    } else {
        $("#btn-connect-txt").text("Wrong network!");
        if (window.ethereum) {
            const data = [{
               // chainId: '0x38', //Mainnet
                chainId: '0x61', //Testnet
                chainName: 'bnb test',
                nativeCurrency: {
                    name: 'BNB',
                    symbol: 'BNBT',
                    decimals: 18
                },
                rpcUrls: ['https://data-seed-prebsc-2-s2.binance.org:8545'], //https://data-seed-prebsc-1-s1.binance.org:8545 testnet //https://bsc-dataseed.binance.org/
                blockExplorerUrls: ['https://testnet.bscscan.com/'],
            }]
            /* eslint-disable */
            const tx = await window.ethereum.request({ method: 'wallet_addEthereumChain', params: data }).catch()
            if (tx) {
                console.log(tx)
            }
        }
    }
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
            97: 'https://data-seed-prebsc-2-s2.binance.org:8545' //https://data-seed-prebsc-1-s1.binance.org:8545 97 for testnet //mainnet https://bsc-dataseed.binance.org/ 56
        },
        chainId: 97,
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

async function updateParameters() {
    if(multisender && currentAddr !="undefined"){
        try{
        multisenderObjects.owner = await multisender.methods.owner().call();
        multisenderObjects.fee = await multisender.methods.getFee().call();
        multisenderObjects.vipStatus = await multisender.methods.checkVipStatus().call();
        let subfee = await multisender.methods.getSubscriptionFee().call();
        multisenderObjects.basic = subfee[0];
        multisenderObjects.premium = subfee[1];
        multisenderObjects.business = subfee[2];
        console.log(multisenderObjects.owner + " fee: "+ multisenderObjects.fee+" vip: "+multisenderObjects.vipStatus +" basic: "+multisenderObjects.basic+ " premium: "+multisenderObjects.premium+ " business: "+multisenderObjects.business);
        }
        catch(err){
            console.log(err);
        }
    }
}


$("#validate").click(() => {
    multisenderObjects.airdropAddresses = [];
    multisenderObjects.airdropAmount = [];
    multisenderObjects.rightArray = [];
    multisenderObjects.wrongArray = [];
    var sameAmount = $('#sameAmount');
    var tokenName = $("#token").val(); //$('#token').find(":selected").text();
    var arrayAddress = $('#wallets').val().toString().split("\n");
    var count = 0;
  
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
            //totalAmount = parseInt(totalAmount) + parseInt(amount);
            try{
            let splitAddress = addressAndAmount.split(",");
            let address = splitAddress[0].trim();
            //amount = splitAddress[1].trim();
            
            address = web3.utils.toChecksumAddress(address);
            let checksum = web3.utils.checkAddressChecksum(address);
            
            if(checksum==true){
                console.log("correct address:"+address);
                multisenderObjects.rightArray.push(i);
                multisenderObjects.airdropAddresses.push(address);
                multisenderObjects.airdropAmount.push(web3.utils.toWei(amount,multisenderObjects.decimals));
                //}
                newAddressFormat += address+","+amount+"\n";
            }
            else{
                multisenderObjects.wrongArray.push(i);
              //  wrong++;
              newAddressFormat += address+","+amount+"\n";
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
    
    $("#approve").removeAttr("disabled");
    totalAmount = calculateTotalToken(multisenderObjects.airdropAmount);
    //totalAmount, multisenderObjects.decimals);
    $("#wallets").val(newAddressFormat);
    $("#totalWallets").html(count);
    $("#totalCAddress").html(multisenderObjects.rightArray.length);
    $("#totalWAddress").html(multisenderObjects.wrongArray.length);
    $("#amountToSpend").html(web3.utils.fromWei(totalAmount,multisenderObjects.decimals));
    multisenderObjects.numWallet = count;
   
    // console.log(multisenderObjects.airdropAddresses);
     console.log(multisenderObjects.airdropAmount);

  });
 

 function executeContract(wallets,amounts,contract, batch){
  //set up your Ethereum transaction
  console.log(amounts);
  let bnbValue = 0;
  if(multisenderObjects.token.toUpperCase()=="BNB"){
      
      if(isSubscribe()==false){
          bnbValue = calculateFee(amounts);
      }
          bnbValue = calculateTotalToken(amounts);
          console.log(bnbValue);
         // bnbValue = web3.utils.toWei(parseFloat(bnbValue),'ether');
      
       contract.methods.ethSendDifferentValue(wallets,amounts[0]).send({
                from: currentAddr,
                value: bnbValue
            }).then(res => {
                //console.log(res.transactionHash);
                $("#report").prepend("Transaction successful! Batch -"+batch+". <a class='dropdown-item nav-link' target='_blank'  href='https://bscscan.com/tx/"+res.transactionHash+"'>click here to view transaction.</a> </b>");
            }); //call multiTransferFixed
      
  }
  else{
      if(isSubscribe()==false){
          bnbValue = calculateFee(amounts);
      }
       contract.methods.sendDifferentValue(multisenderObjects.token,wallets,amounts).send({
                from: currentAddr,
                value: bnbValue
            }).then(res => {
                $("#report").prepend("Transaction successful! Batch - "+batch+". <a class='dropdown-item nav-link' target='_blank'  href='https://bscscan.com/tx/"+res.transactionHash+"'>click here to view transaction</a> <br/>");
            }); //call multiTransfer 
  }
  $("#report").html("Transaction is in progress!");
   //console.log(wallets, amounts, contract);
  
}

$("#clearWallets").click(() => {
    $('#wallets').val("");
    $('#approve').attr("disabled","true");
    $('#multisendPress').attr("disabled","true");
    
});

$("#multisendPress").click(() => {
   
  try{
  let totalWallet = multisenderObjects.airdropAddresses.length;
  let totalNum = multisenderObjects.airdropAmount.length;
    if(totalWallet==0){
        $("#report").prepend("You have no valid address to send airdrop to.");
    }
    else if(totalWallet != totalNum){
        $("#report").prepend("Your valid address not the same as valid amount. Please recheck your addresses.");
    }
    else{
    let amountPerSend = 250;
   if(multisenderObjects.isSameAmount==1){
       amountPerSend = 75;
   }
  if(totalWallet > amountPerSend){
    let batchNum = totalWallet / amountPerSend;
   
    batchNum = Math.ceil(batchNum);
   
    for(let i =1; i <= batchNum; i++){
      let start = 0;
      let end = 0;
      if(i==1){
        start = i-1;
        end = amountPerSend;
      }
      else{
        start = ((i-1) * amountPerSend);
        end = (start + amountPerSend);
      }
      
      var fwallet = multisenderObjects.airdropAddresses.slice(start, end);
      var famount = multisenderObjects.airdropAmount.slice(start, end);
      console.log(fwallet+"-"+ famount+"- "+multisenderObjects.airdropAddresses);
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
    
  function calculateTotalToken(amount){
    var subTotal = 0;
    for(var i = 0; i < amount.length; i++){
        subTotal += parseFloat(amount[i]);
    }
    return subTotal;
  }
  
  function calculateFee(amount){
    var subTotal = amount.length * parseFloat(multisenderObjects.fee);
    return subTotal; //web3.utils.toWei(parseFloat(subTotal),'ether');;
  }

$("#tokenType").click(()=>{
   if($('#tokenType').find(":selected").val()=="others"){
   $("#token").val("");
   $("#token").css("display","block");
   $("#tokenType").css("display","none");
   
   }
});

$("#token").keyup(function(){
    $("#tokenInfo").html("loading...");
    let addr = $(this).val();
    getName(addr).then(result =>{
        multisenderObjects.decimals = result.decitype;
        $("#tokenInfo").html("Token Name:"+result.name + ", Token Symbol: "+result.symbol + ", Your Balance: "+numberWithCommas(web3.utils.fromWei(result.total,result.decitype)));
    }); 

     
});

$("#subscribe").click(async () => {
    $("#report1").html("processing...");
    let type = $("#type").val();
    let tAmount = 0;
    if(type==1){
        tAmount = multisenderObjects.basic;
    }
    else if(type==2){
        tAmount = multisenderObjects.premium;
    }
    else if(type==3){
        tAmount = multisenderObjects.business;
    }
    else{
        window.location.href = "https://t.me/lekman2010";
        tAmount = 0.01;
    }
    
    //tAmount = BigInt(tAmount).toString();
    //  console.log(tAmount);
    try{
    multisender.methods.subscribeToVip(type, currentAddr).send({
                from: currentAddr,
                value: tAmount
            }).then(res => {
                $("#report1").html("Approved Successfully!");
                window.location.reload();
            }); //call multiTransfer
    }
    catch(err){
        console.log("Subscription fail: "+err);
    }
});

$("#approve").click(async () => {
    $("#report1").html("processing...");
    let tokenAddress = $("#token").val();
    let tAmount = totalAmount + (0.01 * totalAmount); //web3.utils.toWei(totalAmount, multisenderObjects.decimals);
    //console.log(tAmount);
    tAmount = BigInt(tAmount).toString();
    //  console.log(tAmount);

    //tAmount = web3.utils.toBN(tAmount);
    let tInstance = await new web3.eth.Contract(abi_staking, tokenAddress);
    tInstance.methods.approve(multisender_ADDRESS, tAmount).send({
                from: currentAddr
            }).then(res => {
                $("#multisendPress").removeAttr("disabled");
                $("#report1").html("Approved Successfully!");
               // window.location.reload();
            }); //call multiTransfer

});

function isSubscribe(){
    if(multisenderObjects.ownerAddress==currentAddr || multisenderObjects.vipStatus==true){
        return true;
    }
    else{
        return false;
    }
}
function getPrice(elem, type){
    let tVal = 0
    $(elem).css("color","gold");
    if(type==1){
        tVal = web3.utils.fromWei(multisenderObjects.basic,multisenderObjects.decimals);
        $("#type").val(1);
    }
    else if(type==2){
        tVal = web3.utils.fromWei(multisenderObjects.premium,multisenderObjects.decimals);
        $("#type").val(2);
    }
    else if(type==3){
        tVal = web3.utils.fromWei(multisenderObjects.business,multisenderObjects.decimals);
        $("#type").val(3);
    }
    else{
        $("#type").val(0);
    }
    $("#charges").val(tVal +" BNB");
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}