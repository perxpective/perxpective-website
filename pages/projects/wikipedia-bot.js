import {
    Container,
    Box,
    Heading,
    Img,
    Button,
    Link,
    Text,
    Badge,
    Icon
} from '@chakra-ui/react'

import { BsDiscord } from 'react-icons/bs'

import { ChevronLeftIcon, ExternalLinkIcon } from '@chakra-ui/icons'

import NextLink from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import Section from '../../components/section'
import Transitions from '../../components/transition'

export default function WikipediaBot() {
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
                </Box>
            </Box>
            <br />
            <Section>
                <Box textAlign={"left"}>
                    <NextLink href="/projects">
                        <Button colorScheme="green" leftIcon={<ChevronLeftIcon />}>
                            Return to Projects
                        </Button> 
                    </NextLink>
                </Box>
                <Box textAlign={"left"} p={10}>
                    <Icon as={BsDiscord} boxSize={20} />
                    <Heading as="h2" variant="section-title">Discord Wikipedia Bot</Heading>
                    <Text>A Discord bot designed to give you a dose of Wikipedia by extracting an article from the millions of community-written articles in the website.</Text>
                    <Text>This project was done to showcase my use of Python libraries as part of my portfolio in my Early Admission Exercise in 2020 into SP DISM.</Text>
                    <Text><Badge>LANGUAGE</Badge>&emsp;Python</Text>
                    <Text><Badge>YEAR</Badge>&emsp;2020</Text>
                    <Text>
                        <Badge>SOURCE CODE</Badge>&emsp;
                        <Link href="https://github.com/perxpective/Discord-Wikipedia-Bot" isExternal>https://github.com/perxpective/Discord-Wikipedia-Bot<ExternalLinkIcon /></Link>
                    </Text>
                </Box>
                <Box align={"center"}>
                    <Box p={1}><Img borderRadius={20} src="/images/wikipedia-bot.png" w={600} objectFit="cover" /> </Box>
                    <Box p={1}><Img borderRadius={20} src="/images/wikipedia-bot2.png" w={600} objectFit="cover" /> </Box>
                    <Box p={1}><Img borderRadius={20} src="/images/wikipedia-bot3.png" w={600} objectFit="cover" /> </Box>
                </Box>
            </Section>
            

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