import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  padding-bottom: 24px;
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
    align-items: center;
    justify-content: center;
    gap: 2px;

    button {
      padding: 16px;
    }
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
  padding: 0 20px;
`

export const Title = styled.div`
  margin: 32px 0 24px;
  display: flex;
  flex-direction: column;
  word-break: break-all;

  > span {
    width: fit-content;
    background-color: var(--secondaryColor);
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
