'use client'

import { Button } from '@/components'
import { authService } from '@/services'
import { cn } from '@/utils'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Bounce, toast } from 'react-toastify'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = async (data: any) => {
    const payload = { ...data }
    setLoading(true)
    try {
      const res = await authService.login(payload)

      if (res.statusCode === 200 && res.data) {
        reset()
        toast.success(res.message, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Bounce
        })

        // Save token to localStorage
        localStorage.setItem('token', JSON.stringify(res.data))
        const resFromNextServer = await authService.auth(res.data)
        console.log('🚀resFromNextServer---->', resFromNextServer)
      }
    } catch (error: any) {
      toast.error(error.message, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      method='POST'
      onSubmit={handleSubmit(onSubmit)}
      className={cn({
        'pointer-events-none opacity-60': loading
      })}
    >
      <div className='mb-10'>
        <div className='h-8 w-full  border-b-[1px] overflow-hidden'>
          <input
            placeholder='Email'
            className='h-full w-full py-2 outline-none'
            {...register('email', {
              required: 'Email is required.',
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: 'Invalid email.'
              }
            })}
          />
        </div>
        {errors && (
          <p className='text-sm text-red-600'>
            {errors?.email?.message?.toString() || ''}
          </p>
        )}
      </div>
      <div className='mb-10'>
        <div className='h-8 w-full border-b-[1px] overflow-hidden'>
          <input
            type='password'
            placeholder='Password'
            className='h-full w-full py-2 outline-none'
            {...register('password', {
              required: 'Password is required.',
              minLength: {
                value: 6,
                message: 'Password must have least 6 charater.'
              }
            })}
          />
        </div>
        {errors && (
          <p className='text-sm text-red-600'>
            {errors?.password?.message?.toString() || ''}
          </p>
        )}
      </div>

      <div className='mb-4'>
        <Button type='submit' size='large' className='w-full' loading={loading}>
          Login
        </Button>
      </div>

      <div className='flex items-center justify-center gap-4 text-sm'>
        <p>Already have account?</p>
        <Link href='/login' className='font-medium underline'>
          Log In
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
