import { getUserInformation } from "@/services/user-services";
import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  Spacer,
  Wrap,
  WrapItem,
  CircularProgress,
  CircularProgressLabel,
  Collapse,
  useToast,
  Spinner
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Steps from "./steps";
import Verifing from "./Verifing";
// import { adminGetDriverpercentage } from "services/driver-services";

function NotVerified() {
  // const { user } = useSelector((state) => state.driver);
  const [loading, setLoading] = useState(true)
  const [DashSlides, setDashSlides] = useState(1)
  const [show, setShow] = useState(false)
  const [verifing, setVerifing] = useState(false)
  const { address } = useAccount()
  const [image, setImage] = useState()

  const [percentage, setPercentage] = useState(0)
  const toast = useToast();
  const [Datas, setDatas] = useState([])

  const GetData = async () => {
    setLoading(true)
    const userData = await getUserInformation(address)
    if (userData.data) {
      if (userData.data.id_number.length < 1) {
        setDatas([{
          image: "/images/verification.png",
          content: "Verification (Submit ID)",
          state: true
        }]);

        setPercentage(60);
        setVerifing(true)
        setLoading(false)
      } else {
        setPercentage(80);
        setVerifing(true)
        setLoading(false)
        if (userData.data.profileImage && userData.data.profileImage.length > 1) {

          setPercentage(100);
          setVerifing(true)
          setLoading(false)
          setImage(userData.data.profileImage)
        }
      }

    } else {

      setDatas([
        {
          image: "/images/profile.png",
          content: "Complete your profile",
          state: true
        },
        {
          image: "/images/verification.png",
          content: "Verification (Submit ID)",
          state: true
        },
        {
          image: "/images/wallet.png",
          content: "Set up User tag",
          state: false
        }
      ]);
      setPercentage(0);
      setLoading(false)

    }
  };


  useEffect(() => {
    GetData()
  }, [])



  return (
    <>
      <Collapse in={!show} animateOpacity>
        <Flex flex="1" h="full" flexDir="column">
          <Heading fontSize="xl" mb="4"></Heading>
          <Flex w="full" flex="1" flexDir="column">
            <Flex align="center" h={{ base: "142px", sm: "176px" }}>
              <Center w="full">
                <Box
                  bg="#0097b2"
                  rounded="md"
                  color="white"
                  w="full"
                  pl={{ base: "16px", md: "46px" }}
                  pr={{ base: "16px", md: "46px" }}
                  flex="1"
                  justify="center"
                >
                  <Wrap justify="space-between" align="center" mb="2">
                    <WrapItem>
                      <Box mt="3">
                        <Heading fontSize="xl" mb="4">
                          <Flex align="center">
                            Hello
                          </Flex>
                        </Heading>
                        <Text
                          w={{ base: "160px", md: "333px" }}
                          fontSize={{ base: "12px", md: "16px" }}
                        >
                          Finish setting up your profile to start earning
                        </Text>
                      </Box>
                    </WrapItem>
                    <WrapItem>
                      {
                        <CircularProgress
                          mt="3"
                          value={percentage}
                          trackColor="#8C9CD7"
                          color="#FF4268"
                          size={{ base: "92px", md: "120px" }}
                          fontSize="5xl"
                        >
                          <CircularProgressLabel>
                            {percentage}%
                            <Text>{percentage === 100 ? "Completed" : "Completing"}</Text>
                          </CircularProgressLabel>
                        </CircularProgress>}
                    </WrapItem>
                  </Wrap>
                </Box>
              </Center>
            </Flex>
            <Box mt="27px">
              <Text fontWeight="bold" fontSize="24px" color="#16224C">
                To-do
              </Text>
              <Text fontSize="14px">
                Complete these to start earning.
              </Text>
            </Box>
            <Box mt={{ base: "7px", md: "27px" }}>
              <Flex align="center">
                <Flex
                  h={{ base: "53px", md: "70px" }}
                  w={{ base: "87px", md: "87px" }}
                  color="#fff"
                  bg="#FF4268"
                  rounded="md"
                  justify="center"
                  direction="column"
                  fontSize="13px"
                >
                  <Center>
                    <Text>Profile</Text>
                  </Center>
                </Flex>
                <svg
                  width="61"
                  height="2"
                  viewBox="0 0 61 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.518555"
                    y1="0.981367"
                    x2="60.7655"
                    y2="0.981367"
                    stroke="#797380"
                    stroke-width="0.753086"
                  />
                </svg>

                <Flex
                  h={{ base: "53px", md: "70px" }}
                  w={{ base: "136px", md: "170px" }}
                  color={!percentage > 20 ? "#414272" : "#fff"}
                  bg={!percentage > 20 ? "#fff" : "#FF4268"}
                  rounded="md"
                  justify="center"
                  direction="column"
                  fontSize="13px"
                >
                  <Center>
                    <Text>Mint/Purchase</Text>
                  </Center>
                </Flex>
              </Flex>


              <Collapse in={!verifing} animateOpacity>
                <Box
                  mt="23px"

                  fontSize={{ base: "12px", md: "18px" }}
                  w={{ base: "300px", sm: "600px" }}
                  fontWeight="400"
                >
                  Set-up personal information, submit ID and Payment information.
                </Box>
                {loading ?
                  <Center h="200px" w="full" bg="#fff" mt="8">
                    <Spinner color="red" size="lg" />
                  </Center>
                  :
                  <Box
                    h={percentage === 60? {}:{ base: "187px", sm: "240px" }}
                    mt={{ base: "7px", sm: "15px" }}
                    className="background2 CharkaColor"
                    rounded="md"
                  >
                    {Datas.map((data, id) => (
                      <Box
                        _after={{
                          bg: "red",
                          opacity: 0,
                          transition: "all 0.8s"
                        }}
                        pl={{ base: "18.86px", sm: "27px" }}
                        _active={{
                          bg: "red",
                          opacity: 0,
                          transition: "all 0.8s"
                        }}
                        onClick={() => {
                          setTimeout(() => {
                            setDashSlides(id)
                            setShow(true)
                          }, 1000)
                        }}
                      >
                        <Flex
                          h={{ base: "67px", sm: "79px" }}
                          pr={{ base: "21.75px", sm: "26.95px" }}
                          flex="1"
                          cursor="pointer"
                          borderBottom={data.state && "1px solid #E6E6E6"}
                          _after={{
                            borderBottom: "none"
                          }}
                          _active={{
                            borderBottom: "none"
                          }}
                          key={id}
                        >
                          <Center>
                            <Image src={data.image} alt="profile images" />
                          </Center>
                          <Center ml={{ base: "9.76px", sm: "14.62px" }}>
                            <Text fontWeight="400" fontSize="12px" lineHeight="16px">
                              {data.content}
                            </Text>
                          </Center>
                          <Spacer />
                          <Center>
                            <svg
                              width="8"
                              height="13"
                              viewBox="0 0 8 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.18652 1.35291L6.07757 6.24395L1.18652 11.135"
                                stroke="#757D81"
                                stroke-width="2.10725"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </Center>
                        </Flex>
                      </Box>
                    ))}
                  </Box>
                }</Collapse>
              <Collapse in={verifing} animateOpacity>
                <Verifing imageUrl={image} />
              </Collapse>
            </Box>
          </Flex>
        </Flex>
      </Collapse>
      {<Collapse in={show} animateOpacity>
        <Steps percentage={percentage} setPercentage={setPercentage} stepState={DashSlides} setSave={setShow} verifing={setVerifing} setDashSlides={setDashSlides} setLoading={setLoading} />
      </Collapse>}
    </>
  );
}

export default NotVerified;
