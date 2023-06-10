import { StyledResponsiveDivHeader } from '../../styles/grid'
import { StyledInputSearch } from '../InputSearch'
import { Header } from './styles'
import { StyledCartButton } from '../CartButton'
import logo from '../../../src/assets/header/header-burger-logo.svg'

export const StyledHeader = ({
  allCartList,
  setIsModalOpen,
  productsList,
  setProductsList,
  setIsLoading,
}) => {
  return (
    <>
      <Header>
        <StyledResponsiveDivHeader>
          <div>
            <figure>
              <img src={logo} alt='logo da kenzie burguer' />
            </figure>
            <StyledCartButton
              setIsModalOpen={setIsModalOpen}
              allCartList={allCartList}
            />
          </div>
          <div>
            <StyledInputSearch
              productsList={productsList}
              setProductsList={setProductsList}
              setIsLoading={setIsLoading}
            />
          </div>
        </StyledResponsiveDivHeader>
      </Header>
    </>
  )
}
