import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { firebase, auth } from '../services/firebase'

type User = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextType = {
  user: User | undefined;
  signInGoogle: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const authContext = createContext({} as AuthContextType)

export function AuthContextProvider (props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })
    return () => {
      unSubscribe()
    }
  }, [])

  async function signInGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider()

    const res = await auth.signInWithPopup(provider)

    if (res.user) {
      const { displayName, photoURL, uid } = res.user

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }
  return (
    <authContext.Provider value={{ user, signInGoogle }}>
      {props.children}
    </authContext.Provider>
  )
}
