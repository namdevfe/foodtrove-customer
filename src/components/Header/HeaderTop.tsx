// import { Menu } from '@/components'
// import Link from 'next/link'

import Link from 'next/link'

const HeaderTop = () => {
  return (
    <div className='bg-black py-[10px] h-[38px]'>
      <div className='container h-full flex items-center justify-center'>
        <div className='text-white text-sm font-normal'>
          Sign up and get 20% off to your first order.
          <Link href='/register' className='font-semibold border-b-[1px] ml-2'>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
