import '../styles/globals.css'
import { Lato } from 'next/font/google';
import localFont from 'next/font/local';

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
});

const trajan = localFont({
  src: '/fonts/TrajanPro-Regular.ttf',
  variable: '--font-trajan',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${lato.variable} ${trajan.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
