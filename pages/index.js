// Import Chakra components
import { 
  Container, 
  Box, 
  Heading, 
  Img, 
  Button, 
  Icon, 
  Link,
  Divider
} from '@chakra-ui/react'

// Import from Next.js
import Image from 'next/image'
import NextLink from 'next/link'

// Icons
import { FcInfo, FcIdea, FcShare } from 'react-icons/Fc'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { RiCodeBoxFill } from 'react-icons/Ri'
import { BsDiscord, BsInstagram, BsMailbox2 } from 'react-icons/Bs'
import { VscGithub } from 'react-icons/Vsc'

import styles from '../styles/Home.module.css'

import Section from '../components/section'
import Transitions from '../components/transition'

export default function Home() {
  return (
    <Container align={"center"}>
      <Box display={{ xl: 'flex' }} align="center">
        <Box flexGrow={1}>
          <Box flexShrink={0} mt={{base:4, md:0}} ml={{md:6}} align="center">
            <Img borderRadius="full" borderColor="#72c275" borderWidth={2} objectFit="cover" borderStyle="Solid" boxSize={150} src="/images/profilepic.png" alt="profile-pic-of-robot"/>
          </Box>
          <Transitions>
            <Heading as="h1" variant="Page-Title">
              Perspective
            </Heading>
            <p>A portfolio website developed using <code>Next.js</code> and Chakra UI</p>
          </Transitions>
        </Box>
      </Box>

      <Divider/>

      <Box display={{xl:'flex'}}>
        <Section>
          <Heading as="h2" variant="section-title">
            Hello there!
          </Heading>
          <p>My name is Ervin and I am an aspiring programmer with a passion for cybersecurity and all things tech!</p>
          <p>I love coding and I am consistently upgrading my skills in programming and happening in my own free time such as making good use of my free time developing this very website you see here!</p>
          <p>My main principle in life is to treat everyone with respect no matter what their backgrounds are and I try my best to lend a helping hand or a listening ear to those who need it.</p>
          <p>I love being a leader who takes responsibility and initiative and guides others to becoming a better person in life &#9829; </p>
        </Section>
      </Box>

      <Divider />

      <Box display={{ xl:'flex'}} align="center">
        <Section>
          <Heading as="h1" size="lg">
            <Icon as={FcInfo} boxSize={20} />
          </Heading>
          <Heading as="h1" variant="section-title">
            Learn more about me!
          </Heading>
          <p>Find out more about my story, my passion and interests and hopes for the future!</p>
          
          <Box align="center" my={4}>
            <NextLink href="/about">
              <Button colorScheme="green" rightIcon={<ChevronRightIcon/>}>
                Go to About
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Box>

      <Divider />

      <Box display={{ xl:'flex' }} align="center">
        <Section>
          <Heading as="h1" size="lg">
            <Icon as={FcIdea} boxSize={20} />
          </Heading>
          <Heading as="h1" variant="section-title">
            View my career!
          </Heading>
          <p>Know more about my aspirations for the future and my past experiences of my career!</p>

          <Box align="center" my={4}>
            <NextLink href="/about">
              <Button colorScheme="green" rightIcon={<ChevronRightIcon/>}>
                View Career
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Box>

      <Divider />

      <Box display={{ xl: 'flex' }} align="center">
        <Section>
          <Heading as="h1" size="lg">
            <Icon as={RiCodeBoxFill} boxSize={20} />
          </Heading>
          <Heading as="h1" variant="section-title">
            View my Projects!
          </Heading>
          <p>Take a look at some of my projects that I have done in school, as well as in my own free time!</p>

          <Box align="center" my={4}>
            <NextLink href="/about">
              <Button colorScheme="green" rightIcon={<ChevronRightIcon />}>
                View my Projects
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Box>

      <Divider />

      <Box display={{ xxl: 'flex' }} align="center">
        <Section>
          <Heading as="h1" size="lg">
            <Icon as={FcShare} boxSize={20} />
          </Heading>
          <Heading as="h1" variant="section-title">
            Find me on Social Media!
          </Heading>
          <p>Keep in touch with me across other social media platforms!</p>
          <br/>
          <a href="https://instagram.com/perxpective.jpeg" target="__blank">
            <Box bgGradient='linear(to-r, #a733ff, #ffb83d)' boxShadow={"md"} borderRadius={"lg"} maxW={300}>
              <br/>
              <Icon as={BsInstagram} boxSize={30} />
              <p><strong>@perxpective.jpeg</strong></p>
            </Box>
          </a>
          <br/>
          <a href="https://discord.com" target="__blank">
            <Box bgGradient='linear(to-r, #599ad4, #c7e4ff)' boxShadow={"md"} borderRadius={"lg"} maxW={300}>
              <br/>
              <Icon as={BsDiscord} boxSize={30} />
              <p><strong>perspective #9963</strong></p>
            </Box>
          </a>
          <br/>
          <a href="mailto:ervinleequanjun@outlook.com" target="__blank">
            <Box bgGradient='linear(to-r, #2fa2c4, #b8e7ff)' boxShadow={"md"} borderRadius={"lg"} maxW={300}>
              <br />
              <Icon as={EmailIcon} boxSize={30} />
              <p><strong>Email</strong></p>
            </Box>
          </a>
          <br />
          <a href="https://github.com/perxpective" target="__blank">
            <Box bgGradient='linear(to-r, #a1a1a1, #e3e3e3)' boxShadow={"md"} borderRadius={"lg"} maxW={300}>
              <br/>
              <Icon as={VscGithub} boxSize={30} />
              <p><strong>perxpective</strong></p>
            </Box>
          </a>
        </Section>
      </Box>

      <Divider />
      <br/>
      <Box display={{ xl: 'flex' }} align="center">
        <Section>
          <Heading as="h1" size="lg">
            <Icon as={VscGithub} boxSize={20} />
          </Heading>
          <Heading as="h1" variant="section-title">
            View the Source Code
          </Heading>
          <p>Want to see how I managed to code this amazing website? Find my repository by clicking below!</p>
          <Box align="center" my={4}>
            <Link href="https://github.com/perxpective/perspective" target={"_blank"} isExternal>
              <Button colorScheme="green" rightIcon={<ChevronRightIcon />}>
                View GitHub Repository
              </Button>
            </Link>
          </Box>
        </Section>
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
