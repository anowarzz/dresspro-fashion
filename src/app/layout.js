import './globals.css'
import { Inter } from 'next/font/google'
import { Lora } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })
const lora = Lora ({ subsets: ['latin'] })

export const metadata = {
  title: 'Dress Pro Fashion',
  description: 'Bangladeshi Garments Apparel Supplier',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lora.className}>
  <Navbar />
  {children}
  <Footer />
  </body>
    </html>
  )
}
