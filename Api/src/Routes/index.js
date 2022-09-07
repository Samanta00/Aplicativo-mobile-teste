import express from "express";
import registro from "./registrosRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Registros Usuários"})
  })

  app.use( express.json(),  registro )
}

export default routes