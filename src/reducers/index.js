// import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import countReducer from './countReducer'
import movieReducer from './movieReducer'
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    count: countReducer,
    movie: movieReducer,
    cart: cartReducer,
})

export default rootReducer