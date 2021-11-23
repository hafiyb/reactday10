import React, {useState} from "react";
import { RefreshControl, SafeAreaView, View, Text, Button, FlatList, ScrollView, TouchableOpacity } from 'react-native';
// import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../../actions";

import { SwipeListView } from "react-native-swipe-list-view";

import ContactList from "../../components/contactlist";

const CONTACTDATA = [
    {
        title:'Mcd',
        contact:'999'
    },
    {
        title:'Domino',
        contact:'888'
    },
    {
        title:'Pizzahat',
        contact:'777'
    },
    {
        title:'Kepci',
        contact:'666'
    },
    {
        title:'BK',
        contact:'555'
    },
]




function Contact() {

    const dispatch = useDispatch()
    let count = useSelector((state) => state.count)
    console.log("test", count)

    const [refresh, setRefresh] = useState(false);

    function onRefresh(){
        console.log('LOADING')
        setRefresh(true);
        setTimeout(() => {
            setRefresh(false)
        },2000)
    }

    return(
        <SafeAreaView>
            <Text>
                This is contact
            </Text>
            <Text style={{textAlign:'center'}}>Count : {count}</Text>
            <Button title="Increase" onPress={() => dispatch(increase())} />
            <Button title="Decrease" onPress={() => dispatch(decrease())}/>

            {/* {ContactList()} */}
            {/* <ScrollView> */}
            {/* <FlatList
            data = {CONTACTDATA}
            renderItem ={({item}) => <ContactList data={item} />}
            
            refreshControl={ <RefreshControl 
                size={100}
                refreshing={refresh} 
                onRefresh={() => onRefresh()}  />}

            /> */}
            <SwipeListView
            data = {CONTACTDATA}
            renderItem ={(data,rowMap) => <ContactList value={data} />}
            
            refreshControl={ <RefreshControl 
                size={100}
                refreshing={refresh} 
                onRefresh={() => onRefresh()}  />}
            renderHiddenItem={(data, rowMap) => (
                <View style={styles.rowBack}>
                    <TouchableOpacity style={styles.buttonBack}>
                        <Text>Left</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonBack}>
                        <Text>Right</Text>
                    </TouchableOpacity>
                </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75} 
            />
            {/* </ScrollView> */}
               
        </SafeAreaView>
    )
}

export default Contact

const styles={
    rowFront:{


    },
    rowBack:{
        alignItems:'center',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingleft:15        
    },
    buttonBack:{
        padding:10,
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.4)',
        borderRadius:10
    }
}