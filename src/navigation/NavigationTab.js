import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreens from '../components/screens/HomeScreens';
import SettingsScreen from '../components/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreens} />
      <Tab.Screen name='Sttings' component={SettingsScreen} />
    </Tab.Navigator>
  )
}