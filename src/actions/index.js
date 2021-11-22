import * as t from '../types'

export const increase = () => (dispatch) =>{
    dispatch({
        type: t.INCREASE,
    })
}

export const decrease = () => (dispatch) =>{
    dispatch({
        type: t.DECREASE,
    })
}

export const getMovie = () => (dispatch =>{
    dispatch({
        type: t.GETMOVIE,
    })
})