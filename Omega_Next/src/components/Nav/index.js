import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Nav() {

    const router = useRouter()

    return (
        <header class="header-section">
          <div class="container-fluid p-0">
            <div class="header-wrapper">
              <div class="menu__left__wrap">
                <div class="logo-menu px-2">
                  <a href=" /" class="logo">
                    <img src="assets/img/logo/logo.png" style={{width:50}} alt="logo" />
                  </a>
                </div>
                <div class="lang d-flex align-items-center px-2">
                  <div class="language__wrap">
                  </div>
                  <div class="header-bar d-lg-none">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <ul class="main-menu">
                  <li style={{marginRight:40}}>
                    <a href="/">
                      <span>Daily</span>
                    </a>
                  </li>
                  <li style={{marginRight:40}}>
                    <a href="week.html">
                      <span>Weekly
                      </span>
                    </a>
                  </li>
                  <li style={{marginRight:40}}>
                    <a href="season.html">
                      <span>Seasonly</span>
                    </a>
                  </li>
                  <li style={{marginRight:40}}>
                    <a href="transaction.html">
                      <span>
                        History
                      </span>
                    </a>
                  </li>
                  <li style={{marginRight:40}}>
                    <a href="bethistory.html">
                      <span>
                        My Bet
                      </span>
                    </a>
                  </li>
                  <li style={{marginRight:40}}>
                    <a href="NFT_Omega.html">
                      <span>NFT</span>
                    </a>
                  </li>

                </ul>
              </div>
              <div class="mneu-btn-grp">

                <button id="connect" class="cmn--btn2" style={{border:"none", color:"white"}}>
        Q          <span class="rela">Connect</span>
                </button>
                <div class="dropdown" id="connectdiv" style={{display: "none"}}>
                  <button id="connectbutton" class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

                  </button>
                  {/* <ul class="dropdown-menu"> */}
                    {/* <li><a class="dropdown-item" href="#" onClick={{DisConnect()}}>Disconnect</a></li> */}
                    {/* <li><a class="dropdown-item" href="/deposit.html">Deposit</a></li> */}
                  {/* </ul> */}
                </div>
              </div>
            </div>
          </div>
        </header>
    )
}