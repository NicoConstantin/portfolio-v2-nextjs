import '@/styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import { default as Layout } from '../layouts/MainLayout'

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(App)
