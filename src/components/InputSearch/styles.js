import styled from 'styled-components'

export const DivSearch = styled.div`
  position: relative;
  width: 100%;
  max-width: 63.9375rem;

  > input {
    width: 100%;
    height: 3.75rem;
    padding: 0.625rem 5rem 0.625rem 0.9375rem;
    background-color: var(--color-white);
    border: 0.125rem solid var(--color-grey-200);
    border-radius: var(--border-radius-1);

    ::placeholder {
      font-weight: var(--font-weight-1);
      font-size: var(--font-size-3);
      line-height: var(--line-height-4);
      color: var(--color-grey-200);
    }

    :focus {
      border: 0.125rem solid var(--color-grey-600);
    }
  }

  > button {
    position: absolute;
    margin: 0.625rem;
    top: 0;
    right: 0;
  }

  @media screen and (min-width: 64rem) {
    max-width: 22.8125rem;
  }
`
