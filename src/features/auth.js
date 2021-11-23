import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const initialState = {
    isLoading: false,
    movieList: [],
    status: 0
}

// const dispatch = useDispatch()

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers:{
        sliceGetMovie:(state,action) => {
            try{
                axios.get(`https://www.omdbapi.com/?apikey=32d62dad&s=batman&page=1`)
                .then((res) => {
                    console.log('test1')
                    console.log(res)
                    if(res.status === 200 && res.data.Response == 'True'){
                        // state.movieList = res.data
                        console.log('test2')
                        useDispatch({ type: 'sliceSetMovie',
                        payload: res.data})
                    } else {
                        alert('Search failed')
                    }
                })
                .catch((error) => {
                    console.log('error...');
                    
                })
            }catch(error){
                console.log('error...')
                
            }
        },
        sliceSetMovie:(state,action) => {
            console.log(action.payload.data)
        }
    }
})


export const { sliceGetMovie } = movieSlice.actions

export default movieSlice.reducer