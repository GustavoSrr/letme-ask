import { useEffect, useState } from 'react'
import { database } from '../services/firebase'
import { useAuth } from './useAuth'

type firebaseQuestionsType = Record<string, {
  author: {
    name: string,
    avatar: string
  },
  content: string,
  isHightlighted: boolean,
  isAnswered: boolean
  likes: Record<string, {
    authorId: string
  }>
}>

type QuestionType = {
  id: string,
  author: {
    name: string,
    avatar: string
  },
  content: string,
  isHightlighted: boolean,
  isAnswered: boolean,
  likeCount: number,
  likeId: string | undefined
}

export function useRoom (roomId: string) {
  const { user } = useAuth()

  const [questions, setQuestions] = useState<QuestionType[]>([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`)
    roomRef.on('value', db => {
      if (db.val() === null) {
        return
      }
      if (db.val().questions) {
        const firebaseQuestions: firebaseQuestionsType = db.val().questions
        const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
          return {
            id: key,
            author: value.author,
            content: value.content,
            isHightlighted: value.isHightlighted,
            isAnswered: value.isAnswered,
            likeCount: Object.values(value.likes ?? {}).length,
            likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0]
          }
        })
        setTitle(db.val().title)
        setQuestions(parsedQuestions)
      }
    })

    return () => {
      roomRef.off('value')
    }
  }, [roomId, user?.id])

  return { questions, title }
}
