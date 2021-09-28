import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
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

export function AdminRoom () {
  const history = useHistory()
  const params = useParams<RoomParams>()
  const roomId = params.id

  const { questions, title } = useRoom(roomId)

  async function handleCheckQuestionAsAnswered (questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    })
  }

  async function handleHightlightQuestion (questionId: string) {
    const getQuestion = await database.ref(`rooms/${roomId}/questions/${questionId}`).get()

    if ((await getQuestion).val().isHightlighted === false) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isHightlighted: true
      })
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isHightlighted: false
      })
    }
  }

  async function handleDeleteQuestion (questionId: string) {
    if (window.confirm('Tem certeza que deseja excluir essa pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  async function handleEndRoom () {
    database.ref(`rooms/${roomId}`).update({
      endedAt: new Date()
    })

    history.push('/')
  }

  return (
    <div id="RoomPage">
      <header>
        <div className="Content">
          <img src={Logo} alt="Logo" />
          <div>
            <RoomCode code={roomId} />
            <Button outlined onClick={handleEndRoom}>Encerrar sala</Button>
          </div>
        </div>
      </header>
      <main className="Content">
        <div className="RoomTitle">
          <h1>Sala {title}</h1>
          {questions.length === 1 && <span>{questions.filter(q => q.isAnswered === false).length} pergunta</span>}
          {questions.length > 1 && <span>{questions.filter(q => q.isAnswered === false).length} perguntas</span>}
        </div>
        {/* Perguntas destacadas */}
        <div className="QuestionList">
          {questions.filter(q => q.isHightlighted === true).length > 0 && <h1>Perguntas Destacadas</h1>}
          {questions
            ? (
                questions.filter(question => question.isHightlighted === true).reverse().map(quest => {
                  return (
                    <Question content={quest.content}
                      author={quest.author}
                      isAnswered={quest.isAnswered}
                      isHightlighted={quest.isHightlighted}
                      key={quest.id}
                    >
                      {!quest.isAnswered && (
                        <>
                          <button type="button" className="AnsweredButton" onClick={() => handleCheckQuestionAsAnswered(quest.id)}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12.0003" cy="11.9998" r="9.00375" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M8.44287 12.3391L10.6108 14.507L10.5968 14.493L15.4878 9.60193" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                          <button type="button" className="HightlightButton" onClick={() => handleHightlightQuestion(quest.id)}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 17.9999H18C19.657 17.9999 21 16.6569 21 14.9999V6.99988C21 5.34288 19.657 3.99988 18 3.99988H6C4.343 3.99988 3 5.34288 3 6.99988V14.9999C3 16.6569 4.343 17.9999 6 17.9999H7.5V20.9999L12 17.9999Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        </>
                      )}
                      <button type="button" className="DeleteButton" onClick={() => handleDeleteQuestion(quest.id)}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 5.99988H5H21" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </Question>
                  )
                })
              )
            : (
                ''
              )
          }
        </div>
        {/* Todas perguntas */}
        <div className="QuestionList">
          {questions.filter(q => q.isHightlighted === false).length > 0 && <h1>Todas perguntas</h1>}
          {questions[0]
            ? (
                questions.filter(question => question.isHightlighted === false && question.isAnswered === false).reverse().map(quest => {
                  return (
                    <Question content={quest.content}
                      author={quest.author}
                      isAnswered={quest.isAnswered}
                      isHightlighted={quest.isHightlighted}
                      key={quest.id}
                    >
                      {!quest.isAnswered && (
                        <>
                          <button type="button" className="AnsweredButton" onClick={() => handleCheckQuestionAsAnswered(quest.id)}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12.0003" cy="11.9998" r="9.00375" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M8.44287 12.3391L10.6108 14.507L10.5968 14.493L15.4878 9.60193" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                          <button type="button" className="HightlightButton" onClick={() => handleHightlightQuestion(quest.id)}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 17.9999H18C19.657 17.9999 21 16.6569 21 14.9999V6.99988C21 5.34288 19.657 3.99988 18 3.99988H6C4.343 3.99988 3 5.34288 3 6.99988V14.9999C3 16.6569 4.343 17.9999 6 17.9999H7.5V20.9999L12 17.9999Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        </>
                      )}
                      <button type="button" className="DeleteButton" onClick={() => handleDeleteQuestion(quest.id)}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 5.99988H5H21" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </Question>
                  )
                })
              )
            : (
                <div className="NoQuestions">
                  <img src={EmptyQuestions} alt="Sem perguntas" />
                  <h1>Nenhuma pergunta por aqui...</h1>
                  <p>Compartilhe o código desta sala com seus amigos e começe a responder perguntas!</p>
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