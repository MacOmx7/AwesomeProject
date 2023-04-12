import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreens from "../components/screens/HomeScreens";
import SettingsScreen from "../components/screens/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreens} />
            <Drawer.Screen name="Setting" component={SettingsScreen} />
        </Drawer.Navigator>
    )
}

