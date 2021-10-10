import styled from 'styled-components'

export const Content = styled.div`
  display: none;
  position: absolute;
  border-radius: 8px;
  padding: 16px;
  background-color: var(--backgroundColor);
  margin-top: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  border: 1px solid var(--borderColor);

  ul {
    list-style: none;
    cursor: pointer;
    color: var(--textParagraphColor);
    text-decoration: none;

    li {
      border-bottom: 1px solid var(--secundaryColorTransparent);
      width: fit-content;
    }

    li:hover {
      border-bottom: 1px solid var(--secundaryColor);
    }
  }
`

export const Container = styled.div`
  button:focus ~ ${Content} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
