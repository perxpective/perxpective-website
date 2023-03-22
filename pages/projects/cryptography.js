import {
    Container,
    Box,
    Heading,
    Img,
    Button,
    Link,
    Text,
    Badge,
} from '@chakra-ui/react'

import { ChevronLeftIcon, ExternalLinkIcon } from '@chakra-ui/icons'

import NextLink from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import Section from '../../components/section'
import Transitions from '../../components/transition'

export default function ACG() {
    return (
        <Container>
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
                    <Heading as="h2" variant="section-title">Applied Cryptography Project</Heading>
                    <Text>A Cryptography project that uses modern encryption protocols to safely secure and verify the transfer of images from CCTV cameras to servers to store the footages.</Text>
                    <Text>Some examples of the encryption protocols used are SHA-256 to generate digital signatures for verification, AES and RSA for the encryption and decryption of the image Base64 data and the use of PKI to generate and store public keys and private keys for the cameras and server respectively.</Text>
                    <Text>This was part of a second continuous assessment of Applied Cryptography, a module offered by SP DISM in Year 1 Semester 2.</Text>
                    <Text><Badge>LANGUAGE</Badge>&emsp;Python</Text>
                    <Text><Badge>YEAR</Badge>&emsp;2021</Text>
                    <Text>
                        <Badge>SOURCE CODE</Badge>&emsp;
                        <Link href="https://github.com/perxpective/ACG" isExternal>https://github.com/perxpective/ACG<ExternalLinkIcon /></Link>
                    </Text>
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