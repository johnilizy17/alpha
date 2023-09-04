import { Box, Button, Center, Checkbox, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function PolicyState() {

    const [display, setDisplay] = useState(false)
    const [value, setValue] = useState(false)

    let state = []
    
    
    useEffect(() => {

        if( typeof window !== "undefined" ){
            state = localStorage.getItem("policy")
       
       }

        if( typeof window !== "undefined" ){
                console.log(state)
                         
        if (state === "true") {
            setDisplay(false)
        } else {
            setDisplay(true)
        }
    }
    }, [state])
    return (
        <Center position="fixed"
            display={display ? "flex" : "none"}
            zIndex="3000" top="0px" w="100vw" h="100vh" bg="#0000004d" p={["30px", "100px"]} >

            <Box className='bg' overflow="scroll" h="96vh">
                <Box fontSize="20px" fontWeight={"800"} className="booking__title">Privacy Policy and Terms of Use for Regiz Blockchain Documentation Technology
                </Box>

                <h1 style={{ "fontWeight": "700" }} className="booking__title">Privacy Policy</h1>
                <div>Regiz is committed to protecting the privacy and security of our users. This Privacy Policy outlines the information we collect,
                    how we use it, and the steps we take to protect your personal information.</div>


                <div>1.	Information We Collect: We do not collect personal data. We only require your email address to give you updates on offers, promotions, and services.
                    All data collected by our KYC partners is meant solely for KYC purposes. Regiz does not hold anyone's user data.</div>
                <div>2.	Extra Verification: In case of a change of name by the KYC company, extra verification might be required.</div>
                <div>3.	Storage: Documents are stored in a decentralized way, and we leverage blockchain for security.</div>
                <div>4.	Verification: All Grade B documents have a low level of genuinity because they have not been verified from the issuing organization.</div>

                <div><h4 style={{ "fontWeight": "700" }}>Terms of Use:</h4></div>
                <div>1.	Use of Service: By using our platform, you agree to these terms of use. If you do not agree with any part of these terms, please do not use our platform.</div>
                <div>2.	User Conduct: You are responsible for all activities that occur under your account. You agree not to use our platform for any illegal or unauthorized purpose.</div>
                <div>3.	Intellectual Property: Regiz owns all intellectual property rights in our platform, including our logo and trademarks.
                    You may not use any of our intellectual property without our prior written consent.</div>

                <div>4.	Limitation of Liability: Regiz is not liable for any damages or losses arising from the use of our platform.
                    We do not guarantee the accuracy or completeness of any information on our platform.</div>
                <div>5.	Indemnification: You agree to indemnify and hold Regiz and our affiliates, directors, officers, employees,
                    and agents harmless from any claims or damages arising from your use of our platform.</div>
                <div>6.	Changes to Terms of Use: We may update these terms of use from time to time. We will notify you of any material changes by email or by posting a notice on our website.</div>

                <div>7.	Contact Us: If you have any questions or concerns about these terms of use, please contact us at support@regiz.io
                    Last updated: 2023
                </div>
                <Center flexDir="column" p="30px">
                    <Flex alignContent="center" mb="20px">
                        <Checkbox
                            onChange={(e) =>{
                                console.log(e.target.checked)
                                setValue(e.target.checked)}}
                        />
                        <Text mb="5px" ml="5px">
                           Accept Regiz  terms and policy
                        </Text>
                    </Flex>
                    <Button isDisabled={!value} 
                        onClick={() => {
                            localStorage.setItem("policy", "true");
                            setDisplay(false)
                        }}
                        colorScheme="green" p="20px">
                        Submit
                    </Button>

                </Center>
            </Box>

        </Center>
    )
}