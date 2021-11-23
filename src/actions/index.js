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

export const additem = (data) => (dispatch) =>{
    dispatch({
        type: t.ADDITEM,
        payload: data
    })
}

export const delitem = (data) => (dispatch) =>{
    dispatch({
        type: t.DELITEM,
        payload: data
    })
}

export const reset = () => dispatch =>{
    dispatch({
        type: t.RESET
    })
}

// export const getMovie = () => (dispatch =>{
//     dispatch({
//         type: t.GETMOVIE,
//         payload: {
//             isLoading: true,
//             movielist: [],
//             error: null
//         }
//     })

//     try{
//         axios.get(`https://www.omdbapi.com/?apikey=32d62dad&s=${searchFor}&page=1`)
//         .then((res) => {
//             // console.log(res)
//             if(res.status === 200 && res.data.Response == 'True'){
//                 // console.log(res.data)
//                 // return state = [res.data]
//                 setMovieData({ movielist : res.data.Search})
//             } else {
//                 alert('Search failed')
//             }
//         })
//         .catch((error) => {
//             console.log('error...',error.response.data.Error);

//         })
//     }catch(error){
//         console.log('error...', error)

//     }
// })