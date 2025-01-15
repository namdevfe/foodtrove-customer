import LoginForm from './_components/LoginForm'

const RegisterPage = () => {
  return (
    <div className='flex flex-col gap-12 h-[calc(100vh-238px)]'>
      <div>
        <h1 className='text-4xl font-bold mb-6'>Login to Shopping</h1>
        <p className='text-sm opacity-60'>Enter your details below</p>
      </div>

      <LoginForm />
    </div>
  )
}

export default RegisterPage
