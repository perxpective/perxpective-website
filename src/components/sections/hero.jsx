import React from 'react'
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    Link,
} from '@chakra-ui/react'

import { TriangleDownIcon } from '@chakra-ui/icons'

const Hero = () => {
    return (
        <Container
            py={{ base: "0.5rem" }}
            align="center"
            alignItems={"center"}
        >
            <Box
                maxW={{ base: "fit-content", lg: "100%" }}
                align="left"
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
                <Link
                    style={{ textDecoration: "none" }}
                    href={"#about"}
                >
                    <Button 
                        my={5} 
                        rightIcon={<TriangleDownIcon />} 
                        colorScheme="yellow"
                        size={{ base: "xs", sm: "sm", md: "md" }}
                        >
                            Learn More About Me!
                    </Button>
                </Link>
            </Box>
        </Container>
    )
}

export default Hero