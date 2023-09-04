import React from 'react';
import Lottie from 'lottie-react';
import { Box, Center } from '@chakra-ui/react';
import document from '@/assets/dashboard/document.json';

export default function MintLoading() {
  
    return (
        <div>
            <Center>
                <Box w="50%">
                    <Lottie animationData={document} loop={true} />
                </Box>
            </Center>
            <Center>
                Your document is currently being minted....
            </Center>
        </div>
    )
}