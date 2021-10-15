import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useRoom } from '../../hooks/useRoom'
import { ThemeContext } from 'styled-components'
import { Helmet } from 'react-helmet'

import { Question } from '../../components/Question/index'
import { AdminHeader } from '../../components/AdminHeader'
import { toast, Toaster } from 'react-hot-toast'

import EmptyQuestions from '../../assets/images/empty-questions.svg'

import { database } from '../../services/firebase'

import { Container, Main, Title, QuestionList, NoQuestions } from './styles'

type RoomParams = {
  id: string
}

export const AdminRoom: React.FC = () => {
  const params = useParams<RoomParams>()
  const roomId = params.id

  const { questions, title } = useRoom(roomId)
  const { colors } = useContext(ThemeContext)

  const permissionError = () => toast.error('Você não tem permissão para isso.')

  async function handleCheckQuestionAsAnswered (questionId: string) {
    try {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isAnswered: true
      }).then(() => {
        toast.success('Pergunta marcada como respondida.')
      })
    } catch (e) {
      return permissionError()
    }
  }

  async function handleHightlightQuestion (questionId: string) {
    const getQuestion = await database.ref(`rooms/${roomId}/questions/${questionId}`).get()

    if ((await getQuestion).val().isHightlighted === false) {
      try {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
          isHightlighted: true
        }).then(() => {
          toast.success('Destaque adicionado.')
        })
      } catch (e) {
        return permissionError()
      }
    } else {
      try {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
          isHightlighted: false
        }).then(() => {
          toast.success('Destaque removido.')
        })
      } catch (e) {
        return permissionError()
      }
    }
  }

  async function handleDeleteQuestion (questionId: string) {
    if (window.confirm('Tem certeza que deseja excluir essa pergunta?')) {
      try {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).remove().then(() => {
          toast.success('Pergunta excluída.')
        })
      } catch (e) {
        return permissionError()
      }
    }
  }

  return (
    <>
      <Helmet>
          <title>Adm | {title}</title>
      </Helmet>
      <Container>
        <Toaster
          toastOptions={{
            success: {
              style: {
                borderRadius: '8px',
                backgroundColor: colors.textAreaColor,
                color: colors.textTitleColor,
                boxShadow: 'none'
              },
              iconTheme: {
                primary: '#2fd373',
                secondary: colors.textAreaColor
              }
            },
            error: {
              style: {
                borderRadius: '8px',
                backgroundColor: colors.textAreaColor,
                color: colors.textTitleColor,
                boxShadow: 'none'
              },
              iconTheme: {
                primary: '#e73f5d',
                secondary: colors.textAreaColor
              }
            }
          }}
        />
        <AdminHeader roomId={roomId} />
        <Main>
          <Title>
            <h1>Administrador | {title}</h1>
            {questions.length === 1 && <span>{questions.length} pergunta</span>}
            {questions.length > 1 && <span>{questions.length} perguntas</span>}
          </Title>
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
                          <>
                            <button
                              type="button"
                              className="HightlightButton"
                              title="Remover destaque da pergunta"
                              onClick={() => handleHightlightQuestion(quest.id)}
                            >
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2195 1.96888L12.2295 5.65456C12.4812 6.11608 12.9271 6.44001 13.4438 6.53677L17.5702 7.30951C17.7647 7.34593 17.8418 7.58319 17.7059 7.72699L14.8217 10.7776C14.4606 11.1596 14.2903 11.6837 14.3579 12.205L14.8981 16.3683C14.9236 16.5646 14.7218 16.7112 14.543 16.6263L10.7505 14.826C10.2755 14.6006 9.72445 14.6006 9.24955 14.826L5.45699 16.6263C5.27822 16.7112 5.0764 16.5645 5.10186 16.3683L5.64208 12.205C5.70973 11.6837 5.53943 11.1596 5.17828 10.7776L2.29413 7.72699C2.15818 7.58319 2.23527 7.34593 2.42978 7.30951L6.55621 6.53677C7.07292 6.44001 7.51876 6.11608 7.77046 5.65456L9.78052 1.96888C9.87527 1.79515 10.1247 1.79515 10.2195 1.96888Z" stroke="#737380" strokeWidth="1.3"/>
                              </svg>
                            </button>
                            <button
                              type="button"
                              className="AnsweredButton"
                              title="Marcar pergunta como respondida"
                              onClick={() => handleCheckQuestionAsAnswered(quest.id)}
                            >
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.0003" cy="11.9998" r="9.00375" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.44287 12.3391L10.6108 14.507L10.5968 14.493L15.4878 9.60193" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                          </>
                        )}
                        <button
                          type="button"
                          className="DeleteButton"
                          title="Deletar pergunta"
                          onClick={() => handleDeleteQuestion(quest.id)}
                        >
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
          </QuestionList>
          {/* Todas perguntas */}
          <QuestionList>
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
                          <button
                            type="button"
                            className="HightlightButton"
                            title="Destacar pergunta"
                            onClick={() => handleHightlightQuestion(quest.id)}
                          >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.2195 1.96888L12.2295 5.65456C12.4812 6.11608 12.9271 6.44001 13.4438 6.53677L17.5702 7.30951C17.7647 7.34593 17.8418 7.58319 17.7059 7.72699L14.8217 10.7776C14.4606 11.1596 14.2903 11.6837 14.3579 12.205L14.8981 16.3683C14.9236 16.5646 14.7218 16.7112 14.543 16.6263L10.7505 14.826C10.2755 14.6006 9.72445 14.6006 9.24955 14.826L5.45699 16.6263C5.27822 16.7112 5.0764 16.5645 5.10186 16.3683L5.64208 12.205C5.70973 11.6837 5.53943 11.1596 5.17828 10.7776L2.29413 7.72699C2.15818 7.58319 2.23527 7.34593 2.42978 7.30951L6.55621 6.53677C7.07292 6.44001 7.51876 6.11608 7.77046 5.65456L9.78052 1.96888C9.87527 1.79515 10.1247 1.79515 10.2195 1.96888Z" stroke="#737380" strokeWidth="1.3"/>
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="AnsweredButton"
                            title="Marcar como respondida"
                            onClick={() => handleCheckQuestionAsAnswered(quest.id)}
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12.0003" cy="11.9998" r="9.00375" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M8.44287 12.3391L10.6108 14.507L10.5968 14.493L15.4878 9.60193" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        </>
                      )}
                      <button
                        type="button"
                        className="DeleteButton"
                        title="Deletar pergunta"
                        onClick={() => handleDeleteQuestion(quest.id)}
                      >
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
                <NoQuestions>
                  <img src={EmptyQuestions} alt="Ilustração" />
                  <h1>Nenhuma pergunta por aqui...</h1>
                  <p>Compartilhe o código desta sala com seus amigos e começe a responder perguntas!</p>
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
                    >
                      <button
                        type="button"
                        className="DeleteButton"
                        title="Deletar pergunta"
                        onClick={() => handleDeleteQuestion(quest.id)}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 5.99988H5H21" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </Question>
                    )
                  }))
              : ('')}
          </QuestionList>
        </Main>
      </Container>
    </>
  )
}
