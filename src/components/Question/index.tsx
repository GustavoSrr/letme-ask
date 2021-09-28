import React, { ReactNode } from 'react'
import clss from 'classnames'

import './styles.scss'

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
    <div className={clss(
      'Question',
      { Answered: isAnswered },
      { Hightlighted: isHightlighted && !isAnswered }
    )}>
      <pre>{content}</pre>
      <footer>
        <div className="UserInfo">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>

    </div>
  )
}
