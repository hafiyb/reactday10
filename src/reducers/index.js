import { combineReducers } from "redux";
import countReducer from './countReducer'
import movieReducer from './movieReducer'

const rootReducer = combineReducers({
    count: countReducer,
    movie: movieReducer
})

export default rootReducer