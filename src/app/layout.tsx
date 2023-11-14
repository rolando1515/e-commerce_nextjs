import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'flowmazon',
  description: 'lets make your walet cry',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='p-4 max-w-7xl m-auto MIN-W-[300px]'>
        {children}
        </main>
        </body>
    </html>
  )
}
