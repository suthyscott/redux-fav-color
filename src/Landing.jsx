import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

const Landing = () => {
    const [color, setColor] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const favColor = useSelector(state => state.favColor)

    const submitHandler = e => {
      e.preventDefault()
      console.log('hit submitHandler')
      dispatch({type: 'SET_COLOR', payload: color})
      navigate('/home')
    }

    console.log(favColor)
    return (
        <form onSubmit={e => submitHandler(e)}>
          <h2>Welcome to the favorite color setter! There's a lot of complex functionality in the app, so read carefully: <br/>Enter your favorite color in the input below and watch the magic!</h2>
            <input
                placeholder="Enter your favorite color"
                onChange={e => setColor(e.target.value)}
            />
        </form>
    )
}

export default Landing
