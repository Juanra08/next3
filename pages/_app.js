import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'

export default function App ({ Component, pageProps }) {
  return (
    <SessionProvider
      
      options={{
        staleTime: 0,
        refetchInterval: 0
      }}

      session={pageProps.session} >

      <Component {...pageProps} />
    </SessionProvider>
  )
}