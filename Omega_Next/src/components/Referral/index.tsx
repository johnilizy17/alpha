import { Box, Button, Flex, IconButton, Input, Text, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { readContract, writeContract, prepareWriteContract } from '@wagmi/core'
import ABI from '../mint/ABI';
import { ethers } from 'ethers';
import { parseEther } from 'ethers/lib/utils.js';
import { NFT_Address } from '@/routes/token';

export default function Referral() {

  const router = useRouter()
  const { address } = useAccount()
  const url = `regiz.io/dashboard?r=${address}`
  const toaster = useToast()
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)
  const [balance, setBalance] = useState("0")


  const copy = () => {
    setCopied(true)
    toaster({
      title: "copied successfully",
      position: "top-right",
      status: "success",
      isClosable: true,
    })
    navigator.clipboard.writeText(url)
  }


  async function ReadContractsInfo() {
    const data: any = await readContract({
      address: NFT_Address,
      abi: ABI,
      args: [address],
      functionName: 'getPartnerReward',
    })
    console.log(data, "amout")
    setBalance(data)
  }


  useEffect(() => {
    if (address) {
      ReadContractsInfo()
    }
  }, [])



  async function ClaimReward() {
    try {
      setLoading(true)
      const config = await prepareWriteContract({
        address: NFT_Address,
        abi: ABI,
        functionName: 'partnerClaimReward',
        overrides: {
          gasLimit: 700000
        }
      })

      const { hash } = await writeContract(config)
      await ReadContractsInfo()
      toaster({ position: "top-right", title: "Partner Reward", description: 'Reward successfully claimed', status: "success", isClosable: true });

      setLoading(false)
    } catch (err) {
      console.log(err, "error")
      setLoading(false)
    }
  }

  return (
    <>
      <Box>
        <Text fontWeight="extrabold" fontSize="18px">
          Share your referral link
        </Text>
        <Flex w="full" justifyContent="space-between" mt="10px">
          <Box>
            <Box>
              Available Reward: ${balance[0] === 0 ? 0 : ethers.utils.formatEther(balance[0])} 
            </Box>
            <Box mt="10px">
              Claimed Reward: ${balance[1] ? ethers.utils.formatEther(balance[1]) : 0} 
            </Box>
          </Box>
          <Button colorScheme="green"
            isLoading={loading}
            disabled={ethers.utils.formatEther(balance[0]) > 0 ? false : true}
            _disabled={{ bg: "red", w: 150, cursor: "not-allowed" }}
            onClick={() => {
              ClaimReward()
            }}>
            Claim
          </Button>
        </Flex>
        <Flex mt="30px" justifyContent="space-around" bg="#fff" borderRadius="19px" p="10px" alignItems="center">
          <Input value={url} _disabled={{ color: "#0097B2" }} borderColor="transparent" disabled={true} mr="30px" />
          <IconButton mr="10px"
            onClick={copy}
          >
            <svg width="30" height="30" fill="#0097B2" className="bi bi-clipboard2-check" viewBox="0 0 16 16">
              <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z" />
              <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z" />
              <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z" fill="green" style={!copied ? { opacity: 0, transition: "1s ease-in" } : { opacity: 1, transition: "1s ease-in" }} />
            </svg>
          </IconButton>
        </Flex>
      </Box>
    </>
  )
}
