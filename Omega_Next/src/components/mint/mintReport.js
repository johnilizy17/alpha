import { useEffect, useState } from "react";
import MintLoading from "./MintLoading";
import MintSuccessful from "./MintSuccessful";
import { useToast } from "@chakra-ui/react";
import Router from "next/router";
import ABI from "./ABI";
import { prepareWriteContract, writeContract, waitForTransaction } from '@wagmi/core'
import { ethers } from "ethers";
const JWT = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI1NmFhNjk5Yy00ODRiLTQ2ODEtYmQ5ZS01MWY3MDVjNTNlMWUiLCJlbWFpbCI6ImpvaG5hYnJhaGFtdG9zaW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjFmMzZjYTMxYTM5YzEzYTkzYzgzIiwic2NvcGVkS2V5U2VjcmV0IjoiMjZiYTBjNjMxNjI2ZjFjYjhiZTExYzJiM2E5Yjc5ZWJjYzhiMDNlZmUxYmViNTZlZDY2YjIxOTFiYjA4ZTVkMiIsImlhdCI6MTY4MzI4ODU1OH0.1IHyw94S2oHsLB7Xk4_akVZubolzZaG-BgSMWuLJG_4`
import axios from "axios"
import { useAccount, useContractWrite, useWaitForTransaction } from "wagmi";
import { parseEther } from "ethers/lib/utils.js";
import { mintDocument } from "@/services/user-services";
import { readContract } from '@wagmi/core'
import { NFT_Address } from "../../routes/token";

export default function MintReport({ popup, value }) {

    const [successful, setSuccessful] = useState(false)
    const toast = useToast()
    const { address } = useAccount()
    const [used, setUsed] = useState(true)
    let userReferred = value.referredby

    const handleSubmission = async () => {

        const formData = new FormData();

        formData.append('file', value.images)

        const metadata = JSON.stringify({
            name: 'File name',
        });
        formData.append('pinataMetadata', metadata);

        const options = JSON.stringify({
            cidVersion: 0,
        })
        formData.append('pinataOptions', options);

        try {
            const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
                maxBodyLength: "Infinity",
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                    Authorization: JWT
                }
            });
            return res.data.IpfsHash
        } catch (error) {
        }
    };

    async function minting() {
        const today = Date.now()
        var ms = today + (1000 * 60 * 60 * 24 * 30 * 12 * JSON.parse(value.duration));
        const imageData = await handleSubmission()

        if (imageData) {
            const config = await prepareWriteContract({
                address: NFT_Address,
                abi: ABI,
                functionName: 'mintDocument',
                args: [[1, imageData, address, userReferred, 1, ms, today, false, 1], value.duration == 1 ? parseEther(value.price1) : parseEther(value.price2)],
                overrides: {
                    gasLimit: 700000
                },
            })
            const data = await writeContract(config)
            const docNumber = await readContract({
                address: NFT_Address,
                abi: ABI,
                functionName: 'getmintDoc',
            })

            const id_document = docNumber.length
            const rewarder = value.duration == 1 ? (value.price1 * 20) / 100 : (value.price2 * 20) / 100
            const hash = data.hash
           
            const hashing = await waitForTransaction({
                hash: hash,
            })
            console.log(hashing)
            const docu = await mintDocument({ wallet: address, hash: hash, pending: value.duration == 1 ? value.price1*3 : value.price2*3, referral: userReferred, amount: value.duration == 1 ? 15 : 25, duration: ms, visible: value.visible, id_document: id_document, image: imageData, title: value.title, rewarder: docNumber.length ? rewarder / docNumber.length : rewarder })
          
            Router.push("/asset");
             toast({ position: "top-right", title: "Mint Successful", description: 'Your mint is going through the blockchain', status: "success", isClosable: true });
     
        }
    }


    useEffect(() => {
        async function MintingOperation() {
            if (address) {
                setUsed(false)
                await minting()
            }
        }
        MintingOperation()
    }, [])

    return (
        <>
            <MintLoading />

        </>
    )
}
