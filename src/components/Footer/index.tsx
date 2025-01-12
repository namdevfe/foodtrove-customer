import Image from 'next/image'
import Link from 'next/link'
import { Button, Logo } from '@/components'
import {
  IconFacebook,
  IconGithub,
  IconInstagram,
  IconTwitter
} from '@/components/Icons'

const PAYMENT_ICONS = [
  '/assets/images/icon-visa.svg',
  '/assets/images/icon-mastercard.svg',
  '/assets/images/icon-paypal.svg',
  '/assets/images/icon-apple-pay.svg',
  '/assets/images/icon-gpay.svg'
]

const SOCIALS = [
  {
    id: 1,
    url: '',
    icon: <IconTwitter />
  },
  {
    id: 2,
    url: '',
    icon: <IconFacebook />
  },
  {
    id: 3,
    url: '',
    icon: <IconInstagram />
  },
  {
    id: 4,
    url: '',
    icon: <IconGithub />
  }
]

const FOOTER_MENUS = [
  {
    id: 1,
    title: 'Company',
    menus: [
      {
        text: 'About',
        path: '/about'
      },
      {
        text: 'Features',
        path: '/features'
      },
      {
        text: 'Works',
        path: '/works'
      },
      {
        text: 'Career',
        path: '/career'
      }
    ]
  },
  {
    id: 2,
    title: 'Help',
    menus: [
      {
        text: 'Customer support',
        path: '/support'
      },
      {
        text: 'Delivery details',
        path: '/delivery'
      },
      {
        text: 'Terms & conditions',
        path: '/terms-condition'
      },
      {
        text: 'Privacy policy',
        path: '/privacy-policy'
      }
    ]
  },
  {
    id: 3,
    title: 'FAQ',
    menus: [
      {
        text: 'Account',
        path: '/account'
      },
      {
        text: 'Manage deliveries',
        path: '/manage-deliveries'
      },
      {
        text: 'Orders',
        path: '/orders'
      },
      {
        text: 'Payments',
        path: '/payments'
      }
    ]
  },
  {
    id: 4,
    title: 'Resources',
    menus: [
      {
        text: 'Free eBooks',
        path: '/ebooks'
      },
      {
        text: 'Development tutorial',
        path: '/development-tutorial'
      },
      {
        text: 'How to - Blog',
        path: '/blogs'
      },
      {
        text: 'Youtube playlists',
        path: '/playlist'
      }
    ]
  }
]

const Footer = () => {
  return (
    <footer className='w-full bg-[#F0F0F0]'>
      <div className='container h-full relative pt-[140px] pb-[82px]'>
        {/* Top */}
        <div className='px-16 py-9 rounded-[20px] bg-black absolute top-0 -translate-y-2/4 left-[1rem] lg:left-[4rem] xl:left-[5rem] 2xl:left-[6rem] right-[1rem] lg:right-[4rem] xl:right-[5rem] 2xl:right-[6rem]'>
          <div className='flex items-center justify-between gap-8 flex-col md:flex-row'>
            <div className='uppercase text-white text-[40px] leading-[45px] font-bold max-w-[550px]'>
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </div>
            <form
              method='POST'
              className='flex flex-col gap-[14px] w-full md:max-w-[350px]'
            >
              <div className='w-full h-12 rounded-[62px] px-4 overflow-hidden bg-white flex items-center gap-3'>
                <Image
                  src='/assets/images/icon-mail.svg'
                  alt='icon-mail'
                  width={20}
                  height={16}
                />
                <input
                  type='text'
                  placeholder='Enter your email address'
                  className='outline-none w-full h-full placeholder:text-black placeholder:opacity-40'
                />
              </div>
              <Button
                type='submit'
                variant='white'
                className='hover:bg-white hover:text-black w-full'
              >
                Subscribe to Newsletter
              </Button>
            </form>
          </div>
        </div>

        {/* Middle */}
        <div className='grid grid-cols-12 gap-5 pb-[50px] border-b border-b-black border-opacity-10'>
          <div className='col-span-12 md:col-span-3'>
            <Logo />
            <p className='text-sm opacity-60 mt-6'>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <ul className='flex items-center gap-3 mt-9'>
              {SOCIALS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    target='_blank'
                    className='flex items-center justify-center size-7 rounded-full border border-black border-opacity-20 bg-white transition-colors duration-300 group hover:bg-black hover:text-white'
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='col-span-12 md:col-span-9'>
            <div className='flex md:justify-evenly flex-wrap md:flex-nowrap gap-[60px]'>
              {FOOTER_MENUS.map((item) => {
                const { id, menus, title } = item

                return (
                  <div key={id} className='w-[calc(50%-(60px/2))] md:w-fit'>
                    <h3 className='uppercase font-medium mb-[14px]'>{title}</h3>
                    <ul>
                      {menus.map((menuItem, index) => (
                        <li key={index}>
                          <Link
                            href={menuItem.path}
                            className='flex py-3 capitalize opacity-60'
                          >
                            {menuItem.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className='flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between pt-5'>
          <p className='text-sm text-b opacity-60'>
            Shop.co © 2000-2023, All Rights Reserved
          </p>

          <ul className='flex items-center gap-3'>
            {PAYMENT_ICONS.map((item) => (
              <li
                key={item}
                className='h-[30px] w-[46px] bg-white rounded flex items-center justify-center'
              >
                <Image src={item} alt='icon-payment' width={32} height={10} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
