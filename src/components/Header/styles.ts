import styled from 'styled-components'

export const Container = styled.header`
  position: sticky;
  top: 0;
  background-color: var(--backgroundColor);
  padding: 16px 25px;
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
    gap: 5px;

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
        display: flex;
      }
    }

    #MenuContent {
      display: none;
      position: absolute;
      top: 0;
      margin: 16px;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      background-color: var(--backgroundColor);
      border: 1px solid var(--borderColor);
      border-radius: 16px;
      padding: 6px;

      button {
        padding: 12px;
      }

      &:hover {
        display: flex;
      }
    }

    @media only screen and (min-width: 1000px) {
      display: none;
    }
  }
`

export const Logout = styled.div`
  border-radius: 50%;
  background-color: var(--dangerColorTransparent);
  height: 50px;
  width: 50px;
  cursor: pointer;

  button {
    background-color: transparent;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
      border-radius: 50%;
      height: 50px;
      width: 50px;
      padding: 0;
      margin: 0;
      border: 1.5px solid var(--dangerColorTransparent);

      &:hover {
        border-color: var(--dangerColor);
      }

      @media only screen and (max-width: 1000px) {
        height: 40px;
        width: 40px;
      }
    }

    @media only screen and (max-width: 1000px) {
      height: 40px;
      width: 40px;
    }
  }

  @media only screen and (max-width: 1000px) {
    margin-top: 5px;
    height: 40px;
    width: 40px;
  }
`
