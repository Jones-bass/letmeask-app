import { ReactNode } from 'react'
import { QuestionContainer, Footer, LikeButton } from './styles'

type QuestionProps = {
  content?: string
  author: {
    name: string
    avatar: string
  }
  children?: ReactNode
  isAnswered?: boolean
  isHighlighted?: boolean
}

export function Question({
  content,
  author,
  isAnswered = false,
  isHighlighted = false,
  children,
}: QuestionProps) {
  return (
    <QuestionContainer isAnswered={isAnswered} isHighlighted={isHighlighted}>
      <p>{content}</p>

      <Footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <LikeButton>{children}</LikeButton>
      </Footer>
    </QuestionContainer>
  )
}
