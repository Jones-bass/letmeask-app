import { ReactNode } from 'react'
import { QuestionContainer, Footer } from './styles'

type QuestionProps = {
  content?: string
  author: {
    name: string
    avatar: string
  }
  children?: ReactNode
}

export function Question({ content, author, children }: QuestionProps) {
  return (
    <QuestionContainer>
      <p>{content}</p>

      <Footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </Footer>
    </QuestionContainer>
  )
}
