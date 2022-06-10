import { Container, Box, Heading, Img } from '@chakra-ui/react'
import Section from '../components/section'
import Transitions from '../components/transition'

export default function About() {
    return (
        <Container textAlign={"center"}>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1} >
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                        <Img borderRadius="full" borderColor="#72c275" borderWidth={2} objectFit="cover" borderStyle="Solid" boxSize={150} src="https://i.imgur.com/F5bTWHz.png" alt="profile-pic-of-robot" />
                    </Box>
                    <Transitions>
                        <Heading as="h1" variant="Page-Title">
                            About Me!
                        </Heading>
                        <p>My story, passions, and future!</p>
                    </Transitions>
                </Box>
            </Box>
            <Box>
                <Section>
                    <Heading as="h2" variant="section-title">
                        My Personal Story
                    </Heading>
                </Section>
            </Box>
        </Container>
    )
}