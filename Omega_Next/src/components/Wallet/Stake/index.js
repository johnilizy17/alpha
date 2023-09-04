import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Center, Heading, Box, Button } from '@chakra-ui/react';
import CustomInput from '../../Form/CustomInput';
import { Form, Formik } from 'formik';
import Lottie from 'lottie-react';
import * as Yup from "yup";
import vault from '@/assets/dashboard/vault.json'

export default function Stake({setStaking, setToggle}) {

    const initiateProfile2 = async (values, { setSubmitting, resetForm }) => {

    };


    const currentStateStep3 = {
        amount: "",
    }


    const validationSchema3 = Yup.object({
        amount: Yup.string().required("amount is required"),
    });

    return (
        <Tabs paddingTop="1em" isFitted variant='enclosed' colorScheme='whiteAlpha'>
            <svg
             onClick={() =>{ setToggle(false)
                setStaking(false)
                }}
            style={{marginLeft:5}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-backspace-fill" viewBox="0 0 16 16">
                <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z" />
            </svg>
            <TabList mb='1em' mt="1em" >
                <Tab > Staking</Tab>
                <Tab> History</Tab>
                <Tab>Vault</Tab>
            </TabList>
            <TabPanels>
                <TabPanel color="#fff" overflowY={"scroll"} h="100%">
                    <Center><Heading mb="20px">Staking</Heading></Center>
                    <p>staking is similar to depositing cash in a high-yield savings account. Banks lend out your deposits, and you earn interest on your account balance. </p>
                    <Formik
                        initialValues={currentStateStep3}
                        onSubmit={initiateProfile2}
                        validationSchema={validationSchema3}

                    >
                        {({ isSubmitting, handleChange, handleBlur, values }) => (
                            <Form>
                                <Box textAlign={"end"} mt={{ base: "38px", md: "44px" }}> Balance: 5.04rgz</Box>
                                <Box w="full" mt="10px" color="#000">
                                    <CustomInput
                                        label="Amount"
                                        name="amount"
                                        fieldProps={{ type: "number" }}
                                        color="#000"
                                    />
                                </Box>
                                <Center mt="20px">
                                    <Button
                                        w={{ base: "169px", md: "210px" }}
                                        color="#FF4268"
                                        textTransform="capitalize"
                                        fontWeight="400"
                                        fontSize={{ base: "12px", md: "18px" }}
                                        colorScheme="teal"
                                        variant="outline"
                                        _after={{
                                            bg: "red",
                                            opacity: 0,
                                            transition: "all 0.8s"
                                        }}
                                        _active={{
                                            bg: "red",
                                            opacity: 0,
                                            transition: "all 0.8s"
                                        }}
                                    >
                                        Stake
                                    </Button>
                                </Center>
                            </Form>

                        )}
                    </Formik>
                </TabPanel>
                <TabPanel overflow={"scroll"} h="70vh"  >
                    <table className="table">
                        <caption style={{ marginBottom: 10 }}>Staking History</caption>
                        <thead >
                            <tr>
                                <th scope="col">S/N</th>
                                <th scope="col">Amount staked </th>
                                <th scope="col">Total pending</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td scope="row" data-label="S/N">1</td>
                                <td data-label="Rewards">stalked token</td>
                                <td data-label="Compound">$21</td>
                            </tr>
                            <tr>
                                <td scope="row" data-label="S/N">1</td>
                                <td data-label="Rewards">stalked token</td>
                                <td data-label="Compound">$21</td>
                            </tr>


                        </tbody>
                    </table>

                </TabPanel>
                <TabPanel>
                    <Center justifyContent={"space-between"} color="#fff">
                        <Box fontSize="18px" fontWeight={"700"}>Amount Staked in the Vault</Box>
                        <Box fontSize={12}>  5.0rgz</Box></Center>
                    <Lottie animationData={vault} loop={true} />
                    <Formik
                        initialValues={currentStateStep3}
                        onSubmit={initiateProfile2}
                        validationSchema={validationSchema3}

                    >
                        {({ isSubmitting, handleChange, handleBlur, values }) => (
                            <Form>
                                <Box textAlign={"end"}> Unstake</Box>
                                <Box w="full" mt="10px" color="#000">
                                    <CustomInput
                                        label="Amount"
                                        name="amount"
                                        fieldProps={{ type: "number" }}
                                        color="#000"
                                    />
                                </Box>
                                <Center mt="20px">
                                    <Button
                                        w={{ base: "169px", md: "210px" }}
                                        color="#FF4268"
                                        textTransform="capitalize"
                                        fontWeight="400"
                                        fontSize={{ base: "12px", md: "18px" }}
                                        colorScheme="teal"
                                        variant="outline"
                                        _after={{
                                            bg: "red",
                                            opacity: 0,
                                            transition: "all 0.8s"
                                        }}
                                        _active={{
                                            bg: "red",
                                            opacity: 0,
                                            transition: "all 0.8s"
                                        }}
                                    >
                                        UnStake
                                    </Button>
                                </Center>
                            </Form>

                        )}
                    </Formik>


                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}