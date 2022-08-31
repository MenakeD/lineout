import { NextPage } from 'next'
import Link from 'next/link'
import Button from '../components/common/Button'
import Form from '../components/common/Form'
import Input from '../components/common/Form/Input'
import Select from '../components/common/Form/Select'

const SignUpPage: NextPage = () => {
  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <div className='flex flex-col justify-center items-center h-[90vh] pt-6'>
      <h1 className='font-bold text-3xl sm:text-4xl text-yellow-main mb-10'>
        Sign Up
      </h1>
      <Form className='flex flex-col w-full h-full' onSubmit={onSubmit}>
        <Input
          wrapperStyles='mb-4'
          label='Name'
          name='name'
          required
          variant='light'
          registerOptions={{ required: '*Required' }}
          placeholder='Ex: John Doe'
        />
        <Input
          wrapperStyles='mb-4'
          label='Email'
          name='email'
          type={'email'}
          required
          variant='light'
          registerOptions={{ required: '*Required' }}
          placeholder='Ex: johndoe@gmail.com'
        />
        <Input
          wrapperStyles='mb-4'
          label='Password'
          name='password'
          type={'password'}
          required
          variant='light'
          registerOptions={{ required: '*Required' }}
          placeholder='********'
        />
        <Select
          wrapperStyles='mb-8'
          label='Role'
          name='role'
          required
          variant='light'
          registerOptions={{ required: '*Required' }}
        >
          <option value='customer'>Customer</option>
          <option value='merchant'>Merchant</option>
        </Select>
        <div className='flex-grow flex flex-col items-center justify-end'>
          <p className='text-offWhite text-xs mb-1'>Already have an account?</p>
          <Link href='/login'>
            <a className='font-semibold text-lg text-yellow-main hover:text-yellow-dark transition ease-in mb-6'>
              Login
            </a>
          </Link>
          <Button type='submit' fullWidth>
            Sign Up
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default SignUpPage
