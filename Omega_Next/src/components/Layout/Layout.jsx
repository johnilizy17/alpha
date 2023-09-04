import React, { useEffect } from "react";
import { useState } from "react";
import Chat from "../Chat";
import Nav from "../Nav";
import Search from "../Search";
import Sidebar from "../Sidebar/Sidebar";
import TopNav from "../TopNav/TopNav";
import Wallet from '../Wallet'
import ChatMessage from "../Chat/ChatMessage";
import Model from "./Model";
import Notification from '../Notification';
import PopUp from "@/routes/PopUp";
import Footer from "@/routes/Footer";
import { getNotification, getUserInformation } from "@/services/user-services";
import { useAccount } from "wagmi";
import Loading from "./Loading";
import { useRouter } from "next/router";
import PolicyState from "../Policy";
import Web3 from "web3"
import ABI from "../mint/ABI";

const Layout = (RegizState) => {

  return (props) => {
    const [display, setDisplay] = useState(false)
    const [toggle, setToggle] = useState(true)
    const [walletTransition, setWalletTransition] = useState(false)
    const [wallet, setWallet] = useState(false)
    const [chat, setChat] = useState(false)
    const [noteData, setNoteData] = useState([])
    const [chatDisplay, setChatDisplay] = useState(false)
    const [loadingScreen, setLoadingScreen] = useState(true)
    const [displayModel, setDisplayModel] = useState(false)
    const [notificationDisplay, setNotificationDisplay] = useState(false)
    const [profileDisplay, setProfileDisplay] = useState(false)
    const [displayPopup, setdisplayPopup] = useState({ state: false, action: "", success: false, date: 1, object: {} })
    const { address } = useAccount()
    const router = useRouter()
    const [userTag, setUserTag] = useState({})
   
   
    

    return (
      <>
            <TopNav  />
              <RegizState success={displayPopup.success} setdisplayPopup={setdisplayPopup} setWallet={setWallet} setWalletTransition={setWalletTransition} toggle={toggle} setDisplay={setDisplayModel} setProfileDisplay={setProfileDisplay} displayPopup={displayPopup} />
              <Footer/>
      </>
    );
  }
};
  
export default Layout;
