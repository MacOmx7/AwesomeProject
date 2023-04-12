import { View, Text, Button,SafeAreaView } from 'react-native'
import React from 'react'

export default function SettingsScreen(prop) {
    const { navigation} = prop;

    const goToHome = () => {
        navigation.navigate("Home");
    };
  return (
    <SafeAreaView>
      <Text>Estamos en SettingsaScreen</Text>
      <Button onPress={goToHome} title='Ir a Home' />
    </SafeAreaView>
  )
}