import React from 'react'
import Section from '../section'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Badge, Box, Flex, HStack, Heading, Image, List, ListItem, Tag, TagLabel, TagLeftIcon, Text, UnorderedList, useColorModeValue } from '@chakra-ui/react'
import Paragraph from '../text/paragraph'
import SkillTag from '../text/skillstag'

// Icons
import { SiAnsible, SiWindows10, SiTerraform, SiPowershell } from 'react-icons/si'
import { BsFillGearFill, BsFillHddNetworkFill } from 'react-icons/bs'
import { GrVmware } from 'react-icons/gr'

const SkillsDIS = [
    {
        name: "DevOps",
        color: "gray",
        icon: BsFillGearFill
    },
    {
        name: "Ansible",
        color: "gray",
        icon: SiAnsible
    },
    {
        name: "Active Directory",
        color: "cyan",
        icon: SiWindows10
    },
    {
        name: "Terraform",
        color: "purple",
        icon: SiTerraform
    },
    {
        name: "Networking",
        color: "green",
        icon: BsFillHddNetworkFill
    },
    {
        name: "Virtualization",
        color: "cyan",
        icon: GrVmware
    },
    {
        name: "PowerShell",
        color: "blue",
        icon: SiPowershell
    },
]

const Work = () => {
    return (
        <Section top={"1rem"}>
            <Heading
                as="h1"
                pb={3}
                fontSize={{ base: "20px", sm: "25px", md: "30px" }}
                fontWeight={{ base: "bold", md: "extrabold" }}
            >
                My Work Experience 💼
            </Heading>
            <Flex
                py={4}
                align={"center"}
            >
                <Image 
                    src="/images/dis.jpeg"
                    boxSize={"100px"}
                    objectFit='contain'
                    borderRadius={7}
                />
                <Box
                    pl={5}
                >
                    <Heading
                        as="h2"
                        fontSize={{ base: "14px", sm: "15px", md: "20px" }}
                        fontWeight={"bold"}
                    >
                        Cyber Range Assistant
                    </Heading>
                    <Paragraph>
                        The Digital and Intelligence Service
                    </Paragraph>
                    <Text
                        as="p"
                        fontSize={{ base: "12px", md: "16px" }}
                        color={useColorModeValue("gray.500", "gray.200")}
                    >
                        March 2023 - August 2023
                    </Text>
                    <Badge
                        colorScheme="yellow"
                        variant="subtle"
                    >Internship</Badge>
                </Box>
            </Flex>
            <Box>
                <Accordion 
                    defaultIndex={[0]} 
                    allowMultiple 
                    borderRadius={10}
                    borderBottomWidth={0}
                >
                    <AccordionItem
                        py={3}
                    >
                        <AccordionButton
                            borderRadius={10}
                        >
                            <Box
                                as='span'
                                textAlign={"left"}
                                align={"center"}
                                flex={"1"}
                            >
                                <Paragraph>
                                    <b>Overview 📌</b>
                                </Paragraph>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            <UnorderedList>
                                <ListItem>
                                    <Paragraph py={2}>
                                        Learned Infrastructure-as-Code (IaC) as part of a pilot project to automate the provisioning of cyber range infrastructures for cyber exercises within a short period of time and little manpower. 
                                    </Paragraph>
                                </ListItem>
                                <ListItem>
                                    <Paragraph py={2}>
                                        The project was successfully piloted at the Critical Defence Exercise (CIDeX) 2023.
                                    </Paragraph>
                                </ListItem>
                                <ListItem>
                                    <Paragraph py={2}>
                                        Notable achievements include successfully deploying several team networks of the CIDeX 2023 network in mere hours and the development of automation scripts to import and export Windows Group Policy Objects (GPOs) into Windows exercise clients.
                                    </Paragraph>
                                </ListItem>
                            </UnorderedList>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem
                        py={3}
                    >
                        <AccordionButton
                            borderRadius={10}
                        >
                            <Box
                                as='span'
                                textAlign={"left"}
                                align={"center"}
                                flex={"1"}
                            >
                                <Paragraph>
                                    <b>Skills Acquired 🔧</b>
                                </Paragraph>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            {SkillsDIS.map((Skill, index) => (
                                <SkillTag
                                    icon={Skill.icon}
                                    color={Skill.color}
                                    key={index}
                                >
                                    {Skill.name}
                                </SkillTag>
                            ))}
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </Section>
    )
}

export default Work