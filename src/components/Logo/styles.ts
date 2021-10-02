import styled from 'styled-components'

export const Container = styled.div`
  svg {
    max-height: 45px;

    path:nth-child(2) {
      fill: var(--textTitleColor)
    }
  }

  &.large {
    svg {
      max-height: unset;
    }
  }
`
