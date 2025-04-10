import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "./components/Headers";
import Footer from './components/Footer';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anki App',
  description: 'English application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <Header />
        <div className='w-full max-w-7xl my-0 m-auto'>
            {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
