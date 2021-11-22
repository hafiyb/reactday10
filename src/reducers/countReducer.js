import * as t from '../types'

const countReducer = (state = 0,action) =>{
    if (state === undefined){
        state = 0
    }

    switch(action.type){
        case t.INCREASE:
            console.log('increase')
            return (state += 1)
        case t.DECREASE:
            console.log('decrease')
            return (state -= 1)
        default:
            return state
    }
}

export default countReducer