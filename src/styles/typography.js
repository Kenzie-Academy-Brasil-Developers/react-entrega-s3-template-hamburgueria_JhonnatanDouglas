import styled, { css } from "styled-components"

const defaultSettings = css`
  font-family: "Inter", sans-serif;
  font-style: normal;
`

export const StyledHeadingH1 = styled.h1`
  ${defaultSettings}
  font-weight: var(--font-weight-4); 
  font-size: var(--font-size-6); 
  line-height: var(--line-height-8); 
  color: var(--color-grey-600);
`
export const StyledHeadingH2 = styled.h2`
  ${defaultSettings}
  font-weight: var(--font-weight-4); 
  font-size: var(--font-size-5); 
  line-height: var(--line-height-6); 
  color: var(--color-grey-600);
`
export const StyledHeadingH3 = styled.h3`
  ${defaultSettings}
  font-weight: var(--font-weight-4); 
  font-size: var(--font-size-4); 
  line-height: var(--line-height-6); 
  color: var(--color-grey-600);
`
export const StyledHeadingH4 = styled.h4`
  ${defaultSettings}
  font-weight: var(--font-weight-1); 
  font-size: var(--font-size-3); 
  line-height: var(--line-height-6); 
  color: var(--color-grey-500);
`

export const StyledBodyP = styled.p`
  ${defaultSettings}
  font-weight: var(--font-weight-1); 
  font-size: var(--font-size-2); 
  line-height: var(--line-height-6); 
  color: var(--color-grey-500);

  ${({ isBold }) => {
    return isBold ? "font-weight: 600;" : "font-weight: 400;"
  }}
`

export const StyledSubCaption = styled.caption`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400; 
  font-size: 12px; 
  line-height: 16px; 
  color: var(--color-grey-500);
`
