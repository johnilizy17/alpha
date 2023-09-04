import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  Heading,
  Image,
  Progress,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import withAuth from "HOC/withAuth";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import {driversGetPoints} from "../../../services/driver-services"
function Verified() {
  const { user } = useSelector((state) => state.driver);
  

  const [points, setPoints] = useState(0)
  const [balance, setBalance] = useState(0)
  const [pointProgress, setPointProgress] = useState(0)
  console.log(user, "user")
  
  const getPoints = async()=>{
    const {data:{data}} = await driversGetPoints()
    console.log(data,"Points")
    setPoints(data?.point)
    setBalance(data?.money)
    const percent = Math.round((data?.money / 10000) * 100)
     console.log(percent)
    setPointProgress(percent)
  }

  const months = [
    "Jan", "Feb","Mar", "Apr", "May", "June","July",
    "Aug", "Sept","Oct", "Nov", "Dec"
  ]
   const date = new Date()

  useEffect(()=>{
    getPoints()
  },[])
  return (
    <Flex flex="1" h="full" flexDir="column">
      <Head>
        <title>Awefun - Dashboard</title>
        <meta property="og:title" content="Awefun - Dashboard" key="title" />
        <meta property="og:description" content="Awefun" key="description" />
      </Head>
      <Heading fontSize="xl" mb="4">
        <Flex align="center" >
          Hello, {user.first_name} <Image src="/icons/hands.png" ml="8px" w="16px" h="16px" />
        </Flex>
      </Heading>
      <Flex w="full" flex="1" flexDir="column">
        <Stack direction={["column", "column", "row"]} w="full">
          <Box p="4" bg="#22233F" rounded="md" color="white" w="full" flex="1">
            <Heading fontSize="xl" mb="4">
              Next Payout
            </Heading>
            <Wrap justify="space-between" mb="2">
              <WrapItem>
                <Text>{points}pts</Text>
              </WrapItem>
              <WrapItem>
                <Text>N{balance}/10000</Text>
              </WrapItem>
            </Wrap>
            <Progress value={pointProgress} colorScheme="pink" />
            <Text fontSize="sm" mt="4">
              Last updated: {moment(user.updated_at).format('LLLL')} 
            </Text>
          </Box>
          <Box
            w="full"
            maxW="sm"
            p="4"
            bgImage="/images/fancy-bg.jpg"
            bgPos="right"
            bgRepeat="no-repeat"
            bgSize="cover"
            rounded="md"
            color="white"
          >
            <Text>Balance</Text>
            <Heading fontSize="2xl" mt="4">
              N{balance}                                       
            </Heading>
            <Text fontSize="sm" mt="8">
              Payout date --- 25th {months[date.getMonth()]} to 31st {months[date.getMonth()]}
            </Text>
          </Box>
        </Stack>
        <Stack direction={["column", "column", "row"]} w="full" mt="4" flex="1">
          <Box bg="white" w="full" rounded="md" p="4">
            <Heading fontWeight="medium" fontSize="xl" mb="4">
              Recent Activity
            </Heading>
            <Center h="full">
              <Image src="/infographics/no-data.svg" maxW="96" w="full" />
            </Center>
          </Box>
          <VStack
            w="full"
            maxW="sm"
            flexDir="column"
            h="full"
            align="stretch"
            spacing="4"
          >
            <VStack p="4" bg="white" h="full" rounded="md" shadow="sm">
              <Heading fontSize="lg" w="full" fontWeight="normal">
                Profile
              </Heading>
              <Center h="full" flexDir="column">
                <Circle w="14" h="14" bg="gray.400" rounded="full"></Circle>
                <Box>
                  <Heading textAlign="center" fontWeight="normal" fontSize="lg">
                    {user?.first_name ?? "Firstname"}{" "}
                    {user?.last_name ?? "Lastname"}
                  </Heading>
                  <Text
                    textAlign="center"
                    fontWeight="normal"
                    color="gray.500"
                    fontStyle="italic"
                    fontSize="sm"
                  >
                  Joined since {moment(user.created_at).format('MMMM Do YYYY')} 
                  </Text>
                </Box>
              </Center>
              <Box p="2" bg="rgba(65,66,114,0.2)" rounded="md" w="full">
                <Text textAlign="center">Invite a friend</Text>
                <Heading textAlign="center" fontSize="md">
                  N0.00
                </Heading>
              </Box>
            </VStack>
            <Box
              bg="#0F45A9"
              rounded="md"
              p="4"
              color="white"
              position="relative"
            >
              <Box position="absolute" right="2" top="2">
                <Image
                  opacity="0.3"
                  src="/infographics/headphone-support-icon.svg"
                  maxW="96"
                  w="full"
                />
              </Box>
              <Box position="relative">
                <Heading fontSize="xl" mb="4">
                  Need Help?
                </Heading>
                <Text mb="2">Talk to a customer success representative</Text>
                <Button
                  bg="rgba(255,255,255,0.2)"
                  _hover={{ bg: "rgba(255,255,255,0.15)" }}
                  _active={{ bg: "rgba(255,255,255,0.1)" }}
                >
                  Tell Us What you need
                </Button>
              </Box>
            </Box>
          </VStack>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default Verified;
