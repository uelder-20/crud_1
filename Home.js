import React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import  {css} from'../assets/Css/Css';
export default function Home ({navigation})
{


    return(

        <View style={css.container2}>

    

        <TouchableOpacity style={css.button__home} onPress={()=>navigation.navigate('Login')}>

<Image     
        source={require('../assets/IMG/buttonLogin.png')}/>
    
      </TouchableOpacity>


      <TouchableOpacity onPress={()=>navigation.navigate('Rastreio')}>


<Image source={require('../assets/IMG/buttonRastreio.png')}/>
        
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('cadastro')}>


<Image source={require('../assets/IMG/buttonCadastro.png')}/>
        
      </TouchableOpacity>
      </View>

      
        
        );
        
       
    
    }