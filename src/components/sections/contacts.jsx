import { Box, Button, Heading, Link, Stack, Switch, Tag, TagLabel, TagLeftIcon, Text } from '@chakra-ui/react'
import React from 'react'
import Section from '../section'
import Paragraph from '../text/paragraph'
import { SiGithub, SiGmail, SiInstagram, SiLinkedin, SiMedium } from 'react-icons/si'

const Socials = [
    {
        name: "LinkedIn",
        username: "Ervin Lee",
        link: "https://www.linkedin.com/in/perxpective/",
        icon: SiLinkedin,
        color: "linkedin"
    },
    {
        name: "GitHub",
        username: "perxpective",
        link: "https://www.github.com/perxpective/",
        icon: SiGithub,
        color: "gray"
    },
    {
        name: "Instagram",
        username: "prxpctves",
        link: "https://www.instagram.com/prxpctves/",
        icon: SiInstagram,
        color: "pink"
    },
    {
        name: "Email",
        username: "ervinleequanjun@outlook.com",
        link: "mailto:ervinleequanjun@outlook.com",
        icon: SiGmail,
        color: "telegram"
    },
    {
        name: "Medium",
        username: "perxpective",
        link: "https://perxpective.medium.com/",
        icon: SiMedium,
        color: "gray"
    }
]

const Contacts = () => {
    return (
        <Section
            top={"2rem"}
        >
            <Stack spacing={16}>
                <Box>
                    <Heading
                        as="h1"
                        fontSize={{ base: "20px", sm: "25px", md: "30px" }}
                        fontWeight={{ base: "bold", md: "extrabold" }}
                    >
                        Let's Keep In Touch! 📱 
                    </Heading>
                    <Box pt={5}>
                        <Switch
                            colorScheme="green"
                            size={{ base: "md", sm: "lg"}}
                            defaultChecked
                            isReadOnly
                            mt={3}
                        />
                        <Text
                            py={3}
                            fontSize={"xl"}
                        >
                            I'm <b>Available</b> for hiring!
                        </Text>
                    </Box>
                    <Paragraph
                        py={3}
                    >
                        Currently looking for exciting internship opportunities! If you're interested in hiring me, you can download my resume and contact me!
                    </Paragraph>
                    <Link
                        href="/files/ervin-resume.pdf"
                        target='_blank'
                    >
                        <Button
                            colorScheme="green"
                            mt={3}
                            mr={3}
                        >
                            Download My Resume! 📑
                        </Button>
                    </Link>
                </Box>
                <Box>
                    <Heading
                        as="h1"
                        fontSize={{ base: "20px", sm: "25px", md: "30px" }}
                        fontWeight={{ base: "bold", md: "extrabold" }}
                    >
                        Find Me Online! 🌐 
                    </Heading>
                    {Socials.map((social) => (
                        <Link
                            href={social.link}
                            target='_blank'
                            key={social.name}
                        >
                            <Tag
                                colorScheme={social.color}
                                size={{ sm: "md", md: "lg" }}
                                m={1}
                                p={2}
                                style={{ transition: "all .1s ease-in-out" }}
                                _hover={{ transform: "translate(0, -2px)", boxShadow: "md" }}
                            >
                                <TagLeftIcon as={social.icon} />
                                <TagLabel>{social.name}</TagLabel>
                            </Tag>
                        </Link>
                    ))}
                </Box>
            </Stack>
        </Section>
    )
}

export default Contacts