import { useEffect, useState } from 'react'
import { StyledSearchButton } from '../ButtonSearch'
import { DivSearch } from './styles'
import { api } from '../../services/api'

export const StyledInputSearch = ({
  productsList,
  setProductsList,
  setIsLoading,
}) => {
  const [inputSearch, setInputSearch] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    if (text === '') {
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
    }

    const filteredProducts = productsList.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    )
    setProductsList(filteredProducts)
  }, [text])

  const sentSearch = () => {
    setText(inputSearch.trim())
  }

  return (
    <DivSearch>
      <input
        onChange={(e) => setInputSearch(e.target.value)}
        placeholder='Digitar Pesquisa'
      />
      <StyledSearchButton sentSearch={sentSearch} />
    </DivSearch>
  )
}
