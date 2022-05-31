import '../styles/globals.css'
import React from 'react'
// Models
import { PageWithLayout } from 'src/models/nextPage'

type AppProps = {
  Component: PageWithLayout
  pageProps: any
}

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = Component.layout ? Component.layout : React.Fragment
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
