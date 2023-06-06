import { StyledDefaultButton } from "../../styles/button"
import { StyledBodyP, StyledHeadingH3 } from "../../styles/typography"
import { StyledCardLi } from "./styles"

export const StyledListCard = () => {
  return (
    <>
      <StyledCardLi>
        <figure>
          <img
            src='https://i.imgur.com/Vng6VzV.png'
            alt='Imagem do tal hamburger'
          />
        </figure>
        <div>
          <div>
            <div>
              <StyledHeadingH3>Fanta Guaraná</StyledHeadingH3>
              <StyledBodyP>Bebidas</StyledBodyP>
            </div>
            <StyledBodyP isBold={true}>R$ 5,00</StyledBodyP>
          </div>
          <StyledDefaultButton sizeButton={"small-default"}>
            Adicionar
          </StyledDefaultButton>
        </div>
      </StyledCardLi>
    </>
  )
}
