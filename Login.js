import React, {useState,useEffect} from 'react';
import { KeyboardAvoidingView,Platform, TextInput,Title, TouchableOpacity, Image, Text, View,Button } from 'react-native';
import {css} from '../assets/Css/Css';
import { AsyncStorage } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './Cadastro';

export default function Login({navigation})
{
    const [display, setDisplay]=useState('none');
    const [user, setUser]=useState(null);
    const [password, setPassword]=useState(null);
    const [login, setLogin]=useState(null);
    const [cadastro, setCadastro]=useState(null);



   
    

    
    async function sendForm()
    {
        let response=await fetch('http://192.168.1.55:3000/login',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user,
                password: password
            })
        });
        let json=await response.json();
        if(json === 'error'){
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none');
            },5000);
            await AsyncStorage.clear();
    }else{
        await AsyncStorage.setItem('userData', JSON.stringify(json));
        navigation.navigate('AreaRestrita');
       
        let resData= await AsyncStorage.getItem('userData');
    console.log(JSON.parse(resData));
    }
  
    
   

        
    }
    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View style={css.login__logomarca}>
                <Image source={require('../assets/IMG/logomarca.png')}/>
            </View>
            <View>
            
               <Text style={css.login__msg(display)}>Usuário ou senha inválidos!</Text>


               
             </View>


        

            <View style={css.login__form}>
            <TextInput style={css.login__input} placeholder='Usuário:' onChangeText={text=>setUser(text)} />
                <TextInput style={css.login__input} placeholder='Senha:' onChangeText={text=>setPassword(text)} secureTextEntry={true} />
                <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
               
                    <Text style={css.login__buttonText}>Entrar</Text>

                    

                    

                  

                    

                    
                    
                    
                   
                    
                    
                   
                </TouchableOpacity>
               
            </View>

            

        </KeyboardAvoidingView>
    );
}