import styled from 'styled-components'

export const CartButton = styled.button`
  margin: 0rem 0.3125rem;
  width: 3.75rem;
  height: 3.75rem;
  background-color: transparent;
  border-radius: var(--border-radius-1);

  > figure {
    position: relative;
    margin-top: 0.625rem;
  }

  > figure > img {
    width: 1.5625rem;
    height: 1.5625rem;
  }

  > figure > span {
    position: absolute;
    bottom: 1.125rem;
    left: 2.0625rem;
    padding: 0.125rem 0.3125rem;

    font-weight: var(--font-weight-4);
    font-size: var(--font-size-2);
    color: var(--color-white);

    background-color: var(--color-primary);
    border-radius: var(--border-radius-1);
  }
`
