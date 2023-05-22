import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  const handleChangeColor = () => {
    navigate('/')
  }
  
  return (
    <main>
      <h2>Your favorite color is below:</h2>
      <p>[insert favorite color here]</p>
      <button onClick={handleChangeColor}>Change Color</button>
    </main>
  )
}

export default Home