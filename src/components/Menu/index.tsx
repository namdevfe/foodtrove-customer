'use client'

import { MENUS } from '@/constants'
import Link from 'next/link'
import './Menu.scss'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils'

const Menu = () => {
  const pathname = usePathname()

  return (
    <ul className='menu'>
      {MENUS.map((item) => (
        <li
          key={item.id}
          className={cn('menu__item', {
            '--active': pathname === item.path
          })}
        >
          <Link href={item.path}>{item.text}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Menu
