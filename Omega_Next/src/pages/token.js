import React, { useEffect, useState } from "react";
import TrackingChart from "../charts/TrackingChart";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import CarStatsChart from "../charts/CarStatsChart";
import MileChart from '../charts/MileChart';
import Layout from "@/components/Layout/Layout";
import { readContract } from '@wagmi/core';
import ABI from "../components/mint/ABI";
import { Box, Center, Flex, Img } from "@chakra-ui/react";
import { NFT_Address } from "@/routes/token";

const Token = () => {
  const sellCar = "../assets/images/sell-car.png";

  const percentage = 55;
  const percentage02 = 45;
  const [doc, setDoc] = useState(0)

  async function ReadMintDoc() {
    const docNumber = await readContract({
      address: NFT_Address,
      abi: ABI,
      functionName: 'getmintDoc',
    })

    if (docNumber) setDoc(docNumber.length)
  }

  useEffect(() => {

    ReadMintDoc()
  }, [])
  return (
    <div className="sell__car">
      <div className="sell__car-wrapper">
        <Center mt="10px" mb="20px" w="auto" justifyContent="start" alignItems="center">
        <Box style={{ "fontWeight": "700", width:100 }} >REGIZ COIN</Box>
        <Img  ml="20px" w="40px" src="/coin.png" />
        </Center>
        <p>Regizcoin is a token owned by Regiz LLC.</p>
        <p>
          Regizcoin will be used for payments to access services on the platform. Either on the Documentation Technology platform or Social Marketplace, Regizcoin will be our acceptable transaction currency. The purpose of the coin is for easy accessibility and usage of the platform; it makes the platform accessible to users globally..</p>
        <div>
          <h4 style={{ "fontWeight": "700", "marginBottom": ".7rem" }}>TOKEN NAME: REGIZ COIN </h4>
          <p style={{ "marginBottom": ".5rem" }}>Token Symbol: rgz</p>
          <p style={{ "marginBottom": ".5rem" }}>Total Supply: 100 billion rgz</p>
          <p style={{ "marginBottom": ".5rem" }}>Total in Circulation: 67% 67,000,000,000 rgz</p>

          <h4 style={{ "fontWeight": "700", "marginBottom": ".7rem" }}>TOKEN DISTRIBUTION:</h4>
          <p style={{ "marginBottom": ".5rem" }}>Liquidity- 40%</p>
          <p style={{ "marginBottom": ".5rem" }}>Pre-sale - 30%</p>
          <p style={{ "marginBottom": ".5rem" }}>Rewards- 15%</p>
          <p style={{ "marginBottom": ".5rem" }}>Team - 5%</p>
          <p style={{ "marginBottom": ".5rem" }}>Marketing- 5%</p>
          <p style={{ "marginBottom": ".5rem" }}>Airdrops - 2%</p>
          <p style={{ "marginBottom": ".5rem" }}>Locked- 3%</p>

          <h4 style={{ "fontWeight": "700", "marginBottom": ".7rem" }}>TAXES</h4>
          <p style={{ "marginBottom": ".5rem" }}>There will be 10% transaction fee of our token, Breakdown is as follows:</p>
          <p style={{ "marginBottom": ".5rem" }}>3% Rewards</p>
          <p style={{ "marginBottom": ".5rem" }}>2% Team</p>
          <p style={{ "marginBottom": ".5rem" }}>3% Marketing</p>
          <p style={{ "marginBottom": ".5rem" }}>Marketing- 5%</p>
          <p style={{ "marginBottom": ".5rem" }}>Airdrops - 2%</p>
          <p style={{ "marginBottom": ".5rem" }}>Locked- 3%</p>
        </div>


        <div className="sell__car-top">
          <div className="tracking__history">
            <Flex className="stats__title" mb="-10px" justifyContent="space-between">
              <h3 >Total document minted </h3>
              <Box>{doc}</Box>
            </Flex>
            <TrackingChart doc={doc} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout(Token);
