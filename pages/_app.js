import Layout from '../components/Layout'
import '../styles/globals.css'
import GlobalStyles from './../components/GlobalStyles'

function MyApp({ Component, pageProps, title }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
