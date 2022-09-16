import React from "react";
import { StyleSheet,StatusBar, TextInput, View, Image, Text , Dimensions} from "react-native";

export default function Menu(){
    return(
        <View style={estilos.BodyParam}>
            <StatusBar/>
               <View>  
                 
                        <Image style={estilos.userImagge} source={require("../../../assets/euuu.png")} />  
                            <Text style={estilos.TextNome}>André Pereira dos Santos</Text> 
                        <View style={estilos.bodyForm}>
                        
                            <Text style={estilos.TextEmail}>Andŕe.Pereirinha@gmail.com</Text>  
                            <Text style={estilos.TextSenha}>senha</Text>       
                            <Text style={estilos.TextEmail}>Andŕe.Pereirinha@gmail.com</Text>  
                            <Text style={estilos.TextSenha}>senha</Text>  
                            <Text style={estilos.TextEmail}>Andŕe.Pereirinha@gmail.com</Text>  
                            <Text style={estilos.TextSenha}>senha</Text>  
                            <Text style={estilos.TextEmail}>Andŕe.Pereirinha@gmail.com</Text>  
                            <Text style={estilos.TextSenha}>senha</Text>  
                            <Text style={estilos.TextEmail}>Andŕe.Pereirinha@gmail.com</Text>  
                            <Text style={estilos.TextSenha}>senha</Text>                     
                        </View>

               </View> 
            
        </View>
    
    )
}
const width=Dimensions.get('screen').width

const estilos=StyleSheet.create({
    BodyParam:{
        backgroundColor:'#b0e0e6',
        flex:1,
        width:'100%',
        alignItems: "center",
        justifyContent: "center",
    },
    userImagge:{
        width:270,
        height:578/768 * width,
        borderRadius:300/2,
        
    },

    bodyForm:{
    backgroundColor:'white'
    },
    TextNome:{
        fontSize: 21,
        fontWeight: '600',
        color: '#45565F',
        padding: 15
    },
    TextEmail:{
        fontSize: 17,
        color: '#717E84',
        marginTop: 5,
    },
    TextSenha:{
        color: '#95A8B2',
        fontSize: 13,
        marginTop: 5,
    }
})