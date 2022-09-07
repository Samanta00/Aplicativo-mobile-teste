import registro from "../models/Data.js"


class RegistrosController{

    static listarResgisters=(req,res)=>{
        registro.find((err,registro)=>{
            res.status(200).json(registro)
     })
  //vai cair na porta um arquivo json com os objetos de avisos
    }

    static cadastrarRegistros=(req,res)=>{
        let registros = new registro(req.body);

        registros.save((err) => {
    
          if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
          } else {
            res.status(201).send(registros.toJSON())
          }
        })
    }

}

export default RegistrosController;