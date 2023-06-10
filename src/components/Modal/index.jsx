import { StyledSecondaryButton } from '../../styles/button'
import { StyledHeadingH4 } from '../../styles/typography'
import { StyledCartList } from '../CartList'
import { DivDialog } from './styles'
import { useKeyDown } from '../../hooks/useKeyDown'
import { useOutClick } from '../../hooks/useOutClick'
import { toast } from 'react-toastify'

export const StyledCartModal = ({
  allCartList,
  setIsModalOpen,
  setCartList,
}) => {
  const totalPrice = allCartList.reduce((acc, { price }) => {
    return acc + Number(price)
  }, 0)

  const modalRef = useOutClick(() => {
    setIsModalOpen(false)
  })

  const modalButtonCloseRef = useKeyDown('Escape', (e) => {
    e.click()
  })

  const removeItemFromCart = (idCart) => {
    setCartList((cartList) =>
      cartList.filter((cartItem) => cartItem.id !== idCart)
    )
    toast.warn('Produto removido do carrinho', {
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

  const removeAllItemsFromCart = () => {
    setCartList([])
    toast.warn('Carrinho está vazio', {
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
    <DivDialog role='dialog'>
      <div ref={modalRef}>
        <div>
          <StyledHeadingH4>Carrinho de compras</StyledHeadingH4>
          <button
            ref={modalButtonCloseRef}
            onClick={() => {
              setIsModalOpen(false)
            }}
          >
            X
          </button>
        </div>
        <div>
          <ul>
            {allCartList.length === 0 ? (
              <StyledHeadingH4 style={{ textAlign: 'center' }}>
                Carrinho está vazio
              </StyledHeadingH4>
            ) : (
              allCartList.map(({ id, name, img }) => (
                <StyledCartList
                  key={id}
                  id={id}
                  name={name}
                  img={img}
                  removeItemFromCart={removeItemFromCart}
                />
              ))
            )}
          </ul>
          <div>
            <StyledHeadingH4>Total</StyledHeadingH4>
            <StyledHeadingH4>
              {Number(totalPrice).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </StyledHeadingH4>
          </div>
          <StyledSecondaryButton
            onClick={() => removeAllItemsFromCart()}
            sizeButton={'medium'}
          >
            Remover todos
          </StyledSecondaryButton>
        </div>
      </div>
    </DivDialog>
  )
}
