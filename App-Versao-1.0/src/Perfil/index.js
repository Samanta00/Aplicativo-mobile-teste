import { useNavigation } from "@react-navigation/native";
import React, { useState,useEffect } from "react";
import { StyleSheet,  Text,  TextInput, Image, View,  KeyboardAvoidingView,  TouchableOpacity, Animated,} from "react-native";


export default function Perfil(){
    const [nomeUser,setNomeUser]=useState()

    return(
        <KeyboardAvoidingView>
            <Img src='../assets/icon.png'/>
        </KeyboardAvoidingView>
    )

}