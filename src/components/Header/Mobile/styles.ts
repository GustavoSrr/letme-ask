import styled from 'styled-components'

export const Container = styled.header`
  position: sticky;
  top: 0;
  background-color: var(--backgroundColor);
  padding: 24px;

  @media only screen and (min-width: 1000px) {
    display: none;
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
    align-items: center;
    justify-content: center;
    gap: 2px;

    button {
      padding: 16px;
    }
  }
`
