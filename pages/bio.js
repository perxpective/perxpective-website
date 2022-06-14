import { Container, Box, Heading, Img, SimpleGrid, Icon, Text, UnorderedList, ListItem } from '@chakra-ui/react'
import React from 'react'

import { SiJavascript, SiPython, SiReact, SiAdobephotoshop, SiAdobepremierepro, SiAdobelightroom } from 'react-icons/Si'
import { FcLinux } from 'react-icons/Fc'

import Image from 'next/image'

import styles from '../styles/Home.module.css'

import Section from '../components/section'
import Transitions from '../components/transition'

export default function About() {
    return (
        <Container textAlign={"center"}>
            <Box display={{ lg: 'flex' }}>
                <Box flexGrow={1} >
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} align="center">
                        <Img borderRadius="full" borderColor="#72c275" borderWidth={2} objectFit="cover" borderStyle="Solid" boxSize={150} src="/images/profilepic.png" alt="profile-pic-of-robot" />
                    </Box>
                    <Transitions>
                        <Heading as="h1" variant="Page-Title">
                            Biography
                        </Heading>
                        <p>My story, passions, and future!</p>
                    </Transitions>
                </Box>
            </Box>
            <br/>
            <Box display={{ lg: 'flex' }} textAlign={"left"}>
                <Section>
                    <Heading as="h2" variant="section-title">
                        My Personal Story
                    </Heading>
                    <SimpleGrid minChildWidth="200px" spacing="10px">
                        <Box textAlign={"left"}>  
                            <UnorderedList>
                                <ListItem>My interest in computing sparked when I attended a coding workshop organized by my secondary school in Secondary 1</ListItem>
                                <br/>
                                <ListItem>With my newfound passion, I chose to do Computing as an O-Level subject in my Sec 3 subject combination</ListItem>
                                <br/>
                                <ListItem>Applied to SP's Diploma in Infocomm Security Management (DISM) during EAE in 2020 and successfully got in!!!</ListItem>
                            </UnorderedList>
                        </Box>
                        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ sm: 6 }} align="center">
                            <Img borderRadius={30} objectFit="cover" boxSize={350} src="/images/portrait.jpg" alt="siloutte of teenager" /> 
                        </Box>
                    </SimpleGrid>
                </Section>
            </Box>

            <br/>

            <Box textAlign={"left"}>
                <Section>
                    <Heading as="h2" variant="section-title">
                        My Hobbies and Interests
                    </Heading>
                    <Box>
                        <UnorderedList>
                            <ListItem>📸 Taking Photos</ListItem>
                            <ListItem>✈ Aviation</ListItem>
                            <ListItem>🎮 Playing Games (Nintendo Games, Minecraft and Tetris!)</ListItem>
                            <ListItem>🖥 Coding!</ListItem>
                            <ListItem>🚩Capture-The-Flags and Hacking!</ListItem>
                            <ListItem>🎵 Listening to music! (Favourite genres: J-pop, Hip Hop and R&B)</ListItem>
                        </UnorderedList>
                    </Box>
                </Section>
            </Box>

            <Box textAlign={"left"}>
                <Section>
                    <Heading as="h2" variant="section-title">
                        I have experience in the following areas:
                    </Heading>

                    <Box>
                        <SimpleGrid minChildWidth="130px" spacing={10}>
                            <Box bgGradient='linear(to-r, yellow.200, yellow.500)' p={3} borderRadius="lg" boxShadow={"2xl"}>
                                <Icon as={SiJavascript} boxSize={10}/>
                                <p>JavaScript</p>
                            </Box>
                            <Box bgGradient='linear(to-r, blue.400, yellow.200)' p={3} borderRadius="lg" boxShadow={"2xl"}>
                                <Icon as={SiPython} boxSize={10} />
                                <p>Python</p>
                            </Box>
                            <Box bgGradient='linear(to-r, cyan.300, cyan.500)' p={3} borderRadius="lg" boxShadow={"2xl"}>
                                <Icon as={SiReact} boxSize={10} />
                                <p>React</p>
                            </Box>
                            <Box bgGradient='linear(to-r, blue.200, blue.100)' p={3} borderRadius="lg" boxShadow={"2xl"}>
                                <Icon as={FcLinux} boxSize={10} />
                                <p>Linux Terminal</p>
                            </Box>
                            <Box bgGradient='linear(to-r, blue.500, green.200)' p={3} borderRadius="lg" boxShadow={"2xl"}>
                                <Icon as={SiAdobephotoshop} boxSize={10} />
                                <p>Adobe Photoshop</p>
                            </Box>
                            <Box bgGradient='linear(to-r, purple.400, pink.200)' p={3} borderRadius="lg" boxShadow={"2xl"}>
                                <Icon as={SiAdobepremierepro} boxSize={10} />
                                <p>Adobe Premier Pro</p>
                            </Box>
                            <Box bgGradient='linear(to-r, cyan.400, pink.100)' p={3} borderRadius="lg" boxShadow={"2xl"}>
                                <Icon as={SiAdobelightroom} boxSize={10} />
                                <p>Adobe Lightroom</p>
                            </Box>
                        </SimpleGrid>
                    </Box>
                </Section>

            </Box>
            <br />
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