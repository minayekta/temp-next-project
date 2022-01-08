import GlobalState from '../src/components/Container/GlobalState'
import Layout from '../src/components/Layout/Layout'


function MyApp({ Component, pageProps }) {
  return <GlobalState>
           <Layout><Component {...pageProps} /> </Layout>
        </GlobalState>


}

export default MyApp
