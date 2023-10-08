import { Box, Container } from '@chakra-ui/react'
import React from 'react'

const Section = ({children, top}) => {
    return (
        <Container
            pt={{ base: "1rem", md: top }}
            px={{ base: "1rem", sm: "3rem", lg: "0" }}
            pb={{ base: "1rem", sm: "2rem", md: "3rem" }}
            id='about'
            align="center"
            alignItems={"center"}
        >
            <Box
                maxW={{ base: "fit-content", md: "100%" }}
                align="left"
            >
                {children}
            </Box>
        </Container>
    )
}

export default Section