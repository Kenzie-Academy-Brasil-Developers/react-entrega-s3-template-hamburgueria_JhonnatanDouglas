import { StyledDefaultButton } from '../../styles/button'
import { StyledBodyP, StyledHeadingH3 } from '../../styles/typography'
import { StyledCardLi } from './styles'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-toastify'

export const StyledListCard = ({
  id,
  name,
  category,
  img,
  price,
  cartList,
  setCartList,
}) => {
  const addToCart = (addCart) => {
    setCartList([...cartList, addCart])
  }

  const buttonSent = () => {
    const sentProductCart = {
      id: uuidv4(),
      name: `${name}`,
      category: `${category}`,
      img: `${img}`,
      price: `${price}`,
    }
    addToCart(sentProductCart)

    toast.success('Adicionado ao carrinho', {
      position: 'top-center',
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  }

  return (
    <>
      <StyledCardLi key={id}>
        <figure>
          <img src={img} alt={`Foto do produto ${name}`} />
        </figure>
        <div>
          <div>
            <div>
              <StyledHeadingH3>{name}</StyledHeadingH3>
              <StyledBodyP>{category}</StyledBodyP>
            </div>
            <StyledBodyP isBold={true}>
              {Number(price).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </StyledBodyP>
          </div>
          <StyledDefaultButton
            onClick={buttonSent}
            sizeButton={'small-default'}
          >
            Adicionar
          </StyledDefaultButton>
        </div>
      </StyledCardLi>
    </>
  )
}
