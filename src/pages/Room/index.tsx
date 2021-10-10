import React, { FormEvent, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useRoom } from '../../hooks/useRoom'

import { Button } from '../../components/Button/index'
import { Question } from '../../components/Question/index'
import { Header } from '../../components/Header'

import EmptyQuestions from '../../assets/images/empty-questions.svg'

import { database } from '../../services/firebase'

import { Container, Main, Title, Form, QuestionList, NoQuestions } from './styles'

type RoomParams = {
  id: string
}

export const Room: React.FC = () => {
  const { user } = useAuth()

  const params = useParams<RoomParams>()
  const [newQuestion, setNewQuestion] = useState('')

  const roomId = params.id
  const { questions, title } = useRoom(roomId)

  async function handleSendQuestion (event: FormEvent) {
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

  async function handleLikeQuestion (questionId: string, likeId: string | undefined) {
    if (likeId) {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`).remove()
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId: user?.id
      })
    }
  }

  return (
    <Container>
      <Header roomId={roomId}/>
      <Main>
        <Title>
          <h1>Sala {title}</h1>
          {questions.filter(q => q.isAnswered === false).length === 1 && <span>{questions.filter(q => q.isAnswered === false).length} pergunta</span>}
          {questions.filter(q => q.isAnswered === false).length > 1 && <span>{questions.filter(q => q.isAnswered === false).length} perguntas</span>}
        </Title>
        <Form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            value={newQuestion}
            required
            autoFocus
            maxLength={2000}
            onChange={(event) => setNewQuestion(event.target.value)}
          />
          <div>
            {user
              ? (
                <div>
                  <img src={user.avatar} alt={user.name} />
                  <span>{user.name}</span>
                </div>
                )
              : (
                <span>Para enviar uma pergunta <button>faça o login</button>.</span>
                )
            }
            <Button id="SendBtn" type="submit" disabled={!user} rounded transparent title="Perguntar">
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.22617 15.7087L1.57383 13.259C0.870701 12.9621 0.780857 11.9777 1.48789 11.5715L19.5934 1.1262C20.2691 0.735576 21.1168 1.30589 20.984 2.09495L18.1715 18.9699C18.0699 19.5676 17.4371 19.9152 16.8824 19.6809L11 17.6802M6.22617 15.7087L15.438 7.12069C15.4778 7.08351 15.5303 7.06284 15.5848 7.06284V7.06284C15.7594 7.06284 15.8614 7.25957 15.7609 7.40226L9.7695 15.9076C9.38508 16.4533 9.63306 17.2153 10.265 17.4302L11 17.6802M6.22617 15.7087L7.07203 20.2183C7.23379 21.0807 8.34849 21.3316 8.86405 20.6216L11 17.6802" stroke="black" strokeWidth="1.3" />
              </svg>
            </Button>
          </div>
        </Form>
        {/* Perguntas destacadas */}
        <QuestionList>
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
        </QuestionList>
        {/* Todas perguntas */}
        <QuestionList>
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
              <NoQuestions>
                <img src={EmptyQuestions} alt="Sem perguntas" />
                <h1>Nenhuma pergunta por aqui...</h1>
                <p>Faça uma pergunta e seja a primeira pessoa a ser respondida na sala!</p>
              </NoQuestions>
              )}
        </QuestionList>
        {/* Perguntas respondidas */}
        <QuestionList>
          {questions
            ? (
                questions.filter(question => question.isAnswered === true).reverse().map(quest => {
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
        </QuestionList>
      </Main>
    </Container>
  )
}
