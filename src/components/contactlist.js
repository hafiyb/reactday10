import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from "react-redux";

import tw from "tailwind-react-native-classnames";
import { additem } from "../actions";

function ContactList(props) {

    const dispatch = useDispatch()

    return(
        <View style={tw`flex flex-row items-center bg-gray-300 w-full border-b-2 border-white`}>
            <View style={{height:100,width:100,backgroundColor:'black'}}>

            </View>
            <View style={tw`flex flex-col w-2/4 ml-2`}>
                {/* {console.log(props.value)} */}
                <Text>
                    {props.value.item.title}
                </Text>
                <Text>
                    {props.value.item.contact}
                </Text>
            </View>

            <TouchableOpacity style={tw`bg-gray-200 p-2 rounded-xl`} onPress={() => dispatch(additem(props.value.item.title))}>
                <Text>Order Now</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ContactList