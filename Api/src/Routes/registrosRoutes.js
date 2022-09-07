import  express from "express";
import RegistrosController from "../Controllers/registros-controllers.js";





const router = express.Router();

router
  .get("/registro", RegistrosController.listarResgisters)
  .post("/registro", RegistrosController.cadastrarRegistros)


export default router;   