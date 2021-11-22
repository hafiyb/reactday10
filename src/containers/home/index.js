// import React from "react";
import React, { useState, useEffect } from "react";

import tw from "tailwind-react-native-classnames";
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, Touchable, FlatList, TextInput } from "react-native";

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { getMovie } from "../../actions";

import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

const DATA = ['Lorem Ipsum','Dolor Sit Amet','Consectetur adipiscing','Elit. Suspendisse','Cursus tortor dapibus','Lorem Ipsum','Dolor Sit Amet','Consectetur adipiscing','Elit. Suspendisse','Cursus tortor dapibus','Lorem Ipsum','Dolor Sit Amet','Consectetur adipiscing','Elit. Suspendisse','Cursus tortor dapibus']

// 

// const Home = (props) => (dispatch) => {
const Home = (props) => {

const [movie, setMovieData] = useState({
        movielist: []
    })

const [searchFor, searchTarget] = useState('')

const dispatch = useDispatch()

// dispatch(getMovie())

// useEffect(() => {
//     console.log(searchFor)
// })

//     console.log('use Effect here')
//     try{
//         axios.get(`https://www.omdbapi.com/?apikey=32d62dad&s=batman&page=1`)
//         .then((res) => {
//             console.log(res)
//             if(res.status === 200 && res.data.Response == 'True'){
//                 console.log(res.data)
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
// },[])

function _searchMovie(){

    console.log(searchFor)

    try{
        axios.get(`https://www.omdbapi.com/?apikey=32d62dad&s=${searchFor}&page=1`)
        .then((res) => {
            // console.log(res)
            if(res.status === 200 && res.data.Response == 'True'){
                // console.log(res.data)
                // return state = [res.data]
                setMovieData({ movielist : res.data.Search})
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

function _renderList(data){    

    return(
            <FlatList
                data={movie.movielist}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => props.navigation.navigate('Info', {ID : item.imdbID})}>
                            <View style={styles.card} key={item.Title}>
                                <Image style={tw`rounded-xl`} source={{uri: item.Poster, width:150, height:150}} />
                                <View style={tw`flex flex-col w-1/2`}>
                                    <Text style={tw`m-2 font-bold text-lg w-full`}numberOfLines={2}>{item.Title}</Text>
                                    <Text style={tw`m-2`}numberOfLines={2}>{item.Year}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                // keyExtractor={(item) => item.title}
                ListEmptyComponent={() => <View>
                    <Text style={tw`font-bold text-xl`}>Welcome to 1MDB</Text>
                    <Text>Begin searching?</Text>
                    </View>} //if data is empty
            />
        
    )
}

    return(     
    <SafeAreaView style={styles.loginContainer} >
        <TextInput placeholder='Search for your movie' style={tw`rounded-xl bg-white p-2 m-1 w-3/4`} 
        onChangeText={(test) => searchTarget(test)} 
        onSubmitEditing={() => _searchMovie()} />
        <ScrollView 
        // horizontal={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`flex flex-row flex-wrap justify-center`}>
        </ScrollView>
        {_renderList()}
    </SafeAreaView>


    )
}

export default Home


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
    },
    card:{
        width :'auto',
        height:'auto',
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.2)',
        borderRadius:20,
        margin:10
    }
}