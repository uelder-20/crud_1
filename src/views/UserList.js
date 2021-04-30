import { getActionFromState } from '@react-navigation/core'
import React, { useContext } from 'react'
import {FlatList, View} from 'react-native'
import { ListItem, Avatar,  Icon,Button} from 'react-native-elements'
import UsersContext from '../Context/UserContext'










export default props =>{

    const  {state, dispatch} = useContext(UsersContext)
  

    function confirmUserDeletions (user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário', [
            {
                text: 'sim',
                onPress(){
                   dispatch({
                       type: 'deleteUser',
                       payload: user,
                   })
                }

            },
        {
            text:'nao'
    }

        ])
    }

    function getActions (user){

        return(

            <>
            <Button

            onPress={() =>props.navigation.navigate('UserForm', user)}
            type="clear"
            icon={<Icon name="edit" size={25} color="orange"/>}

            />                  <Button

            onPress={() =>confirmUserDeletions (user)}
            type="clear"
            icon={<Icon name="delete" size={25} color="red"/>}

            />     
            
            

            </>
        )
    }

    function getUserItem({item: user}){
        return (
           
            <ListItem
            
             key={user.id} bottomDivider
             righElement={getActions(user)}
             onPress={()=> props.navigation.navigate('UserForm', user)  }
              >
                  

            <Avatar source={{uri: user.avatarUrl}} />
            <ListItem.Content>
                <ListItem.Title>{user.name}</ListItem.Title>
                <ListItem.Subtitle>{user.Cidade}</ListItem.Subtitle>
               
            </ListItem.Content>
            
        </ListItem>
           
    
      
    
            

            

        )

    }

    return(

        <View>
            <FlatList
            keyExtractor={user => user.id.toString()}
            data={state.users}
            renderItem={getUserItem}



/>
        </View>

    )
}


