import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  background-color: var(--textAreaColor);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  color: var(--textParagraphColor);

  a {
    margin-left: 5px;
    color: var(--secundaryColor);
    text-decoration: none;
    border-bottom: 1px solid var(--secundaryColorTransparent);

    &:hover {
      border-color: var(--secundaryColor);
    }
  }
`
