import { ResetCss } from "./styles/reset"
import { GlobalStyles } from "./styles/globalStyles"
import {
  StyledDefaultButton,
  StyledPrimaryButton,
  StyledSecondaryButton,
} from "./styles/button"
import { StyledSearchButton } from "./components/ButtonSearch"
import { StyledResponsiveDivMain } from "./styles/grid"
import { StyledBodyP } from "./styles/typography"
import { StyledListCard } from "./components/burgerCard"

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

        <StyledResponsiveDivMain>
          <StyledBodyP isBold={true}>Teste</StyledBodyP>
        </StyledResponsiveDivMain>

        <StyledResponsiveDivMain>
          <StyledDefaultButton sizeButton={"small-default"}>
            Adicionar
          </StyledDefaultButton>
        </StyledResponsiveDivMain>

        <StyledResponsiveDivMain>
          <StyledListCard />
        </StyledResponsiveDivMain>
      </main>
    </>
  )
}

export default App
