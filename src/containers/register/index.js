import React from 'react'
import {
    View,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { INPUT_STYLE } from '../../assets/styles'

function Register(){
    return(
        <SafeAreaView style={styles.loginContainer}>
            <Text style={tw`text-xl`}>
                Make new account
            </Text>
            <TextInput style={INPUT_STYLE} placeholder="Username"/>
            <TextInput style={styles.inputStyle} placeholder="Password"/>
            <TextInput style={styles.inputStyle} placeholder="Email"/>
            {/* <TextInput style={styles.inputStyle} placeholder=""/> */}
            <TouchableOpacity style={tw`border-2 border-blue-300 rounded-lg bg-blue-200 p-5`}>
                <Text>Register</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Register


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