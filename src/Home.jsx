import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectFavColor, clearColor } from './redux/slices/favColorSlice'

const Home = () => {
  const favColor = useSelector(selectFavColor)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChangeColor = () => {
    dispatch(clearColor())
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