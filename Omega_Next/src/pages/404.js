import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import Layout from '@/components/Layout/Layout';

 function ComingSoon() {

    const SoonImage = 'images/comingSoon.jpg';

    return (
        <section className='about_container'>
            <Box h="76vh">
                <Image h="100%" objectFit={"contain"} src={SoonImage} alt="soon image" />
            </Box>
        </section>
    )
}

export default Layout(ComingSoon)