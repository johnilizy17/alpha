import React, { useEffect, useState } from "react";
import RecommendCarCard from "@/components/UI/RecommendCarCard";
import recommendCarsData from "@/assets/dummy-data/recommendCars";
import Router, { useRouter } from 'next/router'
import SingleCard from "@/components/reuseable/SingleCard";
import Layout from "@/components/Layout/Layout";
import { getUserInformation, RegisterReferral } from "@/services/user-services";
import { Center, Spinner, useToast } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import { readContract } from '@wagmi/core'
import ABI from "../components/mint/ABI";


const carObj = {
  title: "Total Cars",
  totalNumber: 750,
  icon: "ri-police-car-line",
};

const tripObj = {
  title: "Daily Trips",
  totalNumber: 1697,
  icon: "ri-steering-2-line",
};

const clientObj = {
  title: "Clients Annually",
  totalNumber: "85k",
  icon: "ri-user-line",
};

const distanceObj = {
  title: "Kilometers Daily",
  totalNumber: 2167,
  icon: "ri-timer-flash-line",
};

const Dashboard = ({ setWalletTransition, setWallet, setDisplayModel, setProfileDisplay }) => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})
  const router = useRouter()
  const toaster = useToast()
  const [doc, setDoc] = useState(0)

  function WalletCard(e, link) {

    console.log(e)
    if (e === "Wallet") {
      setWallet(true)
      setTimeout(() => setWalletTransition(true), 500)
    } else {
      Router.push(link);
    }
  }

  const { address } = useAccount()


  async function userFormation() {
    setLoading(true)
 
    if (address && router.query && router.query.r) {

      const referral = await RegisterReferral(
        {
          "user": router.query.r,
          "referral": address
        })
      toaster({ position: "top-right", title: "Referral Alert", description: referral.data.message, status: "success", isClosable: true });
    }
    const userData = await getUserInformation(address)

    if (userData.data) {
      setData(userData.data)
      setLoading(false)
    } else {
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    if (address) {
      userFormation()
    }
  }, [address, router.query.r])
  return (
    <div className="dashboard">
      
      <div className="dashboard__wrapper">
        <div className="profileCard" onClick={() => Router.push("/profile")}>
          <div className="card-container">

            {!address ?
              <>
                <center>
                  <div style={{ position: "relative", width: 240, marginBottom: 30 }}>
                    <img className="round" style={{ objectFit: "contain" }} src={"/assets/images/user.png"} alt="user" />
                  </div>
                </center>
                <p style={{ fontWeight: 900, fontSize: 15 }}> Connect your wallet to enjoy regiz</p>
              </>
              :
              loading ?
                <Center h="full" w="full" mt="8">
                  <Spinner color="red" size="xl" />
                </Center>
                :
                <>
                  <center>
                    <div style={{ position: "relative", width: 240 }}>
                      <img className="round" style={{ objectFit: "contain" }} src={data.profileImage && data.profileImage.length > 1 ? `https://gateway.pinata.cloud/ipfs/${data.profileImage}?_gl=1*1ybf4ge*rs_ga*MjRhODBjMTktNTNlYS00OTI3LTg4MmYtYzRjNjRhOWQ5Nzcy*rs_ga_5RMPXG14TE*MTY4Mzg3ODA5MS4xLjEuMTY4Mzg3ODE0OS4yLjAuMA` : "/assets/images/user.png"} alt="user" />
                    </div>
                  </center>
                  <h3 style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", marginBottom: 3 }}> <div className="DocTag">
                    {data.usertag && <img src={"/assets/images/@DocTag.png"} />}
                  </div>
                    {data.usertag ?
                      <>
                        @{data.usertag}
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 10, color: "#02383C" }} width="16" height="16" fill="#02383C" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                      </>
                      :
                      <p style={{ fontWeight: 900, fontSize: 15 }}> Start your KYC to enjoy Regiz </p>
                    }
                  </h3>
                  {data.usertag && <p>{data.firstname}, {data.lastname}<br /> {data.email}</p>}
                </>
            }
          </div>

        </div>
        <div className="cards-list">
          {recommendCarsData.map((item) => (
            <div onClick={() => WalletCard(item.carName, item.link)}>
              <RecommendCarCard item={item} key={item.id} setWalletTransition={setWalletTransition} setWallet={setWallet} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout(Dashboard);
