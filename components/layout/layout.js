import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8} fontFamily={"Inter"}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" type="image/x-icon" href="/images/website_logo.png" />
                <title>Perspective</title>
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={100}>
                {children}
            </Container>
        </Box>
    )
}

export default Main