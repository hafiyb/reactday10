import React from "react";

import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, Touchable } from "react-native";
import tw from "tailwind-react-native-classnames";

function Details({route,navigation}){

    let pageTitle = route.params

    let randomImg = Math.random(999)
    randomImg = Math.floor(randomImg*100)

    return(
        <SafeAreaView style={styles.loginContainer}>
            <Image blurRadius={1} style={tw`rounded-xl`} source={{width:200,height:200,uri: `https://picsum.photos/id/${randomImg}/200/200`}}></Image>
            <Text style={tw`font-bold text-xl m-2 underline`}>{pageTitle.name}</Text>
            <Text style={tw`p-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend leo dui, vel imperdiet orci fringilla eget. Nam aliquet neque eu urna semper, et interdum tellus eleifend. Nullam a nulla sollicitudin, laoreet lorem a, consectetur metus. Integer volutpat, diam varius ornare vehicula, nisl ex finibus nisi, vel commodo nisl ipsum non turpis. Aenean ultrices convallis facilisis. Nam ultricies nisi vel nulla molestie imperdiet. Duis tempus facilisis lacus aliquam lacinia. </Text>
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
