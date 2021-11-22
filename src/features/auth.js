import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    movieList: [],
    status: 0
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers:{
        getMovie:(state,action) => {
            try{
                axios.get(`https://www.omdbapi.com/?apikey=32d62dad&s=batman&page=1`)
                .then((res) => {
                    console.log(res)
                    if(res.status === 200 && res.data.Response == 'True'){
                        state.movieList = res.data
                    } else {
                        alert('Search failed')
                    }
                })
                .catch((error) => {
                    console.log('error...',error.response.data.Error);
                    
                })
            }catch(error){
                console.log('error...', error)
                
            }
        }
    }
})


export const {getMovie} = movieSlice.actions

export default movieSlice.reducer