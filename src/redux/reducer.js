let initialState = {
    favColor: ''
}

const reducer = (state = initialState, action) => {
   
    switch(action.type){
        case "SET_COLOR":
            let newState = {
                favColor: action.payload
            }
            return newState
        case "CLEAR_COLOR":
            let emptyState = {
                favColor: ''
            }
            return emptyState
        default:
            return state
    }
}

export default reducer