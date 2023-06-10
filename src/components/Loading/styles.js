import styled from 'styled-components'

export const LoadingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;

  > div {
    width: 20%;
  }

  @media screen and (min-width: 1024px) {
    > div {
      width: 0%;
    }
  }
`
