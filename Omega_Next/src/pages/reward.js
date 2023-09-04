import React, { useEffect, useState } from "react";
import TrackingChart from "@/charts/TrackingChart";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import CarStatsChart from "@/charts/CarStatsChart";
import MileChart from '@/charts/MileChart';
import { Box, Button, Center, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import Layout from "@/components/Layout/Layout";
import GiftTableComponent from "@/components/mint/GiftTable";
import { getAsset } from "@/services/user-services";
import { useAccount } from "wagmi";
import { BUSDPrice, BUSDPrice2 } from "@/routes/token";
const sellCar = "/assets/images/sell-car.png";

const Reward = ({ setdisplayPopup }) => {

  const { address } = useAccount()
  const [data, setData] = useState([])

  async function referralData() {
    const result = await getAsset(address)
    setData(result.data)
  }

  useEffect(() => {
    if (address) {
      referralData()

    }
  }, [address])

  return (
    <div className="sell__car" style={{ padding: "0px", paddingBottom: 20 }}>
      <div className="sell__car-wrapper">
        <Box padding={["0px", "20px"]}>
          <h2 className="sell__car-title">Reward</h2>
          <div className="offer__wrapper">
            <div className='flex_content'>
              <p>
                When a new user mints a document at a price of ${BUSDPrice} per year or ${BUSDPrice2} for two years, a tax of 20% is deducted from the minting fee. This tax is shared among documents previously minted on the platform, which have durations of either one year or two years respectively.
              </p>
              <p>
                For instance, if there are 100 new documents being minted each day, with a total price of ${BUSDPrice * 100}, a 20% tax amounting to ${(BUSDPrice*100 *20)/100} is deducted. This 20% is then divided among all the document that were minted  previously.
              </p>
              <p>
                The maximum earning for all documents is 3x the mint fee.   </p>
            </div>
            <Box mt="30px" mb="30px" className="details__form">
              <GiftTableComponent drivers={data} setdisplayPopup={setdisplayPopup} />
            </Box>
          </div>
        </Box>
      </div >
    </div >
  );
};

export default Layout(Reward);
