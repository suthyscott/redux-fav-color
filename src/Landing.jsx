import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setColor as setGlobalColor } from "./ducks/slices/favColorSlice"

const Landing = () => {
    const [color, setLocalColor] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const submitHandler = e => {
      e.preventDefault()
      dispatch(setGlobalColor(color))
      navigate('/home')
    }

    return (
        <form onSubmit={e => submitHandler(e)}>
          <h2>Welcome to the favorite color setter! There's a lot of complex functionality in the app, so read carefully: <br/>Enter your favorite color in the input below and watch the magic!</h2>
            <input
                placeholder="Enter your favorite color"
                onChange={e => setLocalColor(e.target.value)}
            />
        </form>
    )
}

export default Landing
