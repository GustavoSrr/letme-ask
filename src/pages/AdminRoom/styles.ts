import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  padding-bottom: 24px;

  header {
    padding: 24px;
    border-bottom: 1px solid var(--borderColor);
  }
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    max-height: 45px;
  }

  > div {
    display: flex;
    gap: 2px;
  }

  #EndRoomBtn {
    margin-left: 14px;
    background: transparent;
    border: 1px solid var(--dangerColor);
    color: var(--dangerColor);

    &:hover {
      background-color: var(--dangerColorTransparent);
    }
  }
`

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
`

export const Title = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  > span {
    margin-left: 16px;
    background-color: var(--secundaryColor);
    border-radius: 9999px;
    padding: 8px 16px;
    color: white;
    font-weight: 500;
    font-size: 14px;
  }
`

export const QuestionList = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  > svg {
    margin: 0 auto;
  }
`

export const NoQuestions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: var(--textParagraphColor);
    max-width: 380px;
  }
`
