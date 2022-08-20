import  express  from "express";
// import sequelize from "../banco";
import cors from "cors"

const app=express();



app.use(express.json())

app.use((req,res,next)=>{
    console.log('Acessou o Middleware')
    res.header("Access-Control-Allow-Origin",'*')
    app.use(cors());
    next();
})
let registro=[
    {id:1,'Email':'ellen.samanta@outlook.com','senha':'5c4434344'},
    {id:2,'Email':'ricardo.mendes@hotmail.com','senha':'XUMXUM3543'},
    {id:3,'Email':'luana.Mauricelia@gmail.com','senha':'20214432'},
    {id:4,'Email':'rihanna.mendes@hotmail.com','senha':'ZUMZUMLU233'},
    {id:5,'Email':'caio.joão@outlook.com','senha':'PR23232!'},
    {id:6,'Email':'gatinhaMirela@gmai.com','senha':'Err5654!'}
]

//como nao estou passando caminho de porta por padrão vai cair na 3000
app.get('/',(req,res)=>{
    res.status(200).send('Calendario de registro');
//vai retornar nessa porta o envio do texto livraria


})
app.get('/registro',(req,res)=>{
    res.status(200).json(registro)
    //vai cair na porta um arquivo json com os objetos de avisos
})

app.get('./registro:id',(req,res)=>{
    let indice=BuscaLivros(req.params.id)
    res.json(registro[indice])
})


app.post('/registro',(req,res)=>{
    registro.push(req.body)
    res.status(201).sendStatus('foi enviado com sucesso')
    //o metodo post cadastra um novo registro, ele vai fazer uma função e nessa função vai puchar um elemento pra dentro do array que será o elemento
    //do corpo da requisição que é o req.body
})

app.put('./registro:id',(req,res)=>{
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