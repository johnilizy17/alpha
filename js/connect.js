let nftWeb3;
let currentAddr;
let networkID

async function Connect() {
    if (window.ethereum) {
        nftWeb3 = new Web3(window.ethereum)
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            let accounts = await window.ethereum.request({ method: 'eth_accounts' });
            currentAddr = accounts[0];
            window.ethereum.on('chainChanged', (chainId) => {
                window.location.reload();
            });
            window.ethereum.on('accountsChanged', function (accounts) {
                window.location.reload();
            })
            if (currentAddr) {
                const UserAddress = currentAddr[0] + currentAddr[1] + currentAddr[2] + currentAddr[3] + currentAddr[4] + currentAddr[5] + currentAddr[6] + currentAddr[7] + currentAddr[8] + currentAddr[9] + `....` + currentAddr[38] + currentAddr[39] + currentAddr[40] + currentAddr[41]
                document.getElementById("connectbutton").innerHTML = UserAddress;
                document.getElementById("connect").style.display = "none";
                document.getElementById("connectdiv").style.display = "flex";

                networkID = await nftWeb3.eth.net.getId()
            }
        } catch (error) {
            console.error(error)
        }

    }

}

 function DisConnect() {
    let currentAddr = ""
    document.getElementById("connectbutton").innerHTML = currentAddr;
    document.getElementById("connect").style.display = "flex";
    document.getElementById("connectdiv").style.display = "none";

}