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

export const Form = styled.form`
  textarea {
    width: 100%;
    border: 0;
    padding: 16px;
    border-radius: 8px;
    background-color: var(--textAreaColor);
    resize: vertical;
    min-height: 130px;
    outline: none;
    border: 1px solid transparent;
    color: var(--textParagraphColor);

    &:focus {
      box-shadow: rgba(17, 12, 46, 0.03) 0px 25px 70px 0px;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    margin-bottom: 16px;

    #SendBtn {
      background-color: transparent;
      color: var(--secundaryColor);

      &:hover {
        background-color: var(--secundaryColorTransparent);
      }

      &:active {
        background-color: var(--secundaryFocusColorTransparent);
      }

      > svg {
        fill: transparent;

        path {
          stroke: var(--secundaryColor)
        }
      }
    }

    div {
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      span {
        margin-left: 8px;
        color: var(--textTitleColor);
        font-weight: 500;
        font-size: 14px;
      }
    }

    > span {
      font-size: 14px;
      color: var(--textParagraphColor);
      font-weight: 500;

      button {
        background-color: transparent;
        border: 0 none;
        color: var(--secundaryColor);
        text-decoration: underline;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
      }
    }
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
