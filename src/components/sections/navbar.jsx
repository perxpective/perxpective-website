import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { 
    Box, 
    Container,
    useColorModeValue,
    Link,
    HStack,
    Center,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton
} from '@chakra-ui/react'
import ToggleButton from '../togglebutton'


const NavBar = () => {
    return (
        <Center>
            <Box
                position="fixed"
                as="nav"
                w="100%"
                wrap="wrap"
                justify="center"
                zIndex={10}
            >
                <Container
                    display="flex"
                    mt={8}
                    p={2}
                    px={{base: 2, md: 8}}
                    maxW="fit-content"
                    align="center"
                    wrap="wrap"
                    justify="center"
                    centerContent
                    boxShadow={'xl'}
                    borderRadius={'xl'}
                    bg={useColorModeValue("white", "#242424")}
                    css={{ backdropFilter: 'blur(10px)' }}
                    borderWidth="1px"
                    borderColor={useColorModeValue("gray.300", "gray.700")}
                >
                    <HStack 
                        spacing="24px"
                        alignItems="center"
                        display={{ base: 'none', md: 'flex' }}
                        width={{ base: 'full', md: 'auto' }}
                        textDecoration={'none'}
                    >
                        <Link _hover={{color:"green.300"}}>About Me 💁</Link>
                        <Link _hover={{color:"green.300"}}>Education 🎓</Link>
                        <Link _hover={{color:"green.300"}}>Work 💼</Link>
                        <Link _hover={{color:"green.300"}}>Projects 💻</Link>
                        <Link _hover={{color:"green.300"}}>Contact 📱</Link>
                        <Link _hover={{color:"green.300"}}>FAQ ❓</Link>
                        <ToggleButton />
                    </HStack>

                    <Box
                        flex={1}
                        alignItems="center"
                        display={{ base: "flex", md: "none" }}
                    >
                        <Box
                            ml={0}
                            display={{ base: "inline-block", md: "none" }}
                            px={1}
                        >
                            <Menu isLazy id="navbar-menu">
                                <MenuButton
                                    as={IconButton}
                                    icon={<HamburgerIcon />}
                                    aria-label="Options"
                                    variant="outline"
                                    borderColor={useColorModeValue("white", "#242424")}
                                />
                                <MenuList>
                                    <MenuItem>
                                        <Link >About Me 💁</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link >Education 🎓</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link >Work 💼</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link >Projects 💻</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link >Contact 📱</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link >FAQ ❓</Link>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                        <ToggleButton />
                    </Box>
                </Container>
            </Box>
        </Center>
    )
}

export default NavBar