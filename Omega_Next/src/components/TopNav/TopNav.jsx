import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Toast, useToast } from "@chakra-ui/react";
import { useWeb3Modal } from "@web3modal/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAccount, useDisconnect } from "wagmi";

const TopNav = ({ setSearch, setDisplay, setToggle, noteData, toggle, setNotificationDisplay }) => {

  const [mood, setMood] = useState(true)
  const [userAddress, setUserAddress] = useState("")
  const { isOpen, open, close, setDefaultChain } = useWeb3Modal();
  const { address } = useAccount()
  const toast = useToast()

  let refresh = []
  const { disconnect } = useDisconnect()


  useEffect(() => {
    if (address) {
      setUserAddress(address[0] + address[1] + address[2] + address[3] + address[4] + address[5] + `....` + address[38] + address[39])
      close()
    } else {
      open()
      
    }
  }, [address])

  return (
    <div className="top__nav">
      <div className="top__nav-wrapper">
        <div className="top_flex">
          <div className="top_toggle" style={{ marginTop: -25, width: 30, height: 30, marginRight: 15, color: "#fff" }} onClick={() => { setToggle(!toggle) }}>
            {toggle ?
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            }
          </div>
          <div className="sidebar__top">
            <Link
              href={"/"}
            >
              <div className="top__img">
                <img src={"/assets/images/logo.png"} alt="logo" />
              </div>
            </Link>
          </div>
          <div className="top__text">
            regiz
          </div>
        </div>

        <div className="search__box">
          <input type="text" placeholder="Document ID/ Doctag" onFocus={() => setSearch(true)} />
          <span>
            <i className="ri-search-line"></i>
          </span>
        </div>
        <div className="top__nav-right">
          <div className="top_search" onClick={() => setSearch(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
          <div className="top__text" onClick={() => {
            setMood(!mood)
            if (mood) {
              document.documentElement.style.setProperty('--body-bg', '#0b0c28');
              document.documentElement.style.setProperty('--heading-color', 'whitesmoke');
              document.documentElement.style.setProperty('--chat-bg', '#000');
            } else {
              document.documentElement.style.setProperty('--body-bg', 'whitesmoke');
              document.documentElement.style.setProperty('--heading-color', '#000');
              document.documentElement.style.setProperty('--chat-bg', '#808191');
            }
          }}>
            {mood ? <svg width="16" height="16" fill="currentColor" className="bi bi-moon-stars-fill" viewBox="0 0 16 16">
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
              <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
            </svg> :
              <svg width="16" height="16" fill="#fff" className="bi bi-moon-stars" viewBox="0 0 16 16">
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
              </svg>
            }
          </div>
          <div className="notification" onClick={() => {
            setDisplay(true)
            setNotificationDisplay(true)
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>
            <span className="badge">0</span>
          </div>
          {userAddress.length >1 ?
            <Menu >
              {({ isOpen }) => (
                <>
                  <MenuButton fontSize={["12px", "14px"]} colorScheme={"green"} isActive={isOpen} as={Button} rightIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" /></svg>}>
                    {userAddress}
                  </MenuButton>
                  <MenuList bg={"black"}>
                    <MenuItem bg={"black"} h={"40px"} onClick={() => { disconnect(); setUserAddress("");  open();}}>Disconnect</MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
            :
            <Box>
            <button className="top__button" onClick={() => { open() }}>
              Connect
            </button>
            </Box>
            }
        </div>
      </div>
    </div >
  );
};

export default TopNav;
