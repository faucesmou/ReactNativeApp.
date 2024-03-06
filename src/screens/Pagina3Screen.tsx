import { StackScreenProps } from '@react-navigation/stack'
import { StackActions } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/Ionicons';

import React from 'react'
import { Button, Text, View } from 'react-native'
import { colores, styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props extends StackScreenProps<any, any> {};



export const Pagina3Screen = ( { navigation } : Props ) => {

/* navigation.dispatch ( 
  StackActions.replace('Profile', {
    user: 'jane',
  })
) */


 const { top } = useSafeAreaInsets();
  return (
    <View style={ {
      ...styles.globalMargin,
      marginTop: top
     }}>
        
        <Text style= {styles.title}>
        Pagina3Screen tuiterr e guacho vamo arriba
        </Text>

        <Button
            title=' Regresar'
            onPress={ () => navigation.navigate(/* 'Pagina2Screen' */'Tab2Screen')}
        />
        <Button
            title=' Ir a Tab1Screen'
            onPress={ () => navigation.navigate(/* 'Pagina2Screen' */'Tab1Screen')}
        />

<Text>
<Text style= {styles.title}>
        Iconos
        </Text>
      
        <Icon name="accessibility-outline" size={40} color={ colores.primary } />
        <Icon name="airplane-outline" size={40} color="#900" />
        <Icon name="accessibility-outline" size={40} color={ colores.primary } />
        <Icon name="airplane-outline" size={40} color="#900" />
        <Icon name="accessibility-outline" size={40} color={ colores.primary } />
        <Icon name="airplane-outline" size={40} color="#900" />

        </Text>
    {/*     <Button∫
            title = "Regresar"
            onPress={ () => navigation.pop()} 
        />
        <Button
            title = "ir a pagina 1"
            onPress={ () => navigation.popToTop()} 
        /> */}

    </View>
  )
}
