import { Container, Box, Heading, Img, SimpleGrid, Icon, Text } from '@chakra-ui/react'
import React from 'react'

import Section from '../components/section'
import Transitions from '../components/transition'

export default function Career() {
    return (
        <Container textAlign={"center"}>
            <Box display={{ md: 'flex' }} textAlign={"center"}>
                <Box flexGrow={1} >
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                        <Img borderRadius="full" borderColor="#72c275" borderWidth={2} objectFit="cover" borderStyle="Solid" boxSize={150} src="/images/profilepic.png" alt="profile-pic-of-robot" />
                    </Box>
                    <Transitions>
                        <Heading as="h1" variant="Page-Title">
                            Career
                        </Heading>
                        <p>View my career pathways; past, present and future</p>
                    </Transitions>
                </Box>
            </Box>
        </Container>
    )
}