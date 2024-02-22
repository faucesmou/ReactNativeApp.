import { StackScreenProps } from '@react-navigation/stack'
import { StackActions } from '@react-navigation/native'; 
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> {};



export const Pagina3Screen = ( { navigation } : Props ) => {

navigation.dispatch ( 
  StackActions.replace('Profile', {
    user: 'jane',
  })
)
  return (
    <View style={ styles.globalMargin }>
        
        <Text style= {styles.title}>
        Pagina3 WACHO 
        </Text>

        <Button
            title = "Regresar"
            onPress={ () => navigation.pop()} 
        />
        <Button
            title = "ir a pagina 1"
            onPress={ () => navigation.popToTop()} 
        />

    </View>
  )
}
