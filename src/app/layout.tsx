import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { MainLayout } from '@/layouts'
import '@/styles/globals.scss'
import { Bounce, ToastContainer } from 'react-toastify'

export const metadata: Metadata = {
  title: 'Shopping App',
  description: 'Shopping App is built by Quốc Nam'
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
      <body className={poppins.className} suppressHydrationWarning>
        <ToastContainer
          position='bottom-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
          transition={Bounce}
        />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
