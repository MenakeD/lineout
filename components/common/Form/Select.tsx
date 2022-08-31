import { DetailedHTMLProps, SelectHTMLAttributes } from 'react'
import { FieldErrors, RegisterOptions } from 'react-hook-form'

type Props = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  variant?: 'dark' | 'light'
  label: string
  name: string
  wrapperStyles?: string
  errors?: FieldErrors
  register?: any
  registerOptions?: RegisterOptions
  children: JSX.IntrinsicElements['option'] | JSX.IntrinsicElements['option'][]
}

const Select = ({
  variant = 'light',
  label,
  name,
  register,
  registerOptions,
  errors,
  wrapperStyles,
  className,
  required = false,
  children,
  ...rest
}: Props) => {
  return (
    <div role='select' className={`relative ${wrapperStyles} flex flex-col`}>
      <label
        className={`text-sm md:text-base ${
          variant === 'light' ? 'text-offWhite' : 'text-gray-dark'
        } mb-0.5`}
        htmlFor={name}
      >
        {label}
        <span
          className={`absolute top-0 ${
            variant === 'light' ? 'text-red-500' : 'text-red-400'
          }`}
        >
          {required && '*'}
        </span>
      </label>
      <select
        id={name}
        {...rest}
        className={`${className} py-2.5 px-3 ring-1 focus:ring-2 ${
          errors && errors[name] && errors[name]!.message
            ? `ring-red-400 ${
                variant === 'light'
                  ? 'bg-gray-main text-offWhite'
                  : 'bg-offWhite text-gray-main'
              }`
            : `${
                variant === 'light'
                  ? 'ring-gray-400 hover:ring-yellow-main focus:ring-yellow-main bg-gray-main text-offWhite'
                  : 'ring-gray-500 hover:ring-yellow-dark focus:ring-yellow-dark bg-offWhite text-gray-main'
              }`
        } rounded-lg transition ease-in outline-none`}
        {...register(name, registerOptions)}
      >
        <option value=''>Select one...</option>
        {children}
      </select>
      {errors && errors[name] && errors[name]!.message && (
        <p className={`absolute -bottom-4 right-0 text-xs text-red-400`}>
          {errors[name]!.message as string}
        </p>
      )}
    </div>
  )
}

export default Select
