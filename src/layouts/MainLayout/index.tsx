import { Footer, Header } from '@/components'
import React from 'react'

interface IMainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
