import React from 'react'
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    useColorModeValue,
    Link,
} from '@chakra-ui/react'

import { TriangleDownIcon } from '@chakra-ui/icons'
import { SiGithub } from 'react-icons/si'

const Hero = () => {
    return (
        <Container
            py={{ base: "0.5rem" }}
            px={{ sm: "4rem", md: "0rem" }}
            align={"left"}
        >
            <Box
                maxW={{ base: "fit-content", lg: "100%" }}
            >
                <Heading
                    as="h1"
                    fontSize={{ base: "30px", sm: "45px", md: "60px", lg: "65px" }}
                    fontWeight={{ base: "bold", md: "extrabold" }}
                    py={1}
                >
                    Hello There! 👋
                </Heading>
                <Text
                    as="h2"
                    fontSize={{ base: "16px", sm: "20px", md: "25px" }}
                    py={1}
                >
                    My Name is <u>Ervin Lee</u>.
                </Text>
                <Text
                    as="p"
                    fontSize={{ base: "12px", sm: "12px", md: "17px" }}    
                    color={useColorModeValue("gray.500", "gray.200")}
                    py={1}
                >
                    Cybersecurity Student, Aspiring Software Engineer.<br />
                    I love coding and building awesome stuff!
                </Text>
                <Text
                    as="p"
                    fontSize={{ base: "12px", sm: "12px", md: "17px" }}    
                    color={useColorModeValue("gray.500", "gray.200")}
                    py={1}
                >
                    📍 Based in <u>Singapore</u>
                </Text>
                <Box py={5}>
                    <Link
                        style={{ textDecoration: "none" }}
                        href={"#about"}
                    >
                        <Button
                            mb={2}
                            mr={2}
                            rightIcon={<TriangleDownIcon />} 
                            colorScheme="yellow"
                            size={{ base: "xs", sm: "sm", md: "md" }}
                            >
                                Learn More About Me!
                        </Button>
                    </Link>
                    <Link
                        style={{ textDecoration: "none" }}
                        href={"/ervin-resume.pdf"}
                        target='_blank'
                    >
                        <Button
                            mb={2}
                            mr={3}
                            colorScheme="green"
                            size={{ base: "xs", sm: "sm", md: "md" }}
                            >
                                Download My Resume! 📑
                        </Button>
                    </Link>
                    <Link
                        style={{ textDecoration: "none" }}
                        href={"https://github.com/perxpective/perspective"}
                        target='_blank'
                    >
                        <Button
                            mb={2}
                            mr={3}
                            colorScheme="gray"
                            leftIcon={<SiGithub />}
                            size={{ base: "xs", sm: "sm", md: "md" }}
                            >
                                View Source Code
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Container>
    )
}

export default Hero