import '../styles/globals.css'
import { Lato, Cinzel } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cinzel',
})

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${lato.variable} ${cinzel.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}
