import React from "react";
import { View, Text,  FlatList } from 'react-native';
import tw from "tailwind-react-native-classnames";

const ABOUTDATA =[
    {
        title : 'Title One',
        content : 'This is Content One',
    },
    {
        title : 'Title Two',
        content : 'This is Content Two',
    },
    {
        title : 'Title Three',
        content : 'This is Content Three',
    },
    {
        title : 'Title Four',
        content : 'This is Content Four',
    },
]

function _renderListView(item){
    return(
        <View style={tw`m-5 w-full`} key={item.title}><Text>{item.title}</Text></View>
    )
}

function _renderEmpty(){
    return(
        <View><Text>No data lol</Text></View>
    )
}

function About() {
    return(
        <View style={tw`flex flex-col justify-center items-center`}>
            <Text>
                This is about
            </Text>
            <FlatList 
                data={ABOUTDATA} 
                renderItem={({item}) => 
                // <View key={item.title}><Text>{item.title}</Text></View>
                _renderListView(item)
                }
                keyExtractor={(item) => item.title}
                ListEmptyComponent={() => _renderEmpty()}
            />
        </View>
    )
}

export default About