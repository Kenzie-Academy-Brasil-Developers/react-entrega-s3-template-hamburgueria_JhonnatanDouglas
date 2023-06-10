import ReactLoading from 'react-loading'
import { LoadingDiv } from './styles'

export const StyledLoading = () => {
  return (
    <LoadingDiv>
      <ReactLoading type={'spinningBubbles'} color={'#eb5757'} height={'0%'} />
    </LoadingDiv>
  )
}
