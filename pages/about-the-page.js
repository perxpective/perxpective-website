import {
    Container,
    Box,
    Heading,
    Img,
    Text,
    Icon,
    Button
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'
import { SiYoutube } from 'react-icons/si'
import { MdQuestionAnswer } from 'react-icons/md'

import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Section from '../components/section'
import Transitions from '../components/transition'

export default function AboutPage() {
    return (
        <Container textAlign="center">
            <Box display={{ lg: 'flex' }} textAlign={"center"}>
                <Box flexGrow={1} pb={10}>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} align="center">
                        <Img borderRadius="full" borderColor="#72c275" borderWidth={2} objectFit="cover" borderStyle="Solid" boxSize={150} src="/images/profilepic.png" alt="profile-pic-of-robot" />
                    </Box>
                    <Transitions>
                        <Heading as="h1" variant="Page-Title">
                            About This Page
                        </Heading>
                        <p>Know more about how I developed with very website you are browsing right now!</p>
                    </Transitions>
                    <br />
                    <Box display={{ xxl: 'flex' }} textAlign={"center"}>
                        <Section>
                            <Icon as={MdQuestionAnswer} boxSize={100} />
                            <Heading as="h2" variant="section-title">How did I developed my portfolio website?</Heading>
                            <Text>I developed this website using mainly JavaScript with a little bit of HTML syntax required.</Text>
                            <br />
                            <Text>I am using a React Native framework called Next.js to develop the front-end with JavaScript</Text>
                            <br />
                            <Text>For the UI, I am using a library called Chakra UI to build this cool modern and simplistic interface! No CSS even needed!</Text>
                            <br />
                            <Text>I also used Framer Motion to create these extremely smooth transitions when you navigate the different pages on my website!</Text>
                            <br />
                            <Text>I deployed and hosted this website on Vercel.</Text>
                            <br />
                            <Heading as="h2" variant="section-title">Where did I get motivation or inspiration from to create my portfolio website?</Heading>
                            <br />
                            <Text>I had some experience coding HTML website from scratch from EAE and my Front-End Web Development module in Year 1 in Poly.</Text>
                            <br />
                            <Text>However, I wanted to properly develop a website that I can plug in my portfolio as a showcase of my web development skills.</Text>
                            <br />
                            <Text>Personally, I did not find coding everything in basic HTML and CSS from scratch useful for creating my official portfolio website, so I looked into other methods like React!</Text>
                            <br />
                            <Text>I feel that it is a very versatile library that can also be used to develop apps, so I felt that practising coding with React will also allow me to understand better how to develop apps, which will be a skill I will have to eventually learn when I enter the IT industry!</Text>
                            <br />
                            <Text>This website is also heavily inspired by one of my favourite programming YouTubers called "Dev As Life" or Takuya Matsuyama, a Japanese indie software developer. I was inspired by one of his tutorial videos on how to code a website using a React framework, that I wanted to create it as well!</Text>
                            <br />
                            <Text>I would definitely encourage you to check out his YouTube channel! He makes amazing quality and chill programming videos on his channel!!!</Text>
                            <br />
                            <a href="https://www.youtube.com/c/devaslife" rel="noopener noreferrer">
                                <Button rightIcon={<ChevronRightIcon />} leftIcon={<SiYoutube />} colorScheme={"red"}>
                                    devaslife
                                </Button>
                            </a>
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