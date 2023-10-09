import React from 'react'
import Section from '../section'
import { Box, Button, Card, CardBody, CardFooter, Heading, Image, SimpleGrid, useColorModeValue, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Link, Tag, Badge, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ProjectList } from '../../data/index.js'

const FullProject = ({ isOpen, onClose, Title, FullDescription, Linked, Tags, Year, Snapshots }) => {
    return (
        <>
            <Modal 
                isOpen={isOpen} 
                onClose={onClose}
                size={{ base: "sm", md: "lg", lg: "xl" }}
                isCentered
                motionPreset="slideInBottom"
                scrollBehavior="inside"
            >
                <ModalOverlay />
                <ModalContent
                    background={useColorModeValue("white", "#242424")}
                >
                    <ModalHeader>{Title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Year: <b>{Year}</b></Text>
                        <Text
                            py={4}
                        >{FullDescription}</Text>
                        <Box py={2}>
                            <Link href={Linked} isExternal>
                                <Text>View Project <ExternalLinkIcon mx='2px' /></Text>
                            </Link>
                        </Box>
                        {Tags.map((tag, index) => (
                            <Badge 
                                colorScheme='green' 
                                key={index}
                                mr={2} 
                                mt={3}
                            >
                                {tag}
                            </Badge>
                        ))}
                        {Snapshots.map((snapshot, index) => (
                            <Image 
                                src={snapshot} 
                                key={index} 
                                mt={5}
                                borderRadius="lg"
                                mb={5}
                            />
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme="yellow"
                            onClick={onClose}
                        >
                            Done!
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

const Projects = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Section
            top={"1rem"}
        >
            <Heading
                as="h1"
                py={3}
                fontSize={{ base: "20px", sm: "25px", md: "30px" }}
                fontWeight={{ base: "bold", md: "extrabold" }}
            >
                Projects I've Worked On 🧑‍💻️
            </Heading>
            <SimpleGrid
                minChildWidth={"200px"}
                spacing={"20px"}
                pt={5}
            >
                {ProjectList.map((project, index) => (
                    <Card
                        borderRadius="lg"
                        maxW="sm"
                        variant="outline"
                        background={useColorModeValue("white", "#242424")}
                        style={{ transition: "all 0.1s ease-in-out" }}
                        _hover={{ boxShadow: "md", transform: "translate(0, -3px);" }}
                        key={index}
                    >
                        <CardBody pb={1}>
                            <Image 
                                src={project.image} 
                                borderRadius="lg" 
                                mb={5}
                            />
                            <Heading size="md">
                                {project.name}
                            </Heading>
                            <Text>{project.shortDescription}</Text>
                        </CardBody>
                        <CardFooter>
                            <Button
                                colorScheme="yellow"
                                onClick={onOpen}
                            >
                                Learn More
                            </Button>
                            <FullProject
                                isOpen={isOpen}
                                onClose={onClose}
                                Title={project.name}
                                FullDescription={project.fullDescription}
                                Linked={project.link}
                                Tags={project.tags}
                                Year={project.year}
                                Snapshots={project.snapshots}
                            />
                        </CardFooter>
                    </Card>
                ))}
            </SimpleGrid>
        </Section>
    )
}

export default Projects