import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Res<T> = [
  T,
  Dispatch<SetStateAction<T>>
]

export function usePersistedState<T> (key: string, initial: T): Res<T> {
  const [state, setState] = useState(() => {
    const storageItem = localStorage.getItem(key)

    if (storageItem) {
      return JSON.parse(storageItem)
    } else {
      return initial
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
