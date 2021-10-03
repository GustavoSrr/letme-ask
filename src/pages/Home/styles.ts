import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 7;

  padding: 120px 80px;

  background-color: var(--primaryColor);
  color: var(--backgroundColor);

  img {
    max-width: 320px;
  }

  strong {
    margin-top: 16px;

    font-weight: 700;
    font-size: 36px;
    font-family: "Ubuntu", sans-serif;
    line-height: 42px;
  }

  p {
    margin-top: 16px;

    font-size: 24px;
    line-height: 32px;
    color: var(--borderColor);
  }
`

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 8;

  padding: 0 32px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  > img {
    align-items: center;
  }

  h2 {
    font-size: 24px;
    margin: 64px 0 24px;
    font-family: "Ubuntu", sans-serif;
  }

  p {
    font-size: 14px;
    color: var(--textParagraphColor);
    margin-top: 16px;

    a {
      color: var(--secundaryColor);
    }
  }
`

export const CreateButton = styled.button`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 64px;
  border-radius: 8px;
  font-weight: normal;

  background-color: transparent;
  color: var(--textParagraphColor);
  border: 1px solid var(--borderColor);
  cursor: pointer;

  svg {
    margin-right: 8px;
  }

  &:hover {
    border: 1px solid var(--primaryColorTransparent);
    background-color: var(--primaryColorTransparent);
    color: var(--primaryColor);
  }
`

export const Form = styled.form`
  input {
    height: 50px;
    border-radius: 8px;
    padding: 0 16px;
    background-color: var(--backgroundColor);
    border: 1px solid var(--borderColor);
    color: var(--textParagraphColor);

    &:focus {
      outline: 0 none;
      border: 1px solid var(--primaryColor);
    }
  }

  button {
    margin-top: 16px;

    svg path {
      stroke: var(--backgroundColor);
    }
  }

  button,
  input {
    width: 100%;
  }
`

export const Separator = styled.div`
  font-size: 16px;
  color: var(--borderColor);

  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: " ";
    flex: 1;
    height: 1px;
    background-color: var(--borderColor);
    margin-right: 16px;
  }

  &::after {
    content: " ";
    flex: 1;
    height: 1px;
    background-color: var(--borderColor);
    margin-left: 16px;
  }
`
