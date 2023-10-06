import { Text } from '@chakra-ui/react'
import React from 'react'

const Paragraph = ({children, py}) => {
    return (
        <Text
            as="p"
            fontSize={{ base: "12px", sm: "15px", md: "19px" }}
            py={py}
        >
            {children}
        </Text>
    )
}

export default Paragraph