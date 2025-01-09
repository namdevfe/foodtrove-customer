import Image from 'next/image'

const Search = () => {
  return (
    <div className='hidden lg:flex items-center gap-3 flex-1 max-w-[577px] h-12 bg-[#F0F0F0] px-4 rounded-[62px]'>
      <Image
        src='/assets/images/icon-search.svg'
        alt='icon-search'
        width={20}
        height={20}
      />

      <input
        placeholder='Search for products...'
        className='h-full w-full bg-[#F0F0F0] outline-none'
      />
    </div>
  )
}

export default Search
