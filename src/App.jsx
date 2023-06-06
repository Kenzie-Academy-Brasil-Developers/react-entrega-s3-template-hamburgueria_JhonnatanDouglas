import { ResetCss } from "./styles/reset"
import { GlobalStyles } from "./styles/globalStyles"
import { StyledPrimaryButton, StyledSecondaryButton } from "./styles/button"
import { StyledSearchButton } from "./components/ButtonSearch"
import { StyledResponsiveDivMain } from "./styles/grid"

function App() {
  return (
    <>
      <ResetCss />
      <GlobalStyles />

      <header></header>
      <main>
        <StyledResponsiveDivMain>
          <StyledPrimaryButton sizeButton={"medium-default"}>
            Button Text
          </StyledPrimaryButton>
        </StyledResponsiveDivMain>
        <StyledResponsiveDivMain>
          <StyledSecondaryButton sizeButton={"small-default"}>
            Button Text
          </StyledSecondaryButton>
        </StyledResponsiveDivMain>
        <StyledResponsiveDivMain>
          <StyledSearchButton />
        </StyledResponsiveDivMain>
      </main>
    </>
  )
}

export default App
