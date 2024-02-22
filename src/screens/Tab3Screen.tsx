import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from './Pagina1Screen';
import { Pagina2Screen } from './Pagina2Screen';
import { Pagina3Screen } from './Pagina3Screen';
import { PersonaScreen } from './PersonaScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';


export const Tab3Screen = ( /* navigation */ ) => {

  const Stack = createStackNavigator();

  useEffect(() => {
    console.log('Tab 3 Screen effect');
    
  }, [])
  return (
    <View>
      <Stack.Screen name="Pagina1Screen" options={{ title: "Pagina1" }} component={ Pagina1Screen } />
      <Stack.Screen name="Pagina2Screen" options={{ title: "Pagina3" }} component={ Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{ title: "Pagina3" }} component={ Pagina3Screen } /> 
    </View>
  )
}
