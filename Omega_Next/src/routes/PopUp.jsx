import { Box, Button, Center, Flex, Select, Text, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { postReward, updateMintVisible } from '@/services/user-services';
import { prepareWriteContract, writeContract, readContract } from '@wagmi/core';
import ABI from '@/components/mint/ABI';
import USD_ABI from '@/components/mint/USD_ABI';
import { parseEther } from 'ethers/lib/utils.js';
import { useSigner } from 'wagmi';
import { Web3 } from 'web3';
import axios from 'axios'
import WalletConnectProvider from '@walletconnect/web3-provider';
import { BUSD_Address, NFT_Address } from './token';
import { ethers } from 'ethers';

export default function PopUp({ setdisplayPopup, object, action, date }) {

    console

    const [disclaimer, setDisclaimer] = useState(false)
    const [visible, setVisibility] = useState(3)
    const [loading, setLoading] = useState(false)
    const [claim, setClaim] = useState(true)
    const [claimLoading, setClaimLoading] = useState(false)
    const [mintApproval, setMintApproval] = useState(false)
    const [reward, setReward] = useState(0)

    const toast = useToast();
    const { data: signer } = useSigner()
    const updateDocument = async (e, b) => {
        try {
            const data = await updateMintVisible(object, { visible: visible })
            toast({ position: "top-right", title: "visibility", description: 'Visibility changed', status: "success", isClosable: true });
        } catch {
            console.log("error")
        }
    }
    let nftWeb3
    let currentAddr
    let nftAddress = "0x99f55e6519Ea53B693f3E576B22AC71E871E9cdC";
    // let nftAddress = "0x3621C1f6497d145F7a9dBD5cFD7A060DA9522C55";
    let contractInstance
    let networkID
    const address2 = '0xd43c891a5B1c50FA995F1a3966700308280570d6';

    // const address2 = '0x24B558864F562E3e8c481069752b1626bdd4e01A';
    const privateKey = 'ce3838105f0decbee3a29da7c6a74922d78455425213079e27d10717dfedf9af';
    // const privateKey = '4f47078cf4228a6dd633b5beef038ae079fdc2f7b9a9246c45d778c7fda1418d';

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
                networkID = await nftWeb3.eth.net.getId()
            } catch (error) {
                console.error(error)
            }
        }

    }

    let amount


    async function ReadAmountReward() {
        const doc = object.id_document - 1
        const dat = await readContract({
            address: NFT_Address,
            abi: ABI,
            args: [doc],
            functionName: 'getTodayProfit',
        })
        setReward(JSON.parse(ethers.utils.formatEther(dat[0])))
        object.reward_amount = ethers.utils.formatEther(dat[0])

    }

    useEffect(() => {
        Connect()

        if (object && object.approved) {
            amount = object.reward_amount
            setClaim(!object.approved)
        }
    }, [[]])



    useEffect(() => {
        if(date == 1 && object.price1 == object.allowed){
            setMintApproval(true)
        } else if(object.price2 == object.allowed){
            setMintApproval(true)
        } else {
            setMintApproval(false)
        }
        if (object.id_document) {
            ReadAmountReward()
        }

    }, [])

    const updateApproval = async () => {
        object.approved = true
        const data = await updateMintVisible(object._id, { approved: true })

    }

    const updateReward = async () => {
        try {
            object.approved = false
            const data = await updateMintVisible(object._id, { approved: false, reward_amount: 0, claimed: object.reward_amount + object.claimed })

            object.reward_amount = 0
        } catch {
            console.log("error")
        }
    }

    async function rewardUserMoblie() {

        try {
            var walletConnectProviders = new WalletConnectProvider({
                rpc: {
                    97: 'https://data-seed-prebsc-2-s2.binance.org:8545' //https://data-seed-prebsc-1-s1.binance.org:8545 97 for testnet //mainnet https://bsc-dataseed.binance.org/ 56
                },
                chainId: 97,
                network: 'bnb test',
            });
            await walletConnectProviders.enable();

            let multisenderWeb3 = new Web3(walletConnectProviders);
            var accounts = await multisenderWeb3.eth.getAccounts();
            setLoading(true)
            contractInstance = await new multisenderWeb3.eth.Contract(ABI, nftAddress);

            const tx = await contractInstance.methods.computeUserReward(2, object.reward_amount * 1000000000000000000, 0)
            const gas = await tx.estimateGas({ from: address2 });
            const data = tx.encodeABI();
            const nonce = await multisenderWeb3.eth.getTransactionCount(address2);
            const signedTx = await multisenderWeb3.eth.accounts.signTransaction({
                to: nftAddress,
                data,
                gas,
                nonce,
                chainId: 97
            },
                privateKey
            );
            multisenderWeb3.eth.sendSignedTransaction(signedTx.rawTransaction, async function (error, hash) {

                if (!error) {
                    toast({ position: "top-right", title: "Approved", description: "Approved successful", status: "success", isClosable: true });

                } else {
                    console.log("!Something went wrong while submitting your transaction:", error);
                }
            })
            object.approved = true
            updateApproval()
            setClaim(false)

            setLoading(false)
        } catch (err) {

            toast({ position: "top-right", title: "Approval Error", description: err.message, status: "error", isClosable: true });

            console.log(err)
        }
    }

    async function rewardUser() {
        try {

            setLoading(true)
            Connect()
            const approvalData = await getUserApprove(object.id_document ? JSON.parse(object.id_document) - 1 : 0, JSON.stringify(object.reward_amount * 1000000000000000000), JSON.stringify(object.reward_amount * 1000000000000000000), nftWeb3)

            object.approved = true
            await updateApproval()

            toast({ position: "top-right", title: "Approval ", description: "Approved succesfully", status: "success", isClosable: true });

            setClaim(false)

            setLoading(false)
        } catch (err) {

            toast({ position: "top-right", title: "Approval Error", description: err.message, status: "error", isClosable: true });

            console.log(err)
            setLoading(false)
        }
    }

    const pk = "ce3838105f0decbee3a29da7c6a74922d78455425213079e27d10717dfedf9af"

    async function claimUser() {

        setClaimLoading(true)
        try {
            const config = await prepareWriteContract({
                address: NFT_Address,
                abi: ABI,
                args: [object.id_document ? JSON.parse(object.id_document) - 1 : 0],
                functionName: 'claimMatic',
                overrides: {
                    value: 0,
                    gasLimit: 700000
                }
            })

            const { hash } = await writeContract(config)
            toast({ position: "top-right", title: "Claim", description: "claim successful", status: "success", isClosable: true });
            await updateReward()

            setdisplayPopup({ state: false, action: "", success: false })

        }
        catch (ex) {
            console.log("Error: " + ex);
            toast({ position: "top-right", title: "Claim Error", description: ex.message, status: "error", isClosable: true });
        } setLoading(false)

    }

    async function ApprovalButton() {
        try {

            setLoading(true)
            const config = await prepareWriteContract({
                address: BUSD_Address,
                abi: USD_ABI,
                args: [NFT_Address, date == 1 ? JSON.stringify(object.price1 * 1000000000000000000) : JSON.stringify(object.price2 * 1000000000000000000)],
                functionName: 'approve',
                overrides: {
                    value: 0,
                    gasLimit: 700000
                }
            })

            const { hash } = await writeContract(config)
            toast({ position: "top-right", title: "Approved", description: "Approved successful", status: "success", isClosable: true });
            setMintApproval(true)
            setLoading(false)
        } catch (err) {
            toast({ position: "top-right", title: "Approved Error", description: err.message, status: "error", isClosable: true });

            setLoading(false)
        }
    }

    return (

        <Flex alignItems="center" justifyContent="center" position="absolute" zIndex={"2000"} bg="#0000006b" w="100%" h="100%">
            {!disclaimer && action === "mint" && <Box w="310px" p="30px" h="auto" bgImage="/mint.gif" borderRadius={"16px"}>
                <Box onClick={() => { setdisplayPopup({ state: false, action: "" }) }} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </Box>
                <Center fontWeight={"800"} fontSize="18px">Mint</Center>

                <Box>
                    <Box fontWeight={"800"}>Image requirements: </Box>
                    <Box fontSize="12px">Clear picture with all four corners showing.</Box>
                </Box>
                <Flex justifyContent={"space-between"} mt="20px" alignItems="center">
                    <Box>Mint fee x{date}yr</Box>
                    <Box>
                        {date == 1 ? `$ ${object.price1}` : `$ ${object.price2}`}
                    </Box>

                </Flex>
                <Flex justifyContent={"space-between"} mt="10px" alignItems="center">

                    <Box>Max earning</Box>
                    <Box>
                        {date == 1 ? `$ ${object.price1 * 3}.0` : `$ ${object.price2 * 3}.0`}
                    </Box>
                </Flex>
                <Flex justifyContent={"space-between"} mt="50px" alignItems={"center"}>
                    <Button colorScheme='yellow' isLoading={loading} color="#fff" isDisabled={mintApproval || loading} onClick={() => { ApprovalButton() }}>
                        Approve
                    </Button>
                    <Button colorScheme='green' isDisabled={!mintApproval} onClick={() => { setdisplayPopup({ state: false, action: "", success: true }) }}>
                        Mint
                    </Button>
                </Flex>
            </Box>}
            {action === "reward" && <Box w="310px" p="30px" h="auto" bgImage="/mint.gif" borderRadius={"16px"}>
                <Box onClick={() => { setdisplayPopup({ state: false, action: "" }) }} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </Box>
                <Center fontWeight={"800"} fontSize="18px">Claim Reward</Center>

                <Center fontWeight={"600"} fontSize="14px" mt="10px">Claim your reward for this document</Center>

                <Flex justifyContent={"space-between"} mt="8px" alignItems="center">
                    <Box>Reward Amount </Box>
                    <Box>
                        $ {parseFloat(reward)}
                    </Box>
                </Flex>
                <Flex justifyContent="space-between">

                    <Button
                        isLoading={claimLoading}
                        w="full"
                        isDisabled={!claim || JSON.parse(object.reward_amount) <= 0.0001 || object.approved}
                        mt="50px" colorScheme="green" color="#fff" onClick={() => { claimUser() }}>
                        Claim
                    </Button>
                </Flex>
            </Box>}

            {action === "visibility" && <Box w="310px" p="30px" h="auto" bgImage="/mint.gif" borderRadius={"16px"}>
                <Box onClick={() => { setdisplayPopup({ state: false, action: "" }) }} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </Box>
                <Center fontWeight={"800"} fontSize="18px">Visibility</Center>

                <Center fontWeight={"600"} fontSize="14px" mt="10px">setting your visibility help you to control who and who not to see your document</Center>
                <Center>
                    <Select mt="20px" onChange={(e) => { setVisibility(e.target.value) }}>
                        <option value="" >Select Visibility  </option>
                        <option value="1" >Friends Only </option>
                        <option value="2" >Private </option>
                        <option value="3" >Public </option>
                    </Select>

                </Center>
                <Center>
                    <Button mt="50px" colorScheme="green" color="#fff" onClick={() => { updateDocument(); setdisplayPopup({ state: false, action: "" }) }}>
                        Confirm
                    </Button>
                </Center>
            </Box>}
        </Flex>

    )
}
