import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    useColorModeValue,
    IconButton,
    Icon,
    Img
} from '@chakra-ui/react'

// Import Icons
import { HamburgerIcon } from '@chakra-ui/icons'
import { VscGithub } from 'react-icons/vsc'

// Import Toggle Button
import ToggleButton from '../components/toggleButton'
const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'white')
    return (
        <NextLink href={href}>
            <Link p={2} bg={active ? '' : undefined} color={active ? '#91bcff' : inactiveColor}>
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    return (
        <Box align="center" position="fixed" as="nav" w="100%" bg={useColorModeValue('#e9fcff80', '#20202380')} style={{backdropFilter:'blur(10px)'}} zIndex={1} {...props}>
            <Container display="flex" p={2} maxW="100%" wrap="wrap" align="center" justify="space-between">
                <Flex align="center" mr={5}>
                    <LinkItem href="/" path={path}>
                        <Img boxSize={16} src="/images/website_logo.png" alt="websitelogo3d" />
                    </LinkItem>
                </Flex>
                <Stack direction={{base: 'column', md: 'row'}} display={{base: 'none', md: 'flex'}} width={{base: 'full', md: 'flex'}} alignItems="center" flexGrow={1} mt={{base: 4, nmd: 0}}>
                    <LinkItem href="/bio" path={path}>
                        Bio
                    </LinkItem>
                    <LinkItem href="/projects" path={path}>
                        Projects
                    </LinkItem>
                    <LinkItem href="/career" path={path}>
                        Career
                    </LinkItem>
                    <LinkItem href="/about-the-page" path={path}>
                        About
                    </LinkItem>
                    <Link href="https://github.com/perxpective/perspective" isExternal target={"_blank"}>
                        <IconButton aria-label='View Source Code' icon={<VscGithub />} />
                    </Link>
                </Stack>

                <Box flex={1} align="right">
                    <ToggleButton />
                    <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options"/>
                            <MenuList>
                                <NextLink href="/bio" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>

                                <NextLink href="/projects" passHref>
                                    <MenuItem as={Link}>Projects</MenuItem>
                                </NextLink>

                                <NextLink href="/career" passHref>
                                    <MenuItem as={Link}>Career</MenuItem>
                                </NextLink>

                                <Link href="https://github.com/perxpective/perspective" isExternal target={"_blank"}>
                                    <MenuItem as={Link}>View Source Code</MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar