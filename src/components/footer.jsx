import React from 'react'
import Section from './section'
import { Text, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <Section>
            <Text
                align={'center'}
                color={useColorModeValue('gray.400', 'gray.500')}
            >&copy;{year} perxpective. All Rights Reserved.</Text>
        </Section>
    )
}

export default Footer