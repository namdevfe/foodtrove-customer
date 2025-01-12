import HeaderBottom from '@/components/Header/HeaderBottom'
import HeaderTop from '@/components/Header/HeaderTop'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full h-[98px] md:h-[136px]'>
      <HeaderTop />
      <HeaderBottom />
    </header>
  )
}

export default Header
