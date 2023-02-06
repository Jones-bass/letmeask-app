import { ButtonContainer } from './styles'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string
}

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  return <ButtonContainer variant={variant} {...props} />
}
