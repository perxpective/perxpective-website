import React, { useState } from 'react'
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
    IconButton,
    Button
} from '@chakra-ui/react'
import { FcHome } from 'react-icons/fc'
import ToggleButton from '../togglebutton'


const NavBar = () => {
    const [backdrop, setBackdrop] = useState(false)
    const changeBackdrop = () => {
        if (window.scrollY >= 120) {
            setBackdrop(true)
        } else {
            setBackdrop(false)
        }
    }

    window.addEventListener('scroll', changeBackdrop)

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
                    mt={{base: "4px", md: "12px"}}
                    p={2}
                    px={{base: 4, md: 8}}
                    maxW="fit-content"
                    align="center"
                    wrap="wrap"
                    justify="center"
                    centerContent
                    boxShadow={(backdrop ? "xl" : "none")}
                    borderRadius={'xl'}
                    style={{ transition: "all 0.5s", backdropFilter: 'blur(10px)' }}
                    bg={useColorModeValue("white", "#242424")}
                    borderWidth={(backdrop ? "1px" : "0px")}
                    borderColor={useColorModeValue("gray.300", "gray.700")}
                >
                    <HStack 
                        spacing="24px"
                        alignItems="center"
                        display={{ base: 'none', lg: 'flex' }}
                        width={{ base: 'full', md: 'auto' }}
                        textDecoration={'none'}
                    >
                        <Link href={"#"}>
                            <Button 
                                size="sm"
                                p={1}
                            >
                                <FcHome />
                            </Button>
                        </Link>
                        <Link href={"#about"} _hover={{color:"green.300"}}>About Me 💁</Link>
                        <Link href={"#education"} _hover={{color:"green.300"}}>Education 🎓</Link>
                        <Link href={"#work"} _hover={{color:"green.300"}}>Work 💼</Link>
                        <Link href={"#projects"} _hover={{color:"green.300"}}>Projects 💻</Link>
                        <Link href={"#contact"} _hover={{color:"green.300"}}>Contact 📱</Link>
                        <Link href={"#faq"} _hover={{color:"green.300"}}>FAQ ❓</Link>
                        <Link href={"#faq"} _hover={{color:"green.300"}}>Blog ✍</Link>
                        <ToggleButton />
                    </HStack>

                    <Box
                        flex={1}
                        alignItems="center"
                        display={{ base: "flex", lg: "none" }}
                    >
                        <Link href={"#"}>
                            <Button
                                size="sm"
                                p={1}
                            >
                                <FcHome />
                            </Button>
                        </Link>
                        <Box
                            ml={0}
                            display={{ base: "inline-block", lg: "none" }}
                            px={5}
                        >
                            <Menu isLazy id="navbar-menu">
                                <MenuButton
                                    as={IconButton}
                                    icon={<HamburgerIcon />}
                                    aria-label="Options"
                                    variant="outline"
                                    size="sm"
                                />
                                <MenuList>
                                    <MenuItem>
                                        <Link href={"#about"}>About Me 💁</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link href={"#education"}>Education 🎓</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link href={"#work"}>Work 💼</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link href={"#projects"}>Projects 💻</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link href={"#contact"}>Contact 📱</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link href={"#faq"}>FAQ ❓</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link href={"#faq"}>Blog ✍</Link>
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