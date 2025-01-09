import HeaderBottom from '@/components/Header/HeaderBottom'
import HeaderTop from '@/components/Header/HeaderTop'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full'>
      <HeaderTop />
      <HeaderBottom />
    </header>
  )
}

export default Header
