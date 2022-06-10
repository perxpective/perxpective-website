import '../styles/globals.css'
import Layout from '../components/layout/layout'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme/theme'
import Fonts from '../components/font'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts/>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
