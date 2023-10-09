import { Box, Container } from '@chakra-ui/react'
import React from 'react'

const Section = ({children, top}) => {
    return (
        <Container
            pt={{ base: "3rem", md: top }}
            px={{ base: "1rem", sm: "4rem", lg: "0" }}
            pb={{ base: "1rem", sm: "2rem", md: "5rem" }}
            id='about'
            align="center"
            alignItems={"center"}
        >
            <Box
                maxW={"100%"}
                align="left"
            >
                {children}
            </Box>
        </Container>
    )
}

export default Section