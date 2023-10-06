import { Box, Card, CardBody, Container, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Section from '../section'
import Paragraph from '../text/paragraph'

const Education = () => {
    return (

        <Section top={"1rem"}>
            <Heading
                as="h1"
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
                    alignItems={{md:"center"}}
                    my={3}
                >   
                    <Image 
                        src='/sp.png' 
                        pl={5} 
                        boxSize='90px'
                        objectFit='contain'
                    />

                    <Stack>
                        <CardBody pt={{base: 0, md: 5}}>
                            <Heading size={{base: "sm", md: "md"}}>Singapore Polytechnic</Heading>
                            <Paragraph>Diploma in Cybersecurity and Digital Forensics</Paragraph>
                            <Text
                                as="p"
                                fontSize={{ base: "12px", md: "17px" }}
                                color={useColorModeValue("gray.500", "gray.200")}
                            >
                                2021 - 2024
                            </Text>
                        </CardBody>
                    </Stack>
                </Card>
                <Card
                    direction={{ base: "column", md: "row" }}
                    overflow={"hidden"}
                    variant={"outline"}
                    style={{transition: "all 0.1s ease-in-out"}}
                    _hover={{boxShadow: "md"}}
                    background={useColorModeValue("white", "#242424")}
                    alignItems={{md:"center"}}
                    my={3}
                >   
                    <Image 
                        src='/acsbr.png' 
                        pl={5} 
                        boxSize='90px'
                        objectFit='contain'
                    />

                    <Stack>
                        <CardBody pt={{base: 0, md: 5}}>
                            <Heading size={{ base: "sm", md: "md" }}>Anglo-Chinese School (Barker Road)</Heading>
                            <Paragraph>GCE O-Levels</Paragraph>
                            <Text
                                as="p"
                                fontSize={{ base: "12px", md: "17px" }}
                                color={useColorModeValue("gray.500", "gray.200")}
                            >
                                2017 - 2020
                            </Text>
                        </CardBody>
                    </Stack>
                </Card>
            </Box>
        </Section>
    )
}

export default Education