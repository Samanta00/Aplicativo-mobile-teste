import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Header({ name }) {
  return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
            
        </TouchableOpacity>
      </View>
  )
}

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#b0e0e6",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
});
