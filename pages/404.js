import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
    Box,
    Heading, 
    Container,
    Divider,
    Button,
    Text,
    Img
} from '@chakra-ui/react'

import Section from '../components/section'
import Transitions from '../components/transition'

export default function Error() {
    return (
        <Container align="center">
            <Box display={{ md: 'flex' }} textAlign={"center"}>
                <Box flexGrow={1} >
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} align="center">
                        <Img borderRadius="full" borderColor="#72c275" borderWidth={2} objectFit="cover" borderStyle="Solid" boxSize={150} src="/images/profilepic.png" alt="profile-pic-of-robot" />
                    </Box>
                    <Transitions>
                        <Heading as="h1" variant="Page-Title">
                            ERROR 404 NOT FOUND
                        </Heading>
                        <p>GG Nice Try Well Played!</p>
                    </Transitions>
                </Box>
            </Box>
            <br/>
            <Section>
                <Box align="center">
                    <Img src="/images/bummer-three-robots.gif" borderRadius={30} />
                    <Text>From the Netflix series Love Death + Robots (Three Robots Episode)</Text>
                </Box>
                <Box>
                    <NextLink href={"/"}>
                        <Button colorScheme="green" rightIcon={<ChevronRightIcon />}>Go Back Home</Button>
                    </NextLink>
                </Box>
            </Section>
        </Container>
    )
}