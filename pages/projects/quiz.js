import {
    Container,
    Box,
    Heading,
    Img,
    Button,
    Link,
    Text,
    Badge,
    Icon,
    UnorderedList,
    ListItem
} from '@chakra-ui/react'

import { ChevronLeftIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { MdQuiz } from 'react-icons/md'
import NextLink from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import Section from '../../components/section'
import Transitions from '../../components/transition'

export default function Quiz() {
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
                    <Icon as={MdQuiz} boxSize={20} />
                    <Heading as="h2" variant="section-title">Text-Based Quiz Application</Heading>
                    <Text>A Python mini-project to develop a text-based quiz application that allows quiz administrators to create, add, edit and delete modules, quizzes and the question pool of the application. They also have the power to view the users logged into the application, as well as view the management report and performance review of all the users for every quiz stored in the application.</Text>
                    <br />
                    <Text as="u">Features of the application:</Text>
                    <UnorderedList>
                        <ListItem>Implementation of socket programming to create client-server structure so that administrators can remotely access the quiz database, while users can also remotely log into the application to create the quiz set by the administrators.</ListItem>
                        <br />
                        <ListItem>Management report and performance review of users for the quizzes can be exported into CSV formats that can be viewed in a spreadsheet (Excel, Google Sheets)</ListItem>
                        <br />
                        <ListItem>User-friendly terminal style GUI</ListItem>
                        <br />
                        <ListItem>ASCII art titles for each section of application!</ListItem>
                        <br />
                        <ListItem>Ability to customize quiz settings like time limit and randomizer!</ListItem>
                        <br />
                    </UnorderedList>
                    <Text>This project was part of my CA2 for the module Programming in Security offered by SP DISM in Year 1 Semester 2.</Text>
                    <Text><Badge>LANGUAGE</Badge>&emsp;Python</Text>
                    <Text><Badge>YEAR</Badge>&emsp;2021</Text>
                    <Text>
                        <Badge>SOURCE CODE</Badge>&emsp;
                        <Link href="https://github.com/perxpective/PSEC" isExternal>https://github.com/perxpective/PSEC <ExternalLinkIcon /></Link>
                    </Text>
                </Box>
                <Box align={"center"}>
                    <Box p={1}><Img borderRadius={20} src="/images/quiz.jpg" w={600} objectFit="cover" /> </Box>
                    <Box p={1}><Img borderRadius={20} src="/images/quiz2.jpg" w={600} objectFit="cover" /> </Box>
                    <Box p={1}><Img borderRadius={20} src="/images/quiz3.jpg" w={600} objectFit="cover" /> </Box>
                    <Box p={1}><Img borderRadius={20} src="/images/quiz4.jpg" w={600} objectFit="cover" /> </Box>
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