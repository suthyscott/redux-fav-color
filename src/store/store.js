import {createStore} from 'redux'

let initialState = {
    favColor: ''
}

const reducer = (state = initialState, action) => {
    // {
    //     type: 'SET_COLOR',
    //     payload: 'Blue'
    // }
    switch(action.type){
        case "SET_COLOR":
            console.log('hit SET_COLOR option')

        case "CLEAR_COLOR":
            console.log('hit CLEAR_COLOR option')

        default:
            console.log('hit default')
    }
}

const store = createStore(reducer)

export default store 