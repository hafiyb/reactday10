import React from "react";
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../../actions";

function Contact() {

    const dispatch = useDispatch()
    let count = useSelector((state) => state.count)
    console.log("test", count)
    return(
        <View>
            <Text>
                This is contact
            </Text>
            <Text style={{textAlign:'center'}}>Count : {count}</Text>
            <Button title="Increase" onPress={() => dispatch(increase())} />
            <Button title="Decrease" onPress={() => dispatch(decrease())}/>
        </View>
    )
}

export default Contact