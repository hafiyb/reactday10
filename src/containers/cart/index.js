import React from "react";
import { View , Text, FlatList, TouchableOpacity, Button} from "react-native";

import { useSelector } from "react-redux";

import { SwipeListView } from "react-native-swipe-list-view";

import tw from "tailwind-react-native-classnames";

import { useDispatch } from "react-redux";

import { delitem, reset } from "../../actions";

function Cart(){

    const dispatch = useDispatch()

    const cartData = useSelector((state) => state.cart)

    console.log(cartData)
    return(
        <View>
            <SwipeListView
            data={cartData}
            renderItem={(data,rowMap) => (
                
            <View style={tw`flex flex-row items-center bg-gray-300 w-full border-b-2 border-white`}>
                <View style={{height:100,width:100,backgroundColor:'black'}}>
                </View>
                <View style={tw`flex flex-col w-2/4 ml-2`}>
                    {/* {console.log(props.value)} */}
                    <Text>
                        Shop: {data.item.shop}
                    </Text>
                    <Text>
                        Count: {data.item.count}
                    </Text>
                </View>
            </View>

            )}
            renderHiddenItem={(data,rowMap) =>(
                <View style={styles.rowBack}>
                    {/* <TouchableOpacity style={styles.buttonBack}>
                        <Text>Left</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={styles.buttonBack} onPress={() => dispatch(delitem(data.item.shop))}>
                        <Text >Delete</Text>
                    </TouchableOpacity>
                </View>
            )}
            rightOpenValue={-75}
            />
            <Button title="RESET "onPress={() => dispatch(reset())} />
        </View>
    )
}

const styles={
    rowFront:{


    },
    rowBack:{
        alignItems:'center',
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingleft:15        
    },
    buttonBack:{
        padding:10,
        height:100,
        width:'100%',
        backgroundColor:'rgba(0,0,0,0.4)',
        alignItems:'flex-end',
        justifyContent:'center'
    }
}

export default Cart