import React, { ButtonHTMLAttributes } from 'react'
import './styles.scss'

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  outlined?: boolean,
  rounded?: boolean,
  transparent?: boolean
};
export function Button ({ outlined = false, rounded = false, transparent = false, ...props }: BtnProps) {
  return <button className={`Button ${outlined ? 'outline' : ''} ${rounded ? 'round' : ''} ${transparent ? 'transparent' : ''}`} {...props} />
}
