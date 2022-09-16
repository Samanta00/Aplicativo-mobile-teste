import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Button } from "../botao/botao";
import { Input } from "../Input/input"
import { ContainerForm } from "./Estilo-Cadastro"
import { Container } from '../botao/Estilo-Botao';
import {Text, View} from "react-native";
import uuid from 'react-native-uuid';
import api from '../../../Server/Api';


// const VALID_EMAIL_EXPRESSION = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

export default function Cadastro() {

  const [nome,setNome]=useState("")
  const [email,setEmail]=useState("")
  const [senha,setSenha]=useState("")
  const [confirmaSenha,setSenhaConfirmacao]=useState("")

 

// const {register, handle}=useState()
//   const onSubmit=(evento)=>{
//     evento.preventDefault();
//     const data={

//     }
//   }

const handleSubmit = () =>{
  if(nome==='' || email==='' || senha===''|| confirmaSenha===''){
    alert('Preencha os Nulos campos')
    return
  }
  const id=uuid.v4();
  const data={
    id,
    nome,
    email,
    senha,
    confirmaSenha
  }
  console.log(data)
}



  return (

    <ContainerForm>
   <View>
        <Text>Faça um Cadastro</Text>
    </View>


     <Input
        icon="user"
        placeholder="Nome"
        onChangeText={setNome}//dessa forma eu economizo código sendo passado onChangeText={evento => EnvioDados(evento)}
      />
      <Input
        icon="mail"
        placeholder="Seu Melhor E-mail"
        keyboardType="email-address"
        autoCapitalize='none'
        onChangeText={setEmail}
      />
      <Input
        icon="lock"
        placeholder="Senha"
        secureTextEntry
        onChangeText={setSenha}
      />
      <Input
        icon="lock"
        placeholder="Confirme a senha"
        secureTextEntry
        onChangeText={setSenhaConfirmacao}
      />



<View>
  <View>
    <Text>Seus Dados serão usados Para um Projeto de tcc e não terá uso para outros fins a não ser ao uso desse sistema.
       Ao Concordar com o termo você estará aceitando</Text>
  </View>
<Button
        title="Cadastrar"
        onPress={handleSubmit}
      />

</View>





  </ContainerForm>
   
  )
}