import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
const styles = {
    global: props => ({
        body: {
            bg: mode('#e9fcff', '#212121')(props)
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
                marginBottom: 4,
                fontFamily: 'Inter'
            },

            'section-title-2': {
                fontSize: 20,
                marginTop: 3,
                marginBottom: 4,
                fontFamily: 'Inter'
            },
            
            'Page-Title': {
                fontFamily: 'Inter'
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

const fonts = {
    fonts: {
        heading: `'Inter', sans-serif`,
        body: `'Inter', sans-serif`
    }
}

const theme = extendTheme({
    config, styles, components, colors, fonts
})

export default theme