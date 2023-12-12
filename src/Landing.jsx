import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { setColor as setGlobalColor} from "./store/slices/favColorSlice"
import { setFlavor as setGlobalFlavor } from "./store/slices/favFlavorSlice"
import { useDispatch } from "react-redux"

const Landing = () => {
    const [color, setColor] = useState("")
    const [flavor, setFlavor] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const submitHandler = e => {
      e.preventDefault()
      dispatch(setGlobalColor(color))
      dispatch(setGlobalFlavor(flavor))
      navigate('/home')
    }

    return (
        <form onSubmit={e => submitHandler(e)}>
          <h2>Welcome to the favorite color setter! There's a lot of complex functionality in the app, so read carefully: <br/>Enter your favorite color in the input below and watch the magic!</h2>
            <input
                placeholder="Enter your favorite color"
                onChange={e => setColor(e.target.value)}
            />
            <input
                placeholder="Enter your favorite flavor of ice cream"
                onChange={e => setFlavor(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Landing
