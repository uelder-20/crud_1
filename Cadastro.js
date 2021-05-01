import React, {useState,useEffect} from 'react';
import { KeyboardAvoidingView,Platform, TextInput,Title, TouchableOpacity, Image, Text, View,Button } from 'react-native';
import {css} from '../assets/Css/Css';




export default function Cadastro({navigation}) {
    

    return (

        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View style={css.login__logomarca}>
                <Image source={require('../assets/IMG/logomarca.png')}/>
            </View>
            <View></View>

        <View style={css.login__form}>
            <TextInput style={css.login__input} placeholder='nome:' onChangeText={text=>setUser(text)} />
                <TextInput style={css.login__input} placeholder='E-mail:' onChangeText={text=>setPassword(text)} />
                <TextInput style={css.login__input} placeholder='Senha:' onChangeText={text=>setUser(text)} secureTextEntry={true} /> 
                <TextInput style={css.login__input} placeholder='Telefone:' onNumberText={text=>setUser(text)} />

                <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
               
                    <Text style={css.login__buttonText}>Entrar</Text>
                    </TouchableOpacity>
                



                    <Text>Cadastrar</Text>
            <Button
                    title='Cadastrar'
                    onPress={() => navigation.navigate('Login',{
                    id: 30
                })}
            />
        
            <Text>Cadastro</Text>
            <Button
                    title='Ir para Login'
                    onPress={() => navigation.navigate('Login',{
                    id: 30
                })}
            />
        </View>
        </KeyboardAvoidingView>
    );
            
            }