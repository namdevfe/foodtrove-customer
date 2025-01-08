import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/styles/globals.scss'

export const metadata: Metadata = {
  title: 'Food Trove',
  description: 'Food Trove App is built by Quốc Nam'
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '400', '500', '600', '700', '900']
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
