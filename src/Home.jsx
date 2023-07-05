import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const favoriteColor = useSelector((globalState) => globalState.favColor)

  const handleChangeColor = () => {
    dispatch({type: 'CLEAR_COLOR'})
    navigate('/')
  }
  return (
    <main>
      <h2>Your favorite color is below:</h2>
      <p>{favoriteColor}</p>
      <button onClick={handleChangeColor}>Change Color</button>
    </main>
  )
}

export default Home