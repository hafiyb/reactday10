import React from 'react'
import { Image,SafeAreaView ,View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
// import tailwind from 'tailwind-rn'
import tw from 'tailwind-react-native-classnames'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { INPUT_STYLE } from '../../assets/styles'

function Login(props){
    return(
        <SafeAreaView style={styles.loginContainer}>
            <Image source={require('../../assets/logo.png')}
            style={{width: 80, height: 80}} />
            <Text>Twidder</Text>
            <TextInput style={INPUT_STYLE} placeholder="Username" keyboardType='default'></TextInput>
            <TextInput style={styles.inputStyle} placeholder="Password" keyboardType='default' secureTextEntry={true} ></TextInput>
            <TextInput style={styles.inputStyle} placeholder="Number" keyboardType='number-pad' ></TextInput>

            <TouchableOpacity style={tw`rounded-lg bg-blue-400 p-5`} onPress={() => props.navigation.navigate('Home')}>
            <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
            {/* <TouchableOpacity> */}
                <Text style={tw`m-10 underline text-blue-900 text-lg`}>Register?</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

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


export default Login