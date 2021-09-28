import React, { FormEvent, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useRoom } from '../../hooks/useRoom'

import { Button } from '../../components/Button/index'
import { Question } from '../../components/Question/index'
import { RoomCode } from '../../components/RoomCode/index'

import Logo from '../../assets/images/logo.svg'
import EmptyQuestions from '../../assets/images/empty-questions.svg'

import { database } from '../../services/firebase'

import '../../styles/global/rooms.scss'

type RoomParams = {
  id: string
}

export function Room() {
  const { user } = useAuth()

  const params = useParams<RoomParams>()
  const [newQuestion, setNewQuestion] = useState('')

  const roomId = params.id
  const { questions, title } = useRoom(roomId)

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault()

    if (newQuestion.trim() === '') return
    if (!user) throw new Error('Você não está logado')

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      isHightlighted: false,
      isAnswered: false
    }
    await database.ref(`rooms/${roomId}/questions`).push(question)
    setNewQuestion('')
  }

  async function handleLikeQuestion(questionId: string, likeId: string | undefined) {
    if (likeId) {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`).remove()
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId: user?.id
      })
    }
  }

  return (
    <div id="RoomPage">
      <header>
        <div className="Content">
          <img src={Logo} alt="Logo" />
          <RoomCode code={roomId} />
        </div>
      </header>
      <main className="Content">
        <div className="RoomTitle">
          <h1>Sala {title}</h1>
          {questions.length === 1 && <span>{questions.filter(q => q.isAnswered === false).length} pergunta</span>}
          {questions.length > 1 && <span>{questions.filter(q => q.isAnswered === false).length} perguntas</span>}
        </div>
        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            value={newQuestion}
            required
            maxLength={2000}
            onChange={(event) => setNewQuestion(event.target.value)}
          />
          <div id="FormFooter">
            {user
              ? (
                <div className="UserInfo">
                  <img src={user.avatar} alt={user.name} />
                  <span>{user.name}</span>
                </div>
              )
              : (
                <span>Para enviar uma pergunta <button>faça o login</button>.</span>
              )
            }
            <Button type="submit" disabled={!user} rounded transparent >
              <svg height="20" width="20" aria-hidden="true" focusable="false" data-prefix="far" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"></path>
              </svg>
            </Button>
          </div>
        </form>
        <div className="Options">
          <label>Ordenado por</label>
          <select name="Options" className="SelectOptions">
            <option value="Latest">Mais recentes</option>
            <option value="Oldest">Mais antigos</option>
            <option value="MostLiked">Curtidas</option>
          </select>
        </div>
        {/* Perguntas destacadas */}
        <div className="QuestionList">
          {questions.filter(q => q.isHightlighted === true && q.isAnswered === false).length > 0 && <h1>Perguntas Destacadas</h1>}
          {questions
            ? (
              questions.filter(question => question.isHightlighted === true && question.isAnswered === false).reverse().map(quest => {
                return (
                  <Question
                    content={quest.content}
                    author={quest.author}
                    isAnswered={quest.isAnswered}
                    isHightlighted={quest.isHightlighted}
                    key={quest.id}
                  >
                    {!quest.isAnswered && (
                      <button className={`LikeButton ${quest.likeId ? 'Liked' : ''}`} aria-label="Marcar como gostei" title="Curtir" type="button" onClick={() => handleLikeQuestion(quest.id, quest.likeId)}>
                        {quest.likeCount > 0 && <span>{quest.likeCount}</span>}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    )}
                  </Question>
                )
              })
            )
            : ('')}
        </div>
        {/* Todas perguntas */}
        <div className="QuestionList">
          {questions.filter(q => q.isHightlighted === false && q.isAnswered === false).length > 0 && <h1>Todas perguntas</h1>}
          {questions[0]
            ? (
              questions.filter(question => question.isHightlighted === false && question.isAnswered === false).reverse().map(quest => {
                return (
                  <Question
                    content={quest.content}
                    author={quest.author}
                    isAnswered={quest.isAnswered}
                    isHightlighted={quest.isHightlighted}
                    key={quest.id}
                  >
                    {!quest.isAnswered && (
                      <button className={`LikeButton ${quest.likeId ? 'Liked' : ''}`} aria-label="Marcar como gostei" title="Curtir" type="button" onClick={() => handleLikeQuestion(quest.id, quest.likeId)}>
                        {quest.likeCount > 0 && <span>{quest.likeCount}</span>}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    )}
                  </Question>
                )
              }))
            : (
              <div className="NoQuestions">
                <img src={EmptyQuestions} alt="Sem perguntas" />
                <h1>Nenhuma pergunta por aqui...</h1>
                <p>Faça uma pergunta e seja a primeira pessoa a ser respondida na sala!</p>
              </div>
            )}
        </div>
        {/* Perguntas respondidas */}
        <div className="QuestionList">
          {questions
            ? (
              questions.filter(question => question.isHightlighted === false && question.isAnswered === true).reverse().map(quest => {
                return (
                  <Question
                    content={quest.content}
                    author={quest.author}
                    isAnswered={quest.isAnswered}
                    isHightlighted={quest.isHightlighted}
                    key={quest.id}
                  />
                )
              }))
            : ('')}
        </div>
      </main>
    </div>
  )
}
