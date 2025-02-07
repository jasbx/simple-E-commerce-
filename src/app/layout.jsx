import { Inter } from 'next/font/google'
import './globals.css'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home page',
  description: 'description for Home page',
  icons: {
    icon: "./images/bag-shopping-solid.svg"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={inter.className}>
        <Header/>

        {children}
        <Footer/>
      </body>
    </html>
  )
}
