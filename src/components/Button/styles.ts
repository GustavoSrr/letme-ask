import styled from 'styled-components'

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 52px;

  padding: 16px;
  border: 0;
  border-radius: 8px;
  font-weight: 500;

  background-color: var(--primaryColor);
  color: white;
  cursor: pointer;

  > .BtnImg {
    margin-right: 8px;
  }

  &.round {
    border-radius: 50%;
  }

  &:not(:disabled):hover {
    background-color: var(--primaryColorHover);
  }

  &.outline {
    background-color: transparent;
    border: 1px solid var(--primaryColor);
    color: var(--primaryColor);
    font-weight: normal;

    &:hover {
      color: var(--primaryColor);
      border: 1px solid var(--primaryColor);
      background-color: var(--primaryColorTransparent)
    }
  }

  &.transparent {
    background-color: transparent;
    color: var(--primaryColor);

    &:hover {
      background-color: var(--primaryColorTransparent);
    }

    &:active {
      background-color: var(--primaryFocusColorTransparent);
    }

    > svg {
      fill: transparent;

      path {
        stroke: var(--primaryColor)
      }
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
