import styled from 'styled-components'

export const CartList = styled.li`
  display: flex;
  gap: 0.625rem;
  height: 5rem;
  width: 100%;

  > figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.25rem;
    height: 5rem;
    background-color: #e0e0e0;
    border-radius: 0.3125rem;
  }

  > figure > img {
    width: 3.4375rem;
    height: 3.4375rem;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  > div > h3 {
  }

  > div > button {
    width: 1.25rem;
    height: 1.25rem;
    background-color: transparent;
  }

  > div > button > figure {
  }

  > div > button > figure > img {
  }
`
