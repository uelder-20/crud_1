import React from 'react';
import {View, Text} from 'react-native';
import { css } from '../assets/Css/Css';

export default function Page(props)
{

    return (
        <View style={css.textPage}>
            <Text>O nome da empresa é {props.empresa} e seu funcionario é {props.name}.
            comprou o produto {props.produto} na seguinte quantidade {props.quantidade}
            </Text>

            
            </View>

    );
}

