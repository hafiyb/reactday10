import * as t from '../types'

const defaultState = [
    {

    }
]

let target = 0

const cartReducer = (state = defaultState, action) =>{
    switch(action.type){
        case t.ADDITEM :
            // console.log(action.payload)
            if(state.findIndex(x => x.shop == action.payload) == -1){
                console.log('NOT FOUND')
                return state = [...state,{shop:action.payload, count:1}]
            } else {
                console.log(state[state.findIndex(x => x.shop == action.payload)].count)
                const newItem = {
                    shop : action.payload,
                    // count : 2 
                    count : state[state.findIndex(x => x.shop == action.payload)].count + 1
                }
                console.log(newItem)
                const newArr = state.filter(x => x.shop != action.payload)
                console.log(newArr)
                return state = [newItem,...newArr, ]
                // return state
            }
        case t.DELITEM :
            console.log(action.payload)
            return state = state.slice(0,state.findIndex(x => x.shop == action.payload)).concat(state.slice(state.findIndex(x => x.shop == action.payload)+1,state.length))
        case t.RESET:
            return state = defaultState
        default:
            return state
        }
}

export default cartReducer