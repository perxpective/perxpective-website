import { Text } from '@chakra-ui/react'
import React from 'react'

const Paragraph = ({children}) => {
    return (
        <Text
            as="p"
            fontSize={{ base: "12px", sm: "15px", md: "19px" }}
            py={3}
        >
            {children}
        </Text>
    )
}

export default Paragraph