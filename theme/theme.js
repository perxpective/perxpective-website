import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
const styles = {
    global: props => ({
        body: {
            bg: mode('#8cf7ff', '#212121')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 5,
                textDecorationColor: '#72c275',
                textDecorationThickness: 1,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },

    Link: {
        baseStyle: props => ({
            color: mode('#00e052', '#ff6ef5'),
            textUnderLineOffset: 10
        })
    }
}

const colors = {
    glassTeal: "#b0feff"
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({
    config, styles, components, colors
})

export default theme