import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image
        style={styles.avatar}
        source={require("../../../assets/euuu.png")}
      />
      <View style={styles.body}>
        <Text style={styles.name}>Jonas Marques</Text>
        <Text style={styles.email}>Jonas.Marques123@outlok.com</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.descriptionContainer}>
        <Text>Idade: 19 anos</Text>
        <Text>Gênero: Masculino</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
          quam efficitur, rutrum nisl id, porttitor ante. Nunc volutpat risus
          velit, quis lobortis erat porta facilisis.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#b0e0e6",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 70,
    alignItems: "center",
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  email: {
    color: "gray",
    fontWeight: "400",
  },
  editButton: {
    marginTop: 10,
  },
  descriptionContainer: {
    fontSize: 16,
    color: "#696969",
    margin: 10,
    textAlign: "center",
  },
  description: {
    padding: 10,
    fontWeight: "600",
  },
  buttonText: {
    fontSize: 16,
    color: "#696969",
    textAlign: "center",
  },
});
