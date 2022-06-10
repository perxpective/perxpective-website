import { Container, Box, Heading, Img, Button, Icon } from '@chakra-ui/react'
import NextLink  from 'next/link'
// Icons
import { FcInfo, FcIdea } from 'react-icons/Fc'
import { CgHello } from  'react-icons/Cg'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { RiCodeBoxFill } from 'react-icons/Ri'


import Section from '../components/section'
import Transitions from '../components/transition'

export default function Home() {
  return (
    <Container align={"center"}>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} >
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
      <br/>
      <Box display={{md:'flex'}}>
        <Section delay={0.1}>
          <Heading as="h1" size="lg">
            <Icon as={CgHello} boxSize={20} />
          </Heading>
          <Heading as="h2" variant="section-title">
            Hello there!
          </Heading>
          <p>My name is Ervin and I am an aspiring programmer with a passion for cybersecurity and all things tech!</p>
          <p>I love coding and I am consistently upgrading my skills in programming and happening in my own free time such as making good use of my free time developing this very website you see here!</p>
          <p>My main principle in life is to treat everyone with respect no matter what their backgrounds are and I try my best to lend a helping hand or a listening ear to those who need it.</p>
          <p>I love being a leader who takes responsibility and initiative and guides others to becoming a better person in life &#9829; </p>
        </Section>
      </Box>

      <Box display={{ md:'flex'}} align="center">
        <Section delay={0.1}>
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

      <Box display={{ md:'flex' }} align="center">
        <Section delay={0.1}>
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

      <Box display={{ md: 'flex' }} align="center">
        <Section delay={0.1}>
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

      <Box display={{ md: 'flex' }} align="center">
        <Section delay={0.1}>
          <Heading as="h1" size="lg">
            <Icon as={RiCodeBoxFill} boxSize={20} />
          </Heading>
          <Heading as="h1" variant="section-title">
            Find me on Social Media!
          </Heading>
          <p>Keep in touch with me across other social media platforms</p>
        </Section>
      </Box>
    </Container>
  )
}
