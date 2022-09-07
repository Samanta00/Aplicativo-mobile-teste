import mongoose from "mongoose";

const dadosSchema = new mongoose.Schema(
  {
    id: {type: String},
    email: {type: String, required: true},
    senha: {type: String, required: true},

  }
);

const registro= mongoose.model('livros', dadosSchema);

export default registro;

//aqui estou criando um modelo do banco de dados moongose chamado cadastro, ou seja msm que ja exista um banco de dados la no mmongose
//ele vai chamar a criação msm assim
//se não tivesse nenhum ele criaria sozinho um com esse nome
//la ele vai guardar todos os valores que serão passados em dados






