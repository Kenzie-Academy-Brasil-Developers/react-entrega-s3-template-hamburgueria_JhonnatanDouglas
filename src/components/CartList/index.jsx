import { CartList } from './styles'
import deleteIcon from '../../../src/assets/main/trash-icon.svg'
import { StyledHeadingH3 } from '../../styles/typography'

export const StyledCartList = ({
  id,
  name,
  category,
  img,
  price,
  removeItemFromCart,
}) => {
  return (
    <CartList>
      <figure>
        <img src={img} alt='imagem do produto' />
      </figure>
      <div>
        <StyledHeadingH3>{name}</StyledHeadingH3>
        <button onClick={() => removeItemFromCart(id)}>
          <figure>
            <img src={deleteIcon} alt='icone de deletar produto' />
          </figure>
        </button>
      </div>
    </CartList>
  )
}
