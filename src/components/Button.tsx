import { ButtonContainer } from './styles'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ ...props }: ButtonProps) {
  return <ButtonContainer {...props} />
}
