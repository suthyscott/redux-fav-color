import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectFavColor } from './store/slices/favColorSlice'
import { selectFavFlavor } from './store/slices/favFlavorSlice'

const Home = () => {
  const favColor = useSelector(selectFavColor)
  const favFlavor = useSelector(selectFavFlavor)

  const globalState = useSelector(state => state)
  console.log(globalState)
  const navigate = useNavigate()

  const handleChangeColor = () => {
    navigate('/')
  }
  return (
    <main>
      <h2>Your favorite color is below:</h2>
      <p>{favColor}</p>
      <p>{favFlavor}</p>
      <button onClick={handleChangeColor}>Change Color</button>
    </main>
  )
}

export default Home