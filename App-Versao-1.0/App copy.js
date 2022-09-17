import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes';
// é necessário mudar o nome deste arquivo para App.js
export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}
