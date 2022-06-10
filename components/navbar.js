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
    Icon
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'
import { FcHome } from 'react-icons/Fc'
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
        <Box align="center" position="fixed" as="nav" w="100%" bg={useColorModeValue('#ffffff40', '#20202380')} style={{backdropFilter:'blur(10px)'}} zIndex={1} {...props}>
            <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg">
                        <LinkItem href="/" path={path}>
                            <Icon as={FcHome}/>
                        </LinkItem>
                    </Heading>
                </Flex>
                <Stack direction={{base: 'column', md: 'row'}} display={{base: 'none', md: 'flex'}} width={{base: 'full', md: 'flex'}} alignItems="center" flexGrow={1} mt={{base: 4, nmd: 0}}>
                    <LinkItem href="/about" path={path}>
                        About
                    </LinkItem>
                    <LinkItem href="/projects" path={path}>
                        Projects
                    </LinkItem>
                    <LinkItem href="/career" path={path}>
                        Career
                    </LinkItem>
                    <LinkItem href="/career" path={path}>
                        Github
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ToggleButton />
                    <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options"/>
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>Home</MenuItem>
                                </NextLink>

                                <NextLink href="/about" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>

                                <NextLink href="/career" passHref>
                                    <MenuItem as={Link}>Career</MenuItem>
                                </NextLink>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>GitHub Source Code</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar