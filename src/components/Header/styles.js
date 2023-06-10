import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 9.375rem;
  background-color: var(--color-grey-100);
  box-shadow: rgb(140 140 140 / 25%) 0.1875rem 0.4375rem 1.25rem 0.375rem;

  > div {
    display: flex;
    flex-direction: column;
  }
  > div > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 5.3125rem;

    > div {
      flex-direction: row;
      justify-content: space-between;
    }

    > div > div:nth-child(1) {
      width: 100%;
    }

    > div > div:nth-child(2) {
      width: 100%;
      max-width: 22.8125rem;
    }
  }
`