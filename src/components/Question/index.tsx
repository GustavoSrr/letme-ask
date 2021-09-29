import React, { ReactNode } from 'react'
import clss from 'classnames'

import { Container, Footer, UserInfo } from './styles'

type QuestionProps = {
  content: string,
  author: {
    name: string,
    avatar: string
  },
  children?: ReactNode,
  isAnswered?: boolean,
  isHightlighted?: boolean
}

export function Question ({
  content,
  author,
  children,
  isAnswered = false,
  isHightlighted = false
}: QuestionProps) {
  return (
    <Container className={clss(
      'Question',
      { Answered: isAnswered },
      { Hightlighted: isHightlighted && !isAnswered }
    )}>
      <pre>{content}</pre>
      <Footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <div>{children}</div>
      </Footer>
    </Container>
  )
}
