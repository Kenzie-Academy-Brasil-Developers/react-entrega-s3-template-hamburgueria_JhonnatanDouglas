import { SearchButton } from "../../styles/button"
import { StyledImgSearch } from "./styles"
import searchLogo from '../../assets/main/search-icon.svg'

export const StyledSearchButton = () => {
  return (
    <SearchButton>
      <StyledImgSearch>
        <img src={searchLogo} alt='Imagem de lupa de busca de itens' />
      </StyledImgSearch>
    </SearchButton>
  )
}