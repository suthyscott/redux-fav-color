import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectFavColor } from './store/slices/favColorSlice'

const Home = () => {
  const favColor = useSelector(selectFavColor)
  const navigate = useNavigate()

  const handleChangeColor = () => {
    navigate('/')
  }
  return (
    <main>
      <h2>Your favorite color is below:</h2>
      <p>{favColor}</p>
      <button onClick={handleChangeColor}>Change Color</button>
    </main>
  )
}

export default Home