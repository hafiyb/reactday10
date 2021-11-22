import * as t from '../types'
import axios from 'axios'

const movieReducer = (state = [],action) =>{
    switch(action.type){
        case t.GETMOVIE:
            console.log('getMovie')
            // try{
            //     axios.get(`https://www.omdbapi.com/?apikey=32d62dad&s=batman&page=1`)
            //     .then((res) => {
            //         console.log(res)
            //         if(res.status === 200 && res.data.Response == 'True'){
            //             console.log(res.data)
            //             return state = [res.data]
            //         } else {
            //             alert('Search failed')
            //         }
            //     })
            //     .catch((error) => {
            //         console.log('error...',error.response.data.Error);

            //     })
            // }catch(error){
            //     console.log('error...', error)

            // }
        default:
            return state
    }
}

export default movieReducer