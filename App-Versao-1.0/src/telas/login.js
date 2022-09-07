import { useNavigation } from "@react-navigation/native";
import React, { useState,useEffect } from "react";
import { StyleSheet,  Text,  TextInput,  View,  KeyboardAvoidingView,  TouchableOpacity, Animated,} from "react-native";
import api from "../Server/Api";

export default function Menu() {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  const [display, setDisplay]=useState('none')
  const navigation = useNavigation();
  const [email, setEmail]=useState(null)
  const [senha, setPassword]=useState(null)




  Animated.parallel([
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 20,
      useNativeDriver: true,
    }),
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }),
  ]).start();




async function Busca(){
  let response= await fetch('http:/192.168.0.107:8083/login', {

    method:'POST',
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      name:email, 
      password:senha
    })


  })


  // api.get('/registro').then(
  //   response=>{
  //     console.log(response.data)
  //   }
  // )
}



  return (
    <KeyboardAvoidingView style={styles.background}>


      <View style={styles.container}>
        <Animated.Image source={require("../../assets/favicon.png")} />
      </View>


      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [{ translateY: offset.y }],
          },
        ]}

      >


          <View>
            <Text style={styles.textRegistrar}> {email} {senha} </Text>
            <Text style={styles.textValidado(display)}>Email ou Senha Inválidos</Text>
          </View>


        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={email => setEmail(email)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCorrect={false}
          onChangeText={password => setPassword(password)}
        />
{/* ()=>setDisplay('flex') */}
        <TouchableOpacity style={styles.btnAcessar} onPress={Busca}>
          <Text style={styles.textAcessar}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnRegistrar}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.textRegistrar}>Cadastrar</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    width: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingBottom: 50,
  },
  text: {
    color: "#fff",
  },
  input: {
    backgroundColor: "#fff",
    width: "90%",
    marginBottom: 15,
    color: "#222",
    fontSize: 17,
    borderRadius: 7,
    padding: 12,
  },
  btnAcessar: {
    backgroundColor: "green",
    width: "40%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  textAcessar: {
    color: "#FFF",
    fontSize: 18,
  },
  btnRegistrar: {
    marginTop: 15,
    backgroundColor: "#000",
    width: "30%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  textRegistrar: {
    color: "#FFF",
  },
  textValidado:(text='none')=>( {
    color: "red",
    display:text
  }),

});
