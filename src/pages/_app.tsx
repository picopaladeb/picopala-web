import '../styles/globals.css'
import React from 'react'
// Models
import { PageWithLayout } from 'src/models/nextPage'
// Contexts
import { AuthProvider } from 'src/contexts/auth'

type AppProps = {
  Component: PageWithLayout
  pageProps: any
}

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = Component.layout ? Component.layout : React.Fragment
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
