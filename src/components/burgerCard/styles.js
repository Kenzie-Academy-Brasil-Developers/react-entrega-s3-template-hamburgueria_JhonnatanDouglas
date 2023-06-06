import styled from "styled-components"

export const StyledCardLi = styled.li`
  display: flex;
  flex-direction: column;
  width: 18.75rem;
  height: 21.5625rem;
  background-color: var(--color-white);
  border: 0.125rem solid var(--color-grey-200);
  border-radius: var(--border-radius-0);

  > figure {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-grey-100);
    border-radius: 0.125rem 0.125rem 0rem 0rem;
    overflow: hidden;
  }

  > figure > img {
    width: 18.75rem;
    height: 9.375rem;
    object-position: center 75%;
    object-fit: none;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    max-height: 12.1875rem;
    padding: 1.25rem;
    gap: 0.9375rem;
  }

  > div > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  > div > div > div {
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
  }

  > div > div > div > h3 {
    margin-top: 0.3125rem;
  }

  > div > div > p {
    color: var(--color-primary);
  }

  > div > button {
    padding: 0.625rem 1.25rem;
  }

  :hover{
    border: 0.125rem solid var(--color-primary);
    transition: 0.5s;
  }
`