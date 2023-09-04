import Layout from "@/components/Layout/Layout";
import GiftTableComponent from "@/components/mint/GiftTable";
import ReferralTableComponent from "@/components/mint/ReferralTable";
import Referral from "@/components/Referral";
import { getReward, getUserreferral, getUserReward } from "@/services/user-services";
import { Box, Button, Center, layout, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { useAccount } from "wagmi";
import { readContract } from '@wagmi/core'
import ABI from "@/components/mint/ABI";
import Lottie from 'lottie-react';
import agent from "@/assets/agent.json"
import Router from "next/router";
import { NFT_Address } from "@/routes/token";

const Settings = ({ setdisplayPopup }) => {

  const [selectedOption, setSelectedOption] = useState()
  const [selectedLanguage, setSelectedLanguage] = useState()
  const { address } = useAccount()
  const [data, setData] = useState([])
  const [reward, setReward] = useState([])
  const [display, setDisplay] = useState(false)

  const options = [
    { value: 'Nigeria', label: 'Nigeria' },
    { value: 'United State', label: 'United State' },
    { value: 'Ghana', label: 'Ghana' },
  ];

  const language = [
    { value: 'English', label: 'English' },
    { value: 'France', label: 'France' },
    { value: 'Italian', label: 'Italian' },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleChange2 = (selectedLanguage) => {
    setSelectedLanguage(selectedLanguage);
  };


  

  async function ReadVerfiction() {
    const data = await readContract({
      address: NFT_Address,
      abi: ABI,
      args: [address],
      functionName: 'verificationPartner',
    })
   const registered =await getUserreferral(address)
   setData(registered.data)
    setDisplay(data)
  }


  
  useEffect(() => {
    if (address) {
      ReadVerfiction()
    }
  }, [])

  return (
    <div className="settings">
      <div className="settings__wrapper">
        {!display ?
          <Center display="flex" flexDirection={"column"} justifyContent="center" alignItem="center" w={["full", "80vw"]} p="40px">
            <Text mb="10px" fontWeight="900" fontSize="24px">Community Ambassador Referral Program</Text>
        
            <Box w={["300px", "400px"]}>
              <Lottie animationData={agent} loop={true} />
            </Box>
            <Button
            onClick={()=>Router.push("https://forms.gle/nmGUV6UJMfPxHMLU9")}
            mt="20px" colorScheme="green">
              Register
            </Button>
          </Center>
          :
          <>
            <h2 className="settings__title">Referral</h2>


            <div className="details__form">
              <Referral />
            </div>

            <Box mt="30px" className="details__form">
              <ReferralTableComponent drivers={data} />
            </Box>
          </>}
      </div>
    </div>
  );
};

export default Layout(Settings);
