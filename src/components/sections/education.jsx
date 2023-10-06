import { Box, Card, CardBody, Container, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Section from '../section'

const Education = () => {
    return (
        <Section top={"1rem"}>
            <Heading
                as="h1"
                pb={8}
                fontSize={{ base: "20px", sm: "25px", md: "30px" }}
                fontWeight={{ base: "bold", md: "extrabold" }}
            >
                Where I've Studied ✍️
            </Heading>
            <Box>
                <Card
                    direction={{ base: "column", md: "row" }}
                    overflow={"hidden"}
                    variant={"outline"}
                    style={{transition: "all 0.1s ease-in-out"}}
                    _hover={{boxShadow: "md"}}
                    background={useColorModeValue("white", "#242424")}
                >
                    <Image />
                    <Stack>
                        <CardBody></CardBody>
                    </Stack>
                </Card>
            </Box>
        </Section>
    )
}

export default Education