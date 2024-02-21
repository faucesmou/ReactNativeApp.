import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';


interface Props extends StackScreenProps< RootStackParams , 'PersonaScreen'>{};
/* 
interface RouterParams {
    id: number; 
    nombre: string
} */

export const PersonaScreen = ( {route, navigation }: Props ) => {

   // const params = route.params as RouterParams;
   const params = route.params;

    useEffect( ()=> {
        navigation.setOptions({
            title: params.nombre
        })
    })

   // console.log(JSON.stringify(props, null, 3));
    
  return (
    <View style= { styles.globalMargin }>

        <Text style = { styles.title }>
        {
            JSON.stringify( params, null, 3)
        }
            </Text>        
    </View>
  )
    
  
}



