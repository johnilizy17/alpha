//get data functions
async function getTokenPrice(contractAddr){
    $.get('https://api.pancakeswap.info/api/v2/tokens/'+contractAddr,  // url
      function (data) {  // success callback
          //alert( ' the data:' + data);
          var newData = JSON.parse(data);
          var price = newData.data.price;
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
    var stakeWallets = [];
     var stakingRecord = "";
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

