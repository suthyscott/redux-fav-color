import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
  const favColor = useSelector((state) => state.favColor)
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