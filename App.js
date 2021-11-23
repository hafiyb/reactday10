import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import tw from 'tailwind-react-native-classnames';

import { Ionicons } from '@expo/vector-icons';

import Login from './src/containers/login';
import Register from './src/containers/register';
import Home from './src/containers/home';
import Details from './src/containers/details';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contact from './src/containers/contact';
import About from './src/containers/about';

import { Provider } from 'react-redux';
import { store, persistor } from './src/store/configureStore';
import Cart from './src/containers/cart';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNav() {
  return(
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName 

          if(route.name == 'Home'){
            iconName = focused
            ? 'home'
            : 'home-outline'
          } else if(route.name == 'About'){
            iconName = focused
            ? 'book'
            : 'book-outline'
          } else if(route.name == 'Contact'){
            iconName = focused
            ? 'call'
            : 'call-outline'
          } else if(route.name == 'Cart'){
            iconName = focused
            ? 'call'
            : 'call-outline'
          }

          return (<View style={tw``}><Ionicons name={iconName} size={20} color={color}  /></View>)
        },
        tabBarActiveTintColor:'gold',
        tabBarInactiveTintColor: 'gray'
      })}
    >
      <Tab.Screen name="Home" component={Home} 
      // options={{ headerTitle: 'test', tabBarIcon : () => (<Ionicons name="home-outline" size={32} color="green" />)  }}
        />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store} persistor={persistor}>
      {/* <View style={styles.container}>
        <Login></Login>
        <Register></Register>
      </View> */}
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        
        <Stack.Screen name="Register" component={Register} options={{headerShown:false,headerBackVisible:false}}/>

        <Stack.Screen name="Login" component={Login} options={{headerShown:false,headerStyle:{backgroundColor:'yellow'}}}/>

        <Stack.Screen name="TabNav" component={TabNav} options={{headerShown:false,headerBackVisible:false,headerStyle:{backgroundColor:'skyblue'}}}/>

        <Stack.Screen name="Info" component={Details} options={{headerStyle:{backgroundColor:'skyblue'}}}/>

      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
