import React, { ButtonHTMLAttributes } from 'react'

import { Btn } from './styles'

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  outlined?: boolean,
  rounded?: boolean,
  transparent?: boolean
};

export function Button ({
  outlined = false,
  rounded = false,
  transparent = false,
  ...props
}: BtnProps) {
  return <Btn className={`Button ${outlined ? 'outline' : ''} ${rounded ? 'round' : ''} ${transparent ? 'transparent' : ''}`} {...props} />
}
