import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "./components/Headers";
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
      <body className={`${inter.className} bg-black`}>
        <Header />
        <div className='w-full max-w-7xl mt-4 m-auto'>
            {children}
        </div>
      </body>
    </html>
  )
}
