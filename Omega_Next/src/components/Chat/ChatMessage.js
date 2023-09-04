import React, { useEffect, useState } from 'react';
import Message from './Message';
import { Box, Button, Center, Text } from '@chakra-ui/react';

import Lottie from "lottie-react";
import reward from '@/assets/dashboard/support.json';
import { getChat, postChat } from '@/services/user-services';
const profile = '/assets/images/car.png'

export default function ChatMessage({ walletTransition, id, setWalletTransition, display, setDisplay }) {

    const [deposit, setDeposit] = useState(false)
    const [transferState, setTransferState] = useState(false)

    const [message, setMessage] = useState([])
    const [value, setValue] = useState("")
    const [display2, setDisplay2] = useState(true)
    let state = []


    useEffect(() => {

        if (typeof window !== "undefined") {
            state = localStorage.getItem("chat")
        }

        if (typeof window !== "undefined") {

            if (state === "true") {
                setDisplay2(false)
            } else {
                setDisplay2(true)
            }
        }
    }, [state])

    async function GetMessages() {
        if(id){
        const data = await getChat(id)
        setMessage(data.data)
    }}
    useEffect(() => { 
        GetMessages()
    }, [id])


    async function SendingMessages(e) {
        await postChat({message:value, user_id:id})
        GetMessages()
        setValue("")
    }


    return (
        <>
            <div className="wallet_container" style={display ? {} : { display: "none" }}>

                {display2 ?
                    <Center textAlign={"center"} fontSize="18px" flexDirection={"column"}>

                        <Box w={["300px", "400px"]} mb="20px">
                            <Lottie animationData={reward} loop={true} />
                        </Box>
                        <Text color="#fff" mb="20px">
                            Only message when you have an important issue
                        </Text>
                        <Button colorScheme='green'
                            onClick={() => {
                                localStorage.setItem("chat", "true")
                                setDisplay2(false)
                            }}
                        >
                            Get Started
                        </Button>
                    </Center> :
                    <div className='wallet_transaction' style={walletTransition ? {} : { transform: "translateX(400px)" }}>
                        <div className='wallet_header'>
                            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                                setTimeout(() => setDisplay(false), 1000)
                                setWalletTransition(false)
                            }}>
                                <path d="M22.5 8L7.5 23" stroke="#ef621c" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 8L22.5 23" stroke="#ef621c" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div>
                                <div style={{ marginRight: "19px", fontWeight: 800, fontSize: "16.5px", lineHeight: "31px" }}>
                                Type to chat
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    online
                                </div>
                            </div>


                            <svg width="24" height="6" style={{ marginTop: 0 }} viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.8829 2.95948C22.8829 1.50114 21.7904 0.318923 20.4429 0.318923C19.0953 0.318923 18.0029 1.50114 18.0029 2.95948C18.0029 4.41782 19.0953 5.6001 20.4429 5.6001C21.7904 5.6001 22.8829 4.41782 22.8829 2.95948Z" fill="#ef621c" stroke="#ef621c" stroke-width="0.5" stroke-miterlimit="22.9256" />
                                <path d="M14.3815 2.95949C14.3815 1.50115 13.289 0.318933 11.9415 0.318933C10.5939 0.318933 9.50146 1.50115 9.50146 2.95949C9.50146 4.41783 10.5939 5.6001 11.9415 5.6001C13.289 5.6001 14.3815 4.41783 14.3815 2.95949Z" fill="#ef621c" stroke="#ef621c" stroke-width="0.5" stroke-miterlimit="22.9256" />
                                <path d="M5.88 2.95948C5.88 1.50114 4.78758 0.318928 3.44 0.318928C2.09242 0.318928 1 1.50114 1 2.95948C1 4.41783 2.09242 5.6001 3.44 5.6001C4.78758 5.6001 5.88 4.41783 5.88 2.95948Z" fill="#ef621c" stroke="#ef621c" stroke-width="0.5" stroke-miterlimit="22.9256" />
                            </svg>

                        </div>
                        <div className='Chat_message_container'>
                            <Message message={message} />
                        </div>
                        <div className='Chat_Input'>
                            <input value={value} type="text" placeholder="search or type" onChange={(e) => setValue(e.target.value)} />
                            <span style={{ marginTop: 10 }}
                            onClick={()=>SendingMessages()}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" className="bi bi-send-fill" viewBox="0 0 16 16">
                                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}