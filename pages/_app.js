import '../styles/globals.css'
import {EstacionProvider} from '../context/EstacionProvider';

export default function App({ Component, pageProps }) {
  return (
    <EstacionProvider>
      <Component {...pageProps} />
    </EstacionProvider>
  )
}
