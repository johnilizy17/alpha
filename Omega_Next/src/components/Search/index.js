import { getSearchDocument } from '@/services/user-services';
import { Box, Center, IconButton, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import document from '@/assets/no_document.json'
import search from '@/assets/dashboard/search.json'
import Link from 'next/link';
const B = 'assets/images/grade_B.png';

export default function Search({ setDisplay }) {

    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(true)
    const [value, setValue] = useState("")
    const [ClickButton, setClickedButton] = useState(true)

    async function SearchDocumentTitle() {
        if(value.length > 2){
       
        setClickedButton(false)
        setLoading(true)
         const searchInfo = value.replace("rdt-", "")
        const data = await getSearchDocument(searchInfo)
        setResult(data.data)
        console.log(data)
        setLoading(false)
    }}


    return (
        <div className='search__container'>
            <div className="search__box_input">
                <input type="text"
                    onChange={(e) => { setValue(e.target.value) }}
                    placeholder="Document ID/ Doctag" autoFocus />
                <IconButton onClick={() => { SearchDocumentTitle() }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </IconButton>
            </div>
            <div className='search_svg'>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { setDisplay(false) }} width="30" height="30" fill="#fff" className="bi bi-x-octagon-fill" viewBox="0 0 16 16">
                    <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                </svg>
            </div>
            {ClickButton ?
                <Center display="flex" className="search__result" justifyContent="center" alignItem="center" w={["full", "80vw"]} h="full" mt="40px">
                    <Box w={["300px", "400px"]}>
                        <Lottie animationData={search} loop={true} />
                    </Box>
                </Center>
                :
                loading ?
                    <Center h="full" w="full" mt="8">
                        <Spinner color="red" size="xl" />
                    </Center>
                    : result.length == 0 ?
                        <Center display="flex" className="search__result" justifyContent="center" alignItem="center" w={["full", "80vw"]} h="full" mt="40px">
                            <Box w={["300px", "400px"]}>
                                <Lottie animationData={document} loop={true} />
                            </Box>
                        </Center> :
                        <div className='search__result'>
                            {result.map((data, id) => (
                                <Link href={`search/${data._id}`}>

                                    <div className='search__result__display' key={id} style={{ position: "relative" }}>
                                        <Box w="100px" h="100px"><img style={{ height: "100%", objectFit: "contain" }} src={data.image ? `https://gateway.pinata.cloud/ipfs/${data.image}?_gl=1*1ybf4ge*rs_ga*MjRhODBjMTktNTNlYS00OTI3LTg4MmYtYzRjNjRhOWQ5Nzcy*rs_ga_5RMPXG14TE*MTY4Mzg3ODA5MS4xLjEuMTY4Mzg3ODE0OS4yLjAuMA` : "icon/Favicon.png"} /></Box>
                                        <Box>{data.title}</Box>
                                        <Box position="absolute" bottom="10px" w="40px" right="10px" >
                                            <img src={B} alt="grade" />

                                        </Box>
                                    </div>
                                </Link>
                            ))}
                        </div>
            }
        </div>
    )
} 