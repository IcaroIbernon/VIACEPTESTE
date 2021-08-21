const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

const mongoose = require("./configs/db");
const End = require("./models/end");
require('dotenv').config()
const port = process.env.PORT;

app.use(cors());

app.get("/", async (req, res) => {
  var ceps = req.query.cep;

  if (ceps === undefined) {
    //Garantindo que o cep seja enviado
    res.sendStatus(404);
  } else {
    if (!ceps.includes("-")) {
      ceps = ceps.replace(/(.{5})/g, "$1-"); //Unificando cep
    }
    //Chamar DB antes p/ checar se existe
    existe = await End.exists({ cep: ceps });
    if (existe == false) {
      //Se n existe, faz o request
      dados = await axios
        .get("https://viacep.com.br/ws/" + ceps + "/json")
        .catch(function (error) {});
      //Enviar dados.data para o db se n existir
      if (dados === undefined || dados.data.erro === true) {
        res.sendStatus(404); //Cep indefinido ou inexistente
      } else {
        await End.create(dados.data); //Cep armazenado no db
        res.send(dados.data);
      }
    } else {
      dados = await End.findOne({ cep: ceps }); //Cep buscado no db
      res.send(dados);
    }
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
