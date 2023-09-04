import { Box, Center } from '@chakra-ui/react';
import React from 'react';

export default function Loading() {

    return (
        <Box w="100vw" h="100vh" position="fixed" bg="#fff" zIndex={6000} top="0px">
            <Center className='laodingScreen'>
            </Center>
            <Center className='image'>

                <img style={{ width: 200, height: 200 }} src="/logo192.png" alt="logo" />
            </Center>
        </Box>
    )
}
