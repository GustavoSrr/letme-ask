import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--textAreaColor);
  border-radius: 8px;
  padding: 24px;

  & + .Question {
    margin-top: 8px;
  }

  &.Hightlighted {
    background-color: var(--hightlighColor);
    border: 1px solid var(--borderGrayColor);

    footer .UserInfo span {
      color: var(--textBlackColor);
    }
  }

  &.Answered {
    background-color: var(--answeredColor);
  }

  pre {
    font-family: 'Roboto', sans-serif;
    color: var(--textBlackColor);
    font-size: 16px;
    white-space: pre-wrap;
    word-break: break-all;
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;

  >div {
    display: flex;
    gap: 2px;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    border-radius: 50px;

    &.LikeButton {
      display: flex;
      align-items: center;
      color: var(--textGrayColor);
      gap: 8px;
      padding: 8px;
      border: 1px solid transparent;

      &.Liked {
        background-color: transparent;
        border-radius: 8px;
        background-color: var(--blueColorTransparent);
        color: var(--blueColor);

        svg path {
          stroke: var(--blueColor);
        }

        &:hover {
          background-color: var(--blueColorTransparent);
          border: 1px solid var(--blueColor);
        }
      }

      &:hover {
        background-color: var(--blueColorTransparent);

        svg path {
          stroke: var(--blueColor);
        }
      }
    }

    &.AnsweredButton {
      display: flex;
      align-items: center;
      color: var(--textGrayColor);
      padding: 8px;

      &:hover {
        background-color: var(--blueColorTransparent);

        svg path {
          stroke: var(--blueColor);
        }

        svg circle {
          stroke: var(--blueColor);
        }
      }
    }

    &.HightlightButton {
      display: flex;
      align-items: center;
      color: var(--textGrayColor);
      padding: 8px;

      &:hover {
        background-color: var(--secundaryColorTransparent);

        svg path {
          stroke: var(--secundaryColor);
        }
      }
    }

    &.DeleteButton {
      display: flex;
      align-items: center;
      color: var(--textGrayColor);
      padding: 8px;

      &:hover {
        background-color: var(--dangerColorTransparent);

        svg path {
          stroke: var(--dangerColor);
        }
      }
    }
  }
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    color: var(--textGrayColor);
    font-size: 14px;
    padding-left: 10px;
  }
`
