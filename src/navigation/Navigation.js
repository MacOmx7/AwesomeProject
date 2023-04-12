import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreens from '../components/screens/HomeScreens'
import SettingsScreen from '../components/screens/SettingsScreen'

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            
            <Stack.Screen name="Sttings" component={SettingsScreen} />
            <Stack.Screen name="Home" component={HomeScreens} />
        </Stack.Navigator>
    )
}