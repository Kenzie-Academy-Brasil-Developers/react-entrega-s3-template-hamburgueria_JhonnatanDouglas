import styled from "styled-components"

export const StyledPrimaryButton = styled.button`
  width: 100%;
  padding: 0rem 1.25rem;
  gap: 0.625rem;

  font-weight: var(--font-weight-3);
  font-size: var(--font-size-3);
  line-height: var(--line-height-4);

  ${({ sizeButton }) => {
    if (sizeButton === "medium") {
      return "height: 3.75rem;"
    } else if (sizeButton === "medium-default") {
      return "height: 3.75rem; max-width: 8.4375rem;"
    } else if (sizeButton === "small") {
      return "height: 2.5rem;"
    } else if (sizeButton === "small-default") {
      return "height: 2.5rem; max-width: 8.4375rem;"
    } else {
      return "height: 3.75rem;"
    }
  }}

  color: var(--color-white);

  background-color: var(--color-primary);
  border: 0.125rem solid var(--color-primary);
  border-radius: var(--border-radius-1);

  :hover {
    background-color: var(--color-primary-hover);
    border: 0.125rem solid var(--color-primary-hover);
    transition: 0.5s;
  }
`

export const StyledSecondaryButton = styled.button`
  width: 100%;
  padding: 0rem 1.25rem;
  gap: 0.625rem;

  font-weight: var(--font-weight-3);
  font-size: var(--font-size-3);
  line-height: var(--line-height-4);

  ${({ sizeButton }) => {
    if (sizeButton === "medium") {
      return "height: 3.75rem;"
    } else if (sizeButton === "medium-default") {
      return "height: 3.75rem; max-width: 8.4375rem;"
    } else if (sizeButton === "small") {
      return "height: 2.5rem;"
    } else if (sizeButton === "small-default") {
      return "height: 2.5rem; max-width: 8.4375rem;"
    } else {
      return "height: 3.75rem;"
    }
  }}

  color: var(--color-grey-500);
  background-color: var(--color-grey-200);
  border: 0.125rem solid var(--color-grey-200);
  border-radius: var(--border-radius-1);

  :hover {
    color: var(--color-grey-200);
    background-color: var(--color-grey-500);
    border: 0.125rem solid var(--color-grey-500);
    transition: 0.5s;
  }
`
export const SearchButton = styled.button`
  padding: 0rem 1.25rem;
  gap: 0.625rem;

  width: 3.4375rem;
  height: 2.5rem;

  background: var(--color-primary);
  border: 0.125rem solid var(--color-primary);
  border-radius: var(--border-radius-1);

  :hover {
    background-color: var(--color-primary-hover);
    border: 0.125rem solid var(--color-primary-hover);
    transition: 0.5s;
  }
`
