let initialState = {
    favColor: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_COLOR':
            let newState = {
                favColor: action.payload
            }
            return newState
            // return state.favColor = action.payload
        case "CLEAR_COLOR":
            return initialState
        default:
            return state
    }
}

export default reducer