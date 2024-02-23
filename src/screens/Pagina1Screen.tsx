import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps < any, any>{
};


export const Pagina1Screen = (  { navigation } : Props ) => {

  return (
    
    <View style ={ styles.globalMargin }>
        
        <Text style= {styles.title}>
        Pagina1Screen kapo
        </Text>
        <Button
            title=' Ir a Tab2Screen'
            onPress={ () => navigation.navigate(/* 'Pagina2Screen' */'Tab2Screen')}
        />


        <Text style= {styles.title}>
        Navegar con argumentos: 
        </Text>

    <View style= {{ flexDirection: 'row'}}>

    <TouchableOpacity
    style={{ ...styles.botonGrande,
            backgroundColor: '#5856D6'
          }}
    onPress={ ()=> navigation.navigate('PersonaScreen',{
      id: 1,
      nombre: 'Pedro'
    })}>

        <Text  style={ styles.botonGrandeTexto}>Pedro </Text>

    </TouchableOpacity>

    <TouchableOpacity
    style={ { ...styles.botonGrande,
              backgroundColor: '#FF9427' }}
    onPress={ ()=> navigation.navigate('PersonaScreen',{
      id: 2,
      nombre: 'Marìa'
    })}>

        <Text  style={ styles.botonGrandeTexto} >Maria </Text>

    </TouchableOpacity>



    </View>



{/* <Button
        title='ir a persona'
        onPress={ ()=>  navigation.navigate('PersonaScreen')}  
        /> */}


    </View>
  )

}
