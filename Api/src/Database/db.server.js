


import mongoose from "mongoose"


mongoose.connect("mongodb+srv://Ellen_samanta:123@api-date.o8mxejc.mongodb.net/Api-date",{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log("conectou")).catch((error)=>console.log(error));

let db = mongoose.connection;



export default db;