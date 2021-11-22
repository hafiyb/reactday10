import React, { useEffect, useState } from "react";

import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, Touchable } from "react-native";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
// import { useSelector } from "react-redux";

import axios from "axios";


function Details({route,navigation}){

    const [movieDetails, setMovieDetails] = useState({ 
        details : []
    })

    let data = route.params

    useEffect(() => {
        console.log('use Effect here', data.ID)
        try{
            axios.get(`https://www.omdbapi.com/?apikey=32d62dad&i=${data.ID}`)
            .then((res) => {
                // console.log(res)
                if(res.status === 200 && res.data.Response == 'True'){
                    // console.log(res.data)
                    // return state = [res.data]
                    setMovieDetails({ details : res.data})
                    console.log('done')
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
    },[])

    let randomImg = Math.random(999)
    randomImg = Math.floor(randomImg*100)

    return(
        <SafeAreaView style={styles.loginContainer}>
            {/* <Image blurRadius={1} style={tw`rounded-xl`} source={{width:200,height:200,uri: `https://picsum.photos/id/${randomImg}/200/200`}}></Image> */}
            <Image blurRadius={0} style={tw`rounded-xl`} source={{width:300,height:300,uri: movieDetails.details.Poster}}></Image>
            {console.log(movieDetails)}
            <Text style={tw`font-bold text-xl m-2 underline`}>{movieDetails.details.Title}</Text>
            <Text style={tw`p-1`}>{movieDetails.details.Director} </Text>
            <Text style={tw`p-1`}>{movieDetails.details.Actors} </Text>
            <Text style={tw`p-1`}>{movieDetails.details.Genre} </Text>
            <Text style={tw`p-1 text-center`}>{movieDetails.details.Plot} </Text>
            <Text style={tw`p-1`}>{movieDetails.details.Rated} </Text>

        </SafeAreaView>
    )
}

export default Details

const styles = {
    loginContainer:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
    },
    inputStyle:{
        padding:15,
        backgroundColor:'white',
        borderRadius:20,
        width:'50%',
        margin: 20,
    },
    submitButton:{
        paddingVertical:20,
        paddingHorizontal:30,
        margin:20,
        backgroundColor:'orange',
        width:'50%',
    }
}
