import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import UserForm from './src/views/UserForm'
import UserList from './src/views/UserList'

import  {Button, Icon} from 'react-native-elements'
import {UsersProvider} from  './src/Context/UserContext'


const Stack = createStackNavigator()

export default props =>{

    return(
      <UsersProvider> 
        <NavigationContainer>

            <Stack.Navigator
            initialRouteName="UserList"
            screenOptions={screenOptions}>
                <Stack.Screen
                name="UserList"
                component= {UserList}
                options={({navigation}) => {
                  return {
                    title:"Lista de Locais",
                    headerRight: () => (
                      <Button
                      onPress={() =>  navigation.navigate("UserForm")}
                      type="clear"
                      icon ={<Icon name="add" size ={25} color="white"/>}
                      />


                    )
                  }

                }}
                />

                 <Stack.Screen

                 name="UserForm"
                 component= {UserForm}
                 options={{
                   title:"Formulario de Locais"
                 }}
                                  />


                


            </Stack.Navigator>
        </NavigationContainer>
        </UsersProvider>

      
    )
}
const screenOptions = {

  headerStyle:{
    backgroundColor:'#006400'
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    }

}
