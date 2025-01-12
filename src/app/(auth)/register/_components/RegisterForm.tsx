/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Button } from '@/components'
import { cn } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Bounce, toast } from 'react-toastify'

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = async (data: any) => {
    // Call Register API
    setLoading(true)
    try {
      const payload = { ...data }
      const res = await fetch('http://localhost:8017/api/v1/auth/register', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      const resData = await res.json()

      // Notification
      if (resData?.statusCode === 201 && resData?.data?._id) {
        reset()
        toast.success(resData?.message || 'Register account is successfully.', {
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
      } else {
        throw resData
      }
    } catch (error: any) {
      console.log('🚀error---->', error)
      toast.error(error.message || 'Register account is successfully.', {
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
      setTimeout(() => {
        setLoading(false)
      }, 3000)
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
        <div className='h-8 w-full border-b-[1px] overflow-hidden'>
          <input
            placeholder='First Name'
            className='h-full w-full py-2 outline-none'
            {...register('firstName', {
              required: 'firstName is required.'
            })}
          />
        </div>
        {errors && (
          <p className='text-sm text-red-600'>
            {errors?.firstName?.message?.toString() || ''}
          </p>
        )}
      </div>
      <div className='mb-10'>
        <div className='h-8 w-full border-b-[1px] overflow-hidden'>
          <input
            placeholder='Last Name'
            className='h-full w-full py-2 outline-none'
            {...register('lastName', {
              required: 'lastName is required.'
            })}
          />
        </div>
        {errors && (
          <p className='text-sm text-red-600'>
            {errors?.lastName?.message?.toString() || ''}
          </p>
        )}
      </div>
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

      <div className='flex flex-col gap-4 mb-8'>
        <Button type='submit' size='large' className='w-full' loading={loading}>
          Create Account
        </Button>
        <Button variant='white' size='large' className='w-full border'>
          <Image
            src='/assets/images/icon-google.svg'
            alt='icon-google'
            width={24}
            height={24}
            className='flex-shrink-0'
          />
          <span>Sign up with Google</span>
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

export default RegisterForm
