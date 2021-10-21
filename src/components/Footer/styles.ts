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
    color: var(--secondaryColor);
    text-decoration: none;
    border-bottom: 1px solid var(--secondaryColorTransparent);

    &:hover {
      border-color: var(--secondaryColor);
    }
  }
`
