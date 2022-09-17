import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";

export default function Home() {
  return (
    <>
      <View>
        <Header name="Jonas Marques" />
      </View>
      <View style={style.container}>
        <Text style={style.text}>Pagina Home</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
