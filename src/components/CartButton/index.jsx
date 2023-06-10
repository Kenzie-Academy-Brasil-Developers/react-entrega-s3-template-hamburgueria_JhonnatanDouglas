import { CartButton } from './styles'
import cartLogo from '../../../src/assets/header/cart-icon.svg'

export const StyledCartButton = ({ allCartList, setIsModalOpen }) => {
  const totalItens = allCartList.length
  return (
    <CartButton onClick={() => setIsModalOpen(true)}>
      <figure>
        <img src={cartLogo} alt='imagem do carrinho' />
        <span>{totalItens}</span>
      </figure>
    </CartButton>
  )
}
