import React from 'react'
import Image from 'next/image'

interface IAuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: IAuthLayoutProps) => {
  return (
    <main className='pt-[238px] pb-[230px] md:pt-[276px]'>
      <div className='grid grid-cols-12 gap-5 h-full'>
        <div className='col-span-7 h-full hidden md:block'>
          <Image
            src='/assets/images/image-shopping.jpg'
            alt='image-shopping'
            width={805}
            height={780}
            className='w-full h-full object-cover'
          />
        </div>
        <div className='col-span-12 md:col-span-5 h-full py-24 px-16'>
          {children}
        </div>
      </div>
    </main>
  )
}

export default AuthLayout
