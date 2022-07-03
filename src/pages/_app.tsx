import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import '@reach/dialog/styles.css'
import React from 'react'
// Models
import { PageWithLayout } from 'src/models/nextPage'
// Contexts
import { AuthProvider } from 'src/contexts/auth'
// Components
import { ToastContainer } from 'react-toastify'

type AppProps = {
  Component: PageWithLayout
  pageProps: any
}

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = Component.layout ? Component.layout : React.Fragment
  return (
    <AuthProvider>
      <Layout>
        <>
          <Component {...pageProps} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            draggable={false}
            closeOnClick
            pauseOnHover
          />
        </>
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
