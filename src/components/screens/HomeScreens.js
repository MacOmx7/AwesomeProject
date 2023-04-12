import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'

export default function HomeScreens(prop) {
    const { navigation} = prop;

    const goToSetings = () => {
        navigation.navigate("Sttings");
    };

  return (
    <SafeAreaView>
      <Text>Estamos en HomeScreens</Text>
      <Button onPress={goToSetings} title='Ir a Ajustes' />
    </SafeAreaView>
  )
}