import {
  Children,
  createElement,
  DetailedHTMLProps,
  FormHTMLAttributes,
} from 'react'
import { useForm } from 'react-hook-form'

type Props = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
> & {
  children: any
  // eslint-disable-next-line no-unused-vars
  onSubmit: (data: any) => void
  defaultValues?: any
}

export default function Form({
  defaultValues,
  children,
  onSubmit,
  ...rest
}: Props) {
  const methods = useForm({ defaultValues })
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods

  return (
    <form {...rest} onSubmit={handleSubmit(onSubmit)}>
      {Children.map(children, (child) => {
        return child.props.name
          ? createElement(child.type, {
              ...{
                ...child.props,
                register,
                errors,
                key: child.props.name,
              },
            })
          : child
      })}
    </form>
  )
}
