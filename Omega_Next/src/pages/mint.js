import { Box, Center, Image, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import DriverTableComponent from '@/components/mint/DriverTableComponent';
import MintForm from '../components/mint/Mintcreate';
import MintReport from '../components/mint/mintReport';
import Layout from '@/components/Layout/Layout';
import { useAccount } from 'wagmi';
import { getAsset } from '@/services/user-services';

function Mint({ setdisplayPopup, success }) {

    const [pages, setPages] = useState("mint")
    const [value, setValue] = useState({})
    const [data, setData] = useState([])
    const { address } = useAccount()

    async function FeatchAsset() {
        const data = await getAsset(address)
        const filterData = data.data.map((a, b) => {
            if (a._id) return { ...a, url: `regiz.vercel.app/${a._id}` }
        })
        setData(filterData)
    }

    useEffect(() => {
        if (address) FeatchAsset()

    }, [address])

    return (
        <div className="sell__car">
            <div className="sell__car-wrapper">
                <Box className="Mint_Navigation" mb="50px">

                    <Box onClick={() => { setPages("mint") }} className={pages === "mint" ? 'active' : ''}>
                        <center>
                            Mint
                        </center>
                    </Box>
                    <Box onClick={() => { setPages("mint history") }} className={pages === "mint history" ? 'active' : ''}>
                        <center>
                            Mint History
                        </center>
                    </Box>
                    <Box onClick={() => { setPages("verify") }} className={pages === "verify" ? 'active' : ''}>
                        <center>
                            Verification History
                        </center>
                    </Box>
                </Box>
                {pages === "mint" &&
                    <>
                        {success ? <MintReport popup={setdisplayPopup} value={value} /> :
                            <MintForm setdisplayPopup={setdisplayPopup} setValue={setValue} />}
                    </>
                }
                {pages === "mint history" && <DriverTableComponent drivers={data} />
                }
                {pages === "verify" && <Center h="60vh">
                    <Image h="100%" objectFit={"contain"} src={'images/comingSoon.jpg'} alt="soon image" />
                </Center>
                }
            </div>
        </div>
    )
}

export default Layout(Mint)