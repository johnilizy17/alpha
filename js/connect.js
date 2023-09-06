let nftWeb3;
let currentAddr;
let networkID

let resultSelected = []

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

function SelectedItem() {

    let element = localStorage.getItem("lastname");

}


async function fetchApi(a) {
    if (a === "home") {
        document.getElementById("soccer").style.display = "none";
        document.getElementById("preload").style.display = "flex";

        const post = await fetch("https://omega.cyclic.app/soccer").then((res) => res.json());
        const home = [post.football[0]]

        console.log(post)

        const currentMatch = [post.football[0], post.football[1], post.football[2], post.football[4]]
        function Selecting() {
            const home = document.getElementById("first")
            console.log(home, "vdfd")
        }


        document.getElementById('test1').innerHTML = home.map(user => {

            localStorage.setItem("lastname", "Smith");


            return (
                `<a href="#0" class="match__fixing__items">
            <div class="match__head">
                <div class="match__head__left">
                    <span class="icons">
                        <i class="icon-football"></i>
                    </span>
                    <span>
                        ${user.league.name}
                    </span>
                </div>
                <span class="today">
                ${user.fixture.timezone}/${moment(user.fixture.date, "hh:mm a").format('lll')}
                </span>
            </div>
            <div class="match__vs">
                <div  class="match__vs__left">
                    <span id="first">
                       ${user.teams.home.name}
                    </span>
        qw            <span class="flag">
                        <img src=${user.teams.home.logo}
                        style="width:50px; height:50px"
                            alt="flag">
                    </span>
                </div>
                <span class="vs">
                    Vs
                </span>
                <div class="match__vs__left">
                    <span id="away" class="flag">
                        <img src=${user.teams.away.logo}
                        style="width:50px; height:50px"
                        
                            alt="flag">
                    </span>
                    <span>
                     
                    ${user.teams.away.name}
                    </span>
                </div>
            </div>
            <div class="match__result">
                <span class="matchborder"></span>
                <span class="match__text">
                    Match Reult
                </span>
            </div>
            <ul class="match__point">
                <li>
                    <div
                    id=${user.teams.home.name}
                        style="display: flex; align-items: center; width:100%; justify-content: center;"
                        onclick="Selecting()"
                        >
                        1</div>
                </li>
                <li>
                    <div
                    id=${user.teams.away.name}
                        style="display: flex; align-items: center; width:100%; justify-content: center;">
                        X
                    </div>
                </li>
                <li>
                    <div
                    id=${user.teams.away.name}
                        style="display: flex; align-items: center; width:100%; justify-content: center;">
                        2</div>
                </li>
            </ul>
        </a>
        `
            )
        }).join('')

        document.getElementById('matches').innerHTML = currentMatch.map(user =>
            `<div class="table__items b__bottom">
                                                                                <div class="t__items">
                                                                                    <div class="t__items__left">
                                                                                        <h6>
                                                                                        ${user.teams.home.name}
                                                                                        </h6>
                                                                                        <span class="text">
                                                                                        ${user.teams.away.name}
                                                                                        </span>
                                                                                        <p>
                                                                                            <a href="#0">
                                                                                                Live
                                                                                            </a>
                                                                                            <span>
                                                                                            ${moment(user.fixture.date, "hh:mm a").format('lll')}
                                                                                            </span>
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="cart__point">
                                                                                    <span>
                                                                                        0
                                                                                    </span>
                                                                                    :
                                                                                    <span>
                                                                                        0
                                                                                    </span>
                                                                                </div>

                                                                                <div class="mart__point__items">
                                                                                    <div id="profile" href="#0box" class="point__box" onclick="SelectedItem()">
                                                                                        1
                                                                                    </div>
                                                                                    <div href="#0box" class="point__box"  onclick="SelectedItem(2, user)">
                                                                                        X
                                                                                    </div>
                                                                                    <div href="#0box" class="point__box"  onclick="SelectedItem(3, user)">
                                                                                        2
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                            
        `
        ).join()
    }
    document.getElementById("soccer").style.display = "block";
    document.getElementById("preload").style.display = "none";

}

function selectedValue(b) {

}

function DisConnect() {
    let currentAddr = ""
    document.getElementById("connectbutton").innerHTML = currentAddr;
    document.getElementById("connect").style.display = "flex";
    document.getElementById("connectdiv").style.display = "none";

}