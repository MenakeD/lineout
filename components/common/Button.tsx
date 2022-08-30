import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'primary' | 'secondary'
  loading?: boolean
  children: ReactNode | string
  fullWidth?: boolean
}

const Button = ({
  disabled = false,
  loading = false,
  children,
  variant = 'primary',
  fullWidth,
  ...rest
}: Props) => {
  return (
    <button
      className={`${fullWidth ? 'w-full' : 'min-w-[96px]'} ${
        variant === 'primary'
          ? `${
              loading || disabled ? 'text-gray-dark' : 'text-gray-main'
            } bg-yellow-main`
          : `${
              loading || disabled ? 'text-yellow-dark' : 'text-yellow-main'
            } bg-gray-main`
      } text-sm md:text-base font-bold py-2.5 px-4 rounded-lg shadow transition ease-in ${
        loading || disabled
          ? 'cursor-not-allowed bg-opacity-70'
          : 'cursor-pointer hover:bg-opacity-70'
      }`}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? 'Loading...' : children}
    </button>
  )
}

export default Button
