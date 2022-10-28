import { 
    Container, 
    Box, 
    Heading, 
    Img, 
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Text,
    UnorderedList,
    ListItem
} from '@chakra-ui/react'

import Image from 'next/image'

import React from 'react'

import styles from '../styles/Home.module.css'

import Section from '../components/section'
import Transitions from '../components/transition'

export default function Career() {
    return (
        <Container textAlign={"center"}>
            <Box display={{ lg: 'flex' }} textAlign={"center"}>
                <Box flexGrow={1} >
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} align="center">
                        <Img borderRadius="full" borderColor="#72c275" borderWidth={2} objectFit="cover" borderStyle="Solid" boxSize={150} src="/images/profilepic.png" alt="profile-pic-of-robot" />
                    </Box>
                    <Transitions>
                        <Heading as="h1" variant="Page-Title">
                            Career
                        </Heading>
                        <p>View my career pathways; past, present and future</p>
                    </Transitions>
                </Box>
            </Box>
            <br/>
            <Box textAlign={"left"}>
                <Section>
                    <Accordion>
                        <AccordionItem>
                            <Heading as="h2" variant="section-title">
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        Primary School | 2011 - 2016
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4}>
                                <Box align="center" p={5}>
                                    <Img borderRadius={20} src="http://www.swimfast.com.sg/wp-content/uploads/2017/12/2-21.jpg" w={350} objectFit="cover" />
                                </Box>        
                                <UnorderedList>
                                    <ListItem>I went to Anglo-Chinese School (Primary) for 6 years and sat for the Primary School Leaving Examination</ListItem>
                                    <ListItem>Scored A for English, Chinese, Mathematics and Science and obtained a T-Score of 229</ListItem>
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <Heading as="h2" variant="section-title">
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        Secondary School | 2017-2020
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4}>
                                <Box align="center" pb={10}>
                                    <Img borderRadius="20" objectFit="cover" w={300} src="/images/barker.jfif" alt="class-photo" />
                                </Box>
                                <UnorderedList>
                                    <ListItem>I got posted to the Express stream in Anglo-Chinese School (Barker Road) in 2017 where I spent four years forging unforgettable friendships and bortherhoods that last forever</ListItem>
                                    <br />
                                    <ListItem>This is the very secondary school that gave me the opportunity to pursue my passions in computing by offering my favourite subject, Computing!</ListItem>
                                    <br />
                                    <ListItem>I took English, Chinese B, Elementary Mathematics, Additional Mathematics, Physics, Chemistry, Computing and Social Studies with Geography Elective for my Upper Secondary subject combination</ListItem>
                                    <br />
                                </UnorderedList>
                                <Text as="u" fontSize={18}>Leadership Positions:</Text>
                                <UnorderedList>
                                    <br />
                                    <ListItem>Joined the Digital Media CCA and was appointed the Vice-President of Photography in Sec 3</ListItem>
                                    <br />
                                    <ListItem>My leadership responsibilities include planning CCA schedules and duties for the academic year and planning training sessions for juniors</ListItem>
                                    <br/> 
                                </UnorderedList>

                                <Text>Obtained the following grades for the GCE-O-Levels 2020:</Text>
                                <TableContainer>
                                    <Table>
                                        <Thead>
                                            <Tr>
                                                <Th>Subject</Th>
                                                <Th>Grade Obtained</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr>
                                                <Td>English</Td>
                                                <Td>A2</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Elementary Mathematics</Td>
                                                <Td>A2</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Additional Mathematics</Td>
                                                <Td>A1</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Physics</Td>
                                                <Td>A2</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Chemistry</Td>
                                                <Td>A2</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Computing</Td>
                                                <Td>A2</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>SS & Geography</Td>
                                                <Td>B3</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Chinese B</Td>
                                                <Td>Pass</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>

                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <Heading as="h2" variant="section-title">
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        Polytechnic | 2021-2024
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4}>
                                <Box align="center" p={{md: 10, sm: 3}} pb={5}>
                                    <Img borderRadius={20} src="https://www.sp.edu.sg/images/default-source/default-album/thumbnails-courses-security1.jpg?sfvrsn=81d8ac4_0" w={350} objectFit="cover" filter="auto" brightness="80%" />
                                </Box>
                                <UnorderedList>
                                    <ListItem>I was admitted into Singapore Polytechnic's Diploma in Infocomm Security Management (DISM) via the Early Admissions Exercise in 2021 upon receiving my O Level results</ListItem>
                                    <br />
                                    <ListItem>Polytechnic has allowed me to shine and further develop my skills in cybersecurity through modules like Ethical Hacking, Digital Forensics, Web Development, Cryptography, Secure Coding and Securing Microsoft Windows</ListItem>
                                    <br />
                                </UnorderedList>

                                <Text as="u" fontSize={18}>Leadership Positions:</Text>
                                <UnorderedList>
                                    <br />
                                    <ListItem>Joined the SOC Ambassadors and DISM Gryphons Special Interest Group (SIG)</ListItem>
                                    <br />
                                    <ListItem>Appointed the Head of Research and Development of SOCA in 2022 (Year 2)</ListItem> 
                                    <br />
                                    <ListItem>Responsibilities: In charge of all the technical projects done by the club such as the SOCA Website hosted on a custom domain and the LEMonade app, a collaboration with Cyber Youth Singapore</ListItem>
                                    <br />
                                    <ListItem>Appointed the President of DISM Gryphons</ListItem>
                                    <br />
                                    <ListItem>Responsibilities: Leading and directing the EXCO team as well as overseeing all matters happening in the SIG.</ListItem>
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <Heading as="h2" variant="section-title">
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        My Future Career Aspirations
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4}>
                                
                                <Img src="/images/coding.jpg" borderRadius={30}  />
                                <br />
                                <UnorderedList>
                                    <ListItem>I intend to serve my national service for three years under the Digital Intelligence Service (DIS), the fourth branch of the Singapore Armed Forces to apply what I have learnt in my Polytechnic course in a military envrionment.</ListItem>
                                    <br />
                                    <ListItem>I also aim to embark on a work-study programme during my service with a partner local university</ListItem>
                                    <br />
                                    <ListItem>After serving my national service, I intend to pursue a Computer Science degree or a Information Security degree in a local university.</ListItem>
                                    <br />
                                    <ListItem>I intend to work as a software engineer and a white hat full-time!</ListItem>
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Section>
            </Box>
            <br />
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