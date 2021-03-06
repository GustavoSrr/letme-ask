import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;

  img {
    margin-right: 8px;
  }

  a {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: var(--textParagraphColor);
    text-decoration: none;
    border-bottom: 1px solid var(--primaryColor);

    &:hover img {
      margin-right: 12px;
    }
  }
`
