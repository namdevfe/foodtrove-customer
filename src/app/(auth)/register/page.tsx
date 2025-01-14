import RegisterForm from './_components/RegisterForm'

const RegisterPage = () => {
  return (
    <div className='flex flex-col gap-12 h-[calc(100vh-238px)]'>
      <div>
        <h1 className='text-4xl font-bold mb-6'>Create an account</h1>
        <p className='text-sm opacity-60'>Enter your details below</p>
      </div>

      <RegisterForm />
    </div>
  )
}

export default RegisterPage
