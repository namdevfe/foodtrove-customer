'use client'
import { Button } from '@/components'
import { useRef } from 'react'

const HomePage = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  return (
    <main className='pt-[500px] h-[2000px]'>
      <div className='container'>
        <Button
          ref={buttonRef}
          onClick={() =>
            buttonRef.current?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          My Button
        </Button>
      </div>
    </main>
  )
}

export default HomePage
