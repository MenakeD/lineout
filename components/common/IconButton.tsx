import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import { FaSpinner } from 'react-icons/fa'

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'primary' | 'secondary'
  loading?: boolean
  children: ReactNode | string
}

const IconButton = ({
  disabled = false,
  loading = false,
  children,
  variant = 'primary',
  ...rest
}: Props) => {
  return (
    <button
      className={`${
        variant === 'primary'
          ? `${
              loading || disabled ? 'text-gray-main' : 'text-gray-dark'
            } bg-yellow-main `
          : `${
              loading || disabled ? 'text-yellow-dark' : 'text-yellow-main'
            } bg-gray-main`
      } text-sm md:text-base font-bold h-10 md:h-11 w-10 md:w-11 flex items-center justify-center rounded-lg shadow transition ease-in ${
        loading || disabled
          ? 'cursor-not-allowed bg-opacity-70'
          : 'cursor-pointer hover:bg-opacity-70'
      }`}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? <FaSpinner className='text-xl animate-spin' /> : children}
    </button>
  )
}

export default IconButton
