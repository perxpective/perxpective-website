import {
    Container,
    Box,
    Heading,
    Img,
    SimpleGrid,
    Text,
    Button,
    Icon
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'
import { VscGithub } from 'react-icons/Vsc'

import NextLink from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Section from '../components/section'
import Transitions from '../components/transition'

export default function Projects() {
    return (
        <Container textAlign={"center"}>
            <Box display={{ lg: 'flex' }} textAlign={"center"}>
                <Box flexGrow={1} >
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} align="center">
                        <Img borderRadius="full" borderColor="#72c275" borderWidth={2} objectFit="cover" borderStyle="Solid" boxSize={150} src="/images/profilepic.png" alt="profile-pic-of-robot" />
                    </Box>
                    <Transitions>
                        <Heading as="h1" variant="Page-Title">
                            Projects
                        </Heading>
                        <p>Check some out projects I did in school and during my free time :)</p>
                    </Transitions>
                    <br />
                    <Box>
                        <Section>
                            <Box align={"center"} pt={5} pb={10}>
                                <Icon as={VscGithub} boxSize={50} />
                                <Text>For more projects, you can check out all of my repositories on my GitHub profile!</Text>
                                <br />
                                <a href={"https://github.com/perxpective"} target={"_blank"}>
                                    <Button colorScheme="green" rightIcon={<ChevronRightIcon />}>
                                        View my GitHub Profile!
                                    </Button>
                                </a>
                            </Box>
                            <SimpleGrid columns={{sm: 1, md: 2}} spacing={10}>
                                <NextLink href="/projects/wikipedia-bot">
                                    <Box>
                                        <Box p={3}>
                                            <Img borderRadius={20} src="/images/wikipedia-bot.png" objectFit="cover" w="100%" h={145} /> 
                                        </Box>  
                                        <Heading as="h2" variant="section-title">Discord Wikipedia Bot</Heading>
                                        <Text as="sub">A Discord bot that brings information to your servers!</Text>
                                    </Box>
                                </NextLink>
                                <NextLink href="/projects/cryptography">
                                    <Box>
                                        <Box p={3}>
                                            <Img borderRadius={20} src="/images/crypto.jpg" objectFit="cover" w="100%" h={145} />
                                        </Box>
                                        <Heading as="h2" variant="section-title">Cryptography Project</Heading>
                                        <Text as="sub">Project to secure the transfer of images from cameras to servers</Text>
                                    </Box>
                                </NextLink>
                                <NextLink href="/projects/quiz">
                                    <Box>
                                        <Box p={3}>
                                            <Img borderRadius={20} src="/images/quiz.jpg" objectFit="cover" w="100%" h={145} />
                                        </Box>
                                        <Heading as="h2" variant="section-title">Text-Based Quiz Application</Heading>
                                        <Text as="sub">A quiz application that allows admins to create, add, edit and delete questions, quizzes and modules for users around the world to take and gain new knowledge!</Text>
                                    </Box>
                                </NextLink>
                            </SimpleGrid>
                        </Section>
                    </Box>
                </Box>
            </Box>
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </Container>
    )
}