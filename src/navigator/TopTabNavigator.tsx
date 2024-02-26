import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator =() => {


 const { top: paddingTop } = useSafeAreaInsets()

  return (
    <Tab.Navigator
    style={{ paddingTop }}
    sceneContainerStyle={{
      backgroundColor: 'white'
    }}
    screenOptions={({ route })=> ({
      tabBarActiveTintColor: colores.primary,
      /* tabBarPressColor: 'green', */
      tabBarStyle: {
        borderTopColor: 'blue',
        borderTopWidth: 1,
        elevation: 0,
       /*  shadowColor: 'transparent' */
      },
      tabBarLabelStyle: {
        fontSize: 12,
        color: 'green'
      },
      tabBarIndicatorStyle: {
        backgroundColor: colores.primary, // Ajusta el color del indicador de cada pestaña(linea que subraya)
      },
      tabBarIcon: ( color/* , focused, size */) => {
        console.log(route.name)

        let iconName: string = '';
        switch( route.name ) {
          case 'Chat':
            iconName= 'CH'
            break;
          case 'Contacto':
            iconName= 'CO'
            break;
          case 'Album':
            iconName= 'AL'
            break;    
        }

        return <Text style={{ color: 'orange'}}>{ iconName }</Text>
      }
    })}
    >
      <Tab.Screen name="Chat" component={ ChatScreen} />
      <Tab.Screen name="Contacto" component={ ContactsScreen} />
      <Tab.Screen name="Album" component={ AlbumScreen } />
    </Tab.Navigator>
  );
}