import React, { useEffect, useState } from 'react';
const A = '../assets/images/grade_A.png';
const B = '../assets/images/grade_B.png';
import { Box, Center, Flex } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { RWebShare } from "react-web-share";
import Layout from '@/components/Layout/Layout';
import { Spinner, useToast } from '@chakra-ui/react';
import document from '@/assets/dashboard/documents.json';
import Lottie from 'lottie-react';
import { useAccount, useContractRead } from 'wagmi'
import ABI from '@/components/mint/ABI'
import { getAsset, updateMintVisible } from '@/services/user-services';
import moment from 'moment';
import Moment from 'react-moment';
import Router, { useRouter } from 'next/router';

function Asset({ setdisplayPopup }) {

    const [loading, setLoading] = useState(false)
    const [documentMinted, setDocumentMinted] = useState([])
    const { address } = useAccount()
    const router = useRouter();
    const toast = useToast();

    function handleChange(e) {
        setLoading(true)
        if (e.target.value == 1) {
            FeatchAsset()
        } else {
            setDocumentMinted([])
            setLoading(false)
        }

    }

    async function FeatchAsset() {
        const data = await getAsset(address)
        const filterData = data.data.map((a, b) => {
            if (a._id) return { ...a, url: `regiz.vercel.app/${a._id}` }
        })
        setDocumentMinted(filterData)
        setLoading(false)
    }



    useEffect(() => {
        setLoading(true)
        if (address) FeatchAsset()
    }, [address])


    return (
        <div className="dashboard">
            <div className="dashboard__wrapper">
                <div>
                    <div>
                        <select onChange={handleChange} className='asset_selection'>
                            <option value={1}>All</option>
                            <option value={2}>Grade A</option>
                            <option value={1}>Grade B</option>
                            <option value={3}>Expired</option>
                        </select>
                    </div>
                    {loading ?

                        <Center h="full" w="full" mt="8">
                            <Spinner color="red" size="xl" />
                        </Center>
                        : documentMinted.length === 0 ?
                            <Box display="flex" justifyContent="center" alignItem="center" w={["full", "80vw"]} mt="40px">
                                <Box w={["300px", "400px"]}>
                                    <Lottie animationData={document} loop={true} />
                                </Box>
                            </Box>
                            :
                            <Flex wrap="wrap" justifyContent={["center", "start"]}>{
                                documentMinted.map((r, id) => (
                                <div className='card_list'>
                                    <div className='card mint' style={{ "position": "relative" }}>
                                        <div style={{ float: "right", position: "relative" }}>
                                            <Flex>
                                                <Center mr="10px">
                                                    <RWebShare
                                                        data={{
                                                            text: "access this document with ease through regiz",
                                                            url: r.url,
                                                            title: r.title,
                                                        }}

                                                        onClick={() => {
                                                            toast({ position: "top-right", title: "Coping", description: "make sure your document is set to public so other people can view it", status: "success", isClosable: true });
                                                        }}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share-fill" viewBox="0 0 16 16">
                                                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                                                        </svg>
                                                    </RWebShare>
                                                </Center>
                                                <Center>
                                                    <Menu>
                                                        <MenuButton>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                            </svg>
                                                        </MenuButton>
                                                        <MenuList>
                                                            <MenuItem onClick={() => { setdisplayPopup({ state: true, action: "reward", object:r })}} color="green">Claim Reward</MenuItem>
                                                            <MenuItem color="green" onClick={() => { setdisplayPopup({ state: true, action: "visibility", object: r._id }) }}> Set Visibility</MenuItem>
                                                            <MenuItem onClick={() => { router.push("/reward")}} color="green">Reward History</MenuItem>
                                                            <MenuItem onClick={() => { router.push("/community_ambassador_referral_program")}} color="green">Referral Reward </MenuItem>
                                                           {/* <MenuItem color="green">Renewal</MenuItem> */}
                                                        </MenuList>
                                                    </Menu>
                                                </Center>
                                            </Flex>
                                        </div>

                                        <center>
                                            <div className='mintImage' onClick={()=>{router.push(`/asset/${r._id}`)}} >
                                                <img style={{ height: "100%", objectFit: "contain" }} src={r.image ? `https://gateway.pinata.cloud/ipfs/${r.image}?_gl=1*1ybf4ge*rs_ga*MjRhODBjMTktNTNlYS00OTI3LTg4MmYtYzRjNjRhOWQ5Nzcy*rs_ga_5RMPXG14TE*MTY4Mzg3ODA5MS4xLjEuMTY4Mzg3ODE0OS4yLjAuMA` : "icon/Favicon.png"} alt="document" />
                                            </div>
                                            <div className='card_text'>
                                                {r.title}
                                            </div>
                                            <div className='card_type' style={{ alignItems: "center" }}>

                                                <div style={{ width: "50px", height: "50px" }}>
                                                    <img src={B} alt="grade" />
                                                </div>
                                                <button
                                                onClick={()=>{Router.push("/pantership")}}
                                                >
                                                    Upgrade
                                                </button>

                                            </div>

                                            <div style={{ marginTop: 15 }}>
                                                <hr />
                                            </div>
                                            <div className='asset_footer'>
                                                <div>
                                                    Expiration Time
                                                </div>
                                                <Moment format="YYYY/MM/DD">                                                    
                                               {new Date(JSON.parse(r.duration))}
                                                </Moment>
                                            </div>
                                        </center>
                                    </div>

                                </div>))}
                            </Flex>
                    }
                </div>
            </div>
        </div>
    )
}


export default Layout(Asset)
