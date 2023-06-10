import { api } from './services/api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { ResetCss } from './styles/reset'
import { GlobalStyles } from './styles/globalStyles'
import { StyledResponsiveDivMain } from './styles/grid'
import { StyledHeader } from './components/Header'
import { StyledListCard } from './components/burgerCard'
import { StyledBurgerCardUl } from './components/burgerCard/styles'
import { StyledCartModal } from './components/Modal'
import { StyledLoading } from './components/Loading'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [productsList, setProductsList] = useState([])

  const getLocalStorageCart = localStorage.getItem('@CartItensList')
  const [cartList, setCartList] = useState(
    getLocalStorageCart ? JSON.parse(getLocalStorageCart) : []
  )

  useEffect(() => {
    localStorage.setItem('@CartItensList', JSON.stringify(cartList))
  }, [cartList])

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true)
        const response = await api.get('/products')
        setProductsList(response.data)
      } catch (error) {
        toast.error('Ops! Não foi possível carregar a lista de produtos', {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    loadData()
  }, [])

  return (
    <>
      <ResetCss />
      <GlobalStyles />

      <StyledHeader
        productsList={productsList}
        setProductsList={setProductsList}
        allCartList={cartList}
        setIsModalOpen={setIsModalOpen}
        setIsLoading={setIsLoading}
      />

      <main>
        <StyledResponsiveDivMain>
          {isLoading ? (
            <StyledLoading />
          ) : (
            <StyledBurgerCardUl>
              {productsList.map(({ id, name, category, img, price }) => (
                <StyledListCard
                  key={id}
                  id={id}
                  name={name}
                  category={category}
                  img={img}
                  price={price}
                  cartList={cartList}
                  setCartList={setCartList}
                />
              ))}
            </StyledBurgerCardUl>
          )}

          {isModalOpen ? (
            <StyledCartModal
              setIsModalOpen={setIsModalOpen}
              allCartList={cartList}
              setCartList={setCartList}
            />
          ) : null}

          <ToastContainer
            position='top-center'
            autoClose={500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
          />
          <ToastContainer />
        </StyledResponsiveDivMain>
      </main>
    </>
  )
}

export default App
