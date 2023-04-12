import React from "react";
import {Text} from "react-native";
import Proptypes from "prop-types";

export default function Saludar(props){
    const{ name } = props;
    return <Text>Hola {name}</Text>;
}
//Saludar.defaultProps = {
//    name: "default",
//};

Saludar.proptypes ={
    name: Proptypes.string.isRequired,
}