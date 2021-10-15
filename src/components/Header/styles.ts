import styled from 'styled-components'

export const Container = styled.header`
  position: sticky;
  top: 0;
  background-color: var(--backgroundColor);
  padding: 16px;
  width: 100%;
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

  .Desktop {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;

    button {
      padding: 16px;
    }

    @media only screen and (max-width: 1000px) {
      display: none;
    }
  }

  .Mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    #MenuBtn {
      svg {
        fill: var(--primaryColor);
      }

      &:focus ~ #MenuContent {
        display: unset;
      }
    }

    #MenuContent {
      display: none;
      position: absolute;
      top: 0;
      margin: 16px;

      background-color: var(--backgroundColor);
      border: 1px solid var(--borderColor);
      border-radius: 16px;
      padding: 6px;

      button {
        padding: 12px;
      }

      &:hover {
        display: unset;
      }
    }

    @media only screen and (min-width: 1000px) {
      display: none;
    }
  }
`
