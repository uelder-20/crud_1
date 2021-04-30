import React, { useContext, useState } from 'react'
import {Text, View, TextInput, StyleSheet} from 'react-native'
import  {Button} from 'react-native-elements'
import UsersContext from '../Context/UserContext'



export default ({route, navigation}) =>{

  const [user, setUser] = useState(route.params ? route.params : {})
const {dispatch} = useContext(UsersContext)
    return(

       <View style={style.form}>

           <Text>Name</Text>
           <TextInput
           style={style.input}
           onChangeText = {name =>setUser({...user, name})}
           placeholder = "informe o nome da cidade"
           value={user.name}

           />
      

<Text>Cidade</Text>
<TextInput
style={style.input}
onChangeText = {Cidade =>setUser({...user, Cidade})}
placeholder = "informe a cidade"
value={user.Cidade}


/>
<Text>Foto da Cidade</Text>
<TextInput
style={style.input}
onChangeText = {avatarURL =>setUser({...user, avatarURL})}
placeholder = "informe a url do local"
value={user.avatarUrl}
/>


<Button
title="salvar"
onPress={() =>{
    dispatch({

        type:user.id  ? 'updateUser' : 'createUser',
        payload: user,
    })
    navigation.goBack()
}}

/>
       </View>
       
    )
}

const style = StyleSheet.create({

    form: {
        padding:12
    },

    

    input:{
        height: 40,
        borderColor: '#006400',
       
        marginBottom: 10
    }
})

