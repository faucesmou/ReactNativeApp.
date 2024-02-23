import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
//import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { StackNavigator2 } from './StackNavigator2';
import { Tab3Screen } from '../screens/Tab3Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { Pagina1Screen } from '../screens/Pagina1Screen';


const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1Screen" component={ Pagina1Screen } />
      <Tab.Screen name="Tab2Screen" component={ Tab2Screen } />
      <Tab.Screen name="Tab3Screen" component={ Pagina3Screen } />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}