import Link from 'next/link'
import { Menu, Search, ToggleMenuButton } from '@/components'
import Image from 'next/image'

const HeaderBottom = () => {
  return (
    <div className='container py-6 flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <ToggleMenuButton />
        <Link href='/' className='text-3xl font-bold uppercase'>
          Shop.co
        </Link>
      </div>

      <Menu />
      <Search />
      <div className='flex'>
        <div className='cursor-pointer p-[6px] shrink-0'>
          <Image
            src='/assets/images/icon-search-black.svg'
            alt='icon-search'
            width={20}
            height={20}
          />
        </div>
        <div className='cursor-pointer p-[6px] shrink-0'>
          <Image
            src='/assets/images/icon-cart.svg'
            alt='icon-cart'
            width={22}
            height={20}
          />
        </div>

        <div className='cursor-pointer p-[6px] shrink-0'>
          <Image
            src='/assets/images/icon-user.svg'
            alt='icon-user'
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  )
}

export default HeaderBottom
