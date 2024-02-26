import React from 'react'
import { StyleProp, TextStyle, View } from 'react-native'
import { Text } from 'react-native-paper'
import { tamaños } from '../theme/appTheme'

export const ContactsScreen = () => {
  return (
    <View>
    <Text style={ tamaños.grande  as StyleProp<TextStyle>}>
    Contact Screen
    </Text>
         
</View>
  )
}
