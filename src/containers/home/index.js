import React from "react";

import tw from "tailwind-react-native-classnames";
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, Touchable } from "react-native";

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const DATA = ['Lorem Ipsum','Dolor Sit Amet','Consectetur adipiscing','Elit. Suspendisse','Cursus tortor dapibus','Lorem Ipsum','Dolor Sit Amet','Consectetur adipiscing','Elit. Suspendisse','Cursus tortor dapibus','Lorem Ipsum','Dolor Sit Amet','Consectetur adipiscing','Elit. Suspendisse','Cursus tortor dapibus']

function Home(props){

function _renderList(data){
    let randomImg = Math.random(999)
    randomImg = Math.floor(randomImg*100)
    console.log(randomImg)
    return(
        <TouchableOpacity onPress={() => props.navigation.navigate(`Info`, {name:data})} >
            <View style={styles.card}>
                <Text style={tw`m-2 text-lg font-bold `} numberOfLines={1}>{data}</Text>
                <Image style={tw`rounded-xl`} source={{width:150,height:150,uri:`https://picsum.photos/id/${randomImg}/200/200`}}></Image>
                <Text style={tw`m-1`} numberOfLines={1}>{data}</Text>
            </View>
        </TouchableOpacity>
    )
}

    return(
    <SafeAreaView style={styles.loginContainer} >
        <ScrollView 
        // horizontal={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`flex flex-row flex-wrap justify-center`}>
            {/* {DATA.map((list) => <View style={styles.card}><Text>{list}</Text></View>)} */}
            {DATA.map((list) => _renderList(list))}
        {/* <View style={tw`w-1/4 h-1/4 bg-red-500`}></View>
        <View style={tw`w-1/4 h-1/4 bg-red-500`}></View>
        <View style={tw`w-1/4 h-1/4 bg-red-500`}></View>
        <View style={tw`w-1/4 h-1/4 bg-red-500`}></View>
        <View style={tw`w-1/4 h-1/4 bg-red-500`}></View> */}
        </ScrollView>
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
        width:170,
        height:'auto',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.2)',
        borderRadius:20,
        margin:10
    }
}