import '../styles/globals.css'
import type { AppProps } from 'next/app'

// export const User = () => {
// }

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
} 

export default MyApp
