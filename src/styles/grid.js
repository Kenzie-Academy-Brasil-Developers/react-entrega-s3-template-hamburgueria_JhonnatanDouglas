import styled from 'styled-components'

export const StyledResponsiveDivHeader = styled.div`
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  max-width: 100rem;

  @media screen and (min-width: 1024px) {
    padding: 1rem 6.25rem;
  }
`

export const StyledResponsiveDivMain = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  max-width: 100rem;

  @media screen and (min-width: 1024px) {
    padding: 1rem 6.25rem;
  }
`