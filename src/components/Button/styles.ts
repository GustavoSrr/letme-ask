import styled from 'styled-components'

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

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

  &.outline {
    background-color: white;
    border: 1px solid var(--primaryColor);
    color: var(--primaryColor);
  }

  &.round {
    border-radius: 50%;
  }

  &:not(:disabled):hover {
    background-color: var(--primaryColorHover);
  }

  &.transparent {
    background-color: transparent;
    color: var(--secundaryColor);

    &:hover {
      background-color: var(--secundaryColorTransparent);
    }

    &:active {
      background-color: var(--secundaryFocusColorTransparent);
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`