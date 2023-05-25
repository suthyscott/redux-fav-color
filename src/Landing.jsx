import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setColor as setGlobalColor } from "./redux/slices/favColorSlice"
import { setMeal } from "./redux/slices/favMealSlice"

const Landing = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [color, setLocalColor] = useState("")
  const [appetizer, setAppetizer] = useState('')
  const [entree, setEntree] = useState('')
  const [drink, setDrink] = useState('')
  const [dessert, setDessert] = useState('')

    const submitHandler = e => {
        e.preventDefault()

        const mealObj = {
          appetizer,
          entree,
          drink,
          dessert
        }

        dispatch(setGlobalColor(color))
        dispatch(setMeal(mealObj))

        navigate("/home")
    }

    return (
        <form onSubmit={e => submitHandler(e)}>
            <div>
                <h2>Enter your favorite color here:</h2>
                <input
                    placeholder="Enter your favorite color"
                    onChange={e => setLocalColor(e.target.value)}
                />
            </div>
            <div>
              <h2>Enter your favorite meal:</h2>
              <input placeholder="Appetizer" onChange={e => setAppetizer(e.target.value)}/>
              <input placeholder="Entree" onChange={e => setEntree(e.target.value)} />
              <input placeholder="Drink" onChange={e => setDrink(e.target.value)}/>
              <input placeholder="Dessert" onChange={e => setDessert(e.target.value)}/>
            </div>

            <button>Submit</button>
        </form>
    )
}

export default Landing
