import React, { useState } from 'react';
import Lottie from "lottie-react";
import Message from './Message';


const ChatLottie = "../assets/dashboard/chat.png";

export default function Chat({setChat, setChatDisplay}) {

   return (
        <>
            <div className='chat__container' onClick={()=>{
                setTimeout(()=>setChat(true), 500 )
                setChatDisplay(true)
                }}>
                <div style={{ width: 40, height: 40, color:"black" }}>
                    <img src={ChatLottie} />
                </div>
            </div>
        </>
    )
}