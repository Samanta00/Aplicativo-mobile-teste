import  express  from "express";
// import sequelize from "../banco";
import cors from "cors"
import db from "./Database/db.server.js";
import registro from "../src/models/Data.js";
import routes from "./Routes/index.js"


db.on("error",console.log.bind(console,'Erro de conexão'))
db.once("open", ()=>{
console.log('Conexão feita com o banco foi um sucesso')
})




const app=express();



app.use(express.json())

routes(app);

app.use((req,res,next)=>{
    console.log('Acessou o Middleware')
    res.header("Access-Control-Allow-Origin",'*')
    app.use(cors());
    next();
})



 
app.get('/registro:id',(req,res)=>{
    let indice=BuscaLivros(req.params.id)
    res.json(registro[indice])
})


app.post('/registro',(req,res)=>{
    registro.push(req.body)
    res.status(201).sendStatus('foi enviado com sucesso')
    //o metodo post cadastra um novo registro, ele vai fazer uma função e nessa função vai puchar um elemento pra dentro do array que será o elemento
    //do corpo da requisição que é o req.body
})

app.put('/registro:id',(req,res)=>{
    let indice=BuscaLivros(req.params.id)
    registro[indice].titulo= req.body.titulo
    //no final ele pega o indice de titulo entra no objeto titulo e muda para qual o corpo da requisição está passando
    //corpo da requisição==url
    res.json(registro)
})


app.delete('/registro/:id',(req,res)=>{
    let {id}=req.params
    let indice=BuscaLivros(id)
    registro.splice(indice,1)
    
    res.send(`Aviso: ${id} foi apagado com sucesso.`)
    
    
})

function BuscaLivros(id){
    return registro.findIndex(registro => registro.id==id)
    //o indice de livros vai retornar uma função que vai comparar se são iguais o id do livro com o id que o parametro da função está passando
}

export default app