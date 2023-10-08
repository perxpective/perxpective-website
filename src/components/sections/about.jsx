import { Avatar, Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Section from '../section'
import Paragraph from '../text/paragraph'

const About = () => {
    return (
        <Section top={"15rem"}>
            <Avatar
                mb={{base: 5, md: 10}}
                size="2xl"
                name="Ervin Lee" 
                src=""
                css={{transition: "all 0.1s ease-in-out"}}
                _hover={{boxShadow: "md", transform: "translate(3px, -3px)"}}
            />
            <Heading
                as="h1"
                pb={3}
                fontSize={{ base: "20px", sm: "25px", md: "30px" }}
                fontWeight={{ base: "bold", md: "extrabold" }}
            >
                A Little Bit About Myself 💁
            </Heading>
            <Paragraph py={4}>
                Currently a diploma student at <b>Singapore Polytechnic</b> specializing in <u>Cybersecurity and Digital Forensics</u> 🔐!
            </Paragraph>
            <Paragraph py={4}>
                I'm an <i>organised, proactive, collaborative, hard-working</i> and <i>passionate</i> <u>problem solver</u> 👥.
            </Paragraph>
            <Paragraph py={4}>
                I'm also an <i>independent learner</i> who can adapt to changes quickly. I'm always looking for opportunities to learn, grow and upskill as a developer 💻.
            </Paragraph>
            <Paragraph py={4}>
                Looking to pursue a career in software engineering, bridging my knowledge in cybersecurity and self-taught skills in software engineering to develop impactful products and solutions for public good and digital defence 📱.
            </Paragraph>
        </Section>
    )
}

export default About