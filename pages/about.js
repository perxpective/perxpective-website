import { Container, Box, Heading, Img, SimpleGrid, Icon, Text } from '@chakra-ui/react'
import React from 'react'

import { SiJavascript, SiPython, SiFlutter, SiReact, SiNextdotjs, SiAdobephotoshop, SiAdobepremierepro, SiAdobelightroom } from 'react-icons/Si'
import { FcLinux } from 'react-icons/Fc'

import Section from '../components/section'
import Transitions from '../components/transition'

export default function About() {
    return (
        <Container textAlign={"center"}>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1} >
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
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
            <Box display={{ xxl: 'flex' }} textAlign={"left"}>
                <Section>
                    <Heading as="h2" variant="section-title">
                        My Personal Story
                    </Heading>
                    <SimpleGrid minChildWidth="200px" spacing="10px">
                        <Box textAlign={"left"}>  
                            <ul>
                                <li>My interest in computing sparked when I attended a coding workshop organized by my school</li>
                                <br/>
                                <li>With my newfound passion, I chose to do Computing as an O-Level subject in my Sec 3 subject combination</li>
                                <br/>
                                <li>Applied to SP's Diploma in Infocomm Security Management (DISM) during EAE in 2020 and successfully got in!!!</li>
                            </ul>
                        </Box>
                        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
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
                        <ul>
                            <li>📸 Taking Photos </li>
                            <li>✈ Aviation </li>
                            <li>🎮 Playing Games (Nintendo Games, Minecraft and Tetris!) </li>
                            <li>🖥 Coding!</li>
                            <li>🚩Capture-The-Flags and Hacking!</li>
                        </ul>
                    </Box>
                </Section>
            </Box>

            <Box textAlign={"left"}>
                <Section>
                    <Heading as="h2" variant="section-title">
                        Skills
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
                            <Box bgGradient='linear(to-r, blue.300, blue.500)' p={3} borderRadius="lg" boxShadow={"2xl"}>
                                <Icon as={SiFlutter} boxSize={10} />
                                <p>Flutter</p>
                            </Box>
                            <Box bgGradient='linear(to-r, cyan.300, cyan.500)' p={3} borderRadius="lg" boxShadow={"2xl"}>
                                <Icon as={SiReact} boxSize={10} />
                                <p>React</p>
                            </Box>
                            <Box bg="gray.300" p={3} borderRadius="lg" boxShadow={"2xl"}>
                                <Icon as={SiNextdotjs} boxSize={10} />
                                <p>Next.js</p>
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

            <br/> 
            
            <Box textAlign={"left"}>
                <Section>
                    <Heading as="h2" variant="section-title">Education</Heading>
                    <Box boxSize={500} align="center">
                        <Img src="/images/coding.jpg" borderRadius={30} />
                        <br/>
                        <Box align="left">
                            <Text>In the future, I would like to pursue a university degree in Computer Science to broaden my skills in the IT industry and become a software engineer that specializes in cybersecurity</Text>
                            <Text>I also want devote my service to my home country using my expertise in cybersecurity by enlisting 3 years of service in the Digital Intelligence Service, the fourth branch of the SAF under the Cyber NSF Scheme </Text>
                        </Box>
                    </Box>
                </Section>
            </Box>
        </Container>
    )
}