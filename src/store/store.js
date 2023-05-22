import {createStore} from 'redux'

let initialState = {
  favColor: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_COLOR":
        let newState = {
            favColor: action.payload
        }
        console.log(action.payload)
      return newState
    case 'CLEAR_COLOR':
      return initialState
    default:
      return state
  }
}

const store = createStore(reducer)

export default store