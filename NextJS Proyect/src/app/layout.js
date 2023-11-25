import Script from 'next/script'
import './global.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SharedView',
  description: 'SharedView',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Script src="https://kit.fontawesome.com/b111eba4a9.js" crossorigin="anonymous"></Script>
      <body id="root" className={inter.className}>
            {children}
      </body>
    </html>
  )
}
