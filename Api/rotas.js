
import express from "express"
const app=express()
import cors from "cors"

app.use(express.json()) //como o express nao consegue ler os arquivos por outros parametros sem ser o de visualização como o post,delete etc eu preciso
//começar a usar ele para arquivos json()

app.use((req,res,next)=>{
    console.log('Acessou O middleware!')
    res.header("Access-Control-Allow-Origin", "*")//o asterisco significa q qualquer url pode fazer a requisição pela api
    app.use(cors())
    next();
})

let livros=[
    {id:1,'Email':'ellen.samanta@outlook.com','senha':'5c4434344'},
    {id:2,'Email':'ricardo.mendes@hotmail.com','senha':'XUMXUM3543'},
    {id:3,'Email':'luana.Mauricelia@gmail.com','senha':'20214432'},
    {id:4,'Email':'rihanna.mendes@hotmail.com','senha':'ZUMZUMLU233'},
    {id:5,'Email':'caio.joão@outlook.com','senha':'PR23232!'},
    {id:6,'Email':'gatinhaMirela@gmai.com','senha':'Err5654!'}
]


app.get('/',(req,res)=>{
    res.status(200).send('Bem vindo A biblioteca Virtual')
})



app.get('/registro',(req,res)=>{
    res.status(200).json(livros)
    //vai devolver um objeto com o status 200 e enviar o objeto livros como um json

})

app.get('/registro',(req,res)=>{
    let indice=encontrarIndice(req.params.id)
    res.json( lista[indice] );  
   

})



app.post('/registro',(req,res)=>{
    livros.push(req.body)
    res.status(201).send('Livro foi cadastrado com sucesso')
})

app.put('/registro/:id',(req,res)=>{
    let indice=encontrarIndice(req.params.id)
    //aqui é pra encontrar o indice que os parametros id da requisição está passando e fazer achar com livro existe com esse id
    livros[indice].senha=req.body.senha
    //então pego o objeto indice e comparo com oque foi passado, quando ele achar o msm id no objeto ele vai substituir
    //vai pegar o id do corpo da requisição que está sendo passado e substituir
    res.json(livros)

})


app.delete('/registro/:id',(req,res)=>{
    let {id}=req.body
    let indice=encontrarIndice(id)
    //indice vai entrar na função e comparar onde está igual o valor passado com o valor que existe no objeto pelo id
  
    livros.slice(indice,1)
  
    req.send(`Livro do id ${id} foi removido com sucesso`)

})

function encontrarIndice(id){
    return livros.findIndex(livros => livros.id==id)

}

export default app
